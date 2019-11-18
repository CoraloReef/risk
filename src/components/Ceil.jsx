import React from 'react';
import cn from 'classnames';
import { I18n } from 'react-redux-i18n';

import connect from '../connect';

const mapStateToProps = (state) => {
  const {
    gamePhase,
    currentPlayerId,
    i18n: { locale },
  } = state;

  const players = state.players.allIds
    .map((id) => state.players.byId[id]);

  const territories = state.territories.allIds
    .map((id) => state.territories.byId[id]);

  return {
    gamePhase,
    currentPlayerId,
    players,
    territories,
    locale,
  };
};

@connect(mapStateToProps)

class Ceil extends React.Component {
  handleClick = (territory) => () => {
    const {
      id,
      name,
      contacts,
      idContinent,
      owner,
    } = territory;

    if (owner !== null) {
      return null;
    }

    const {
      currentPlayerId,
      players,
      territories,
      updateTerritoryData,
      setCurrentPlayer,
      setGamePhase,
    } = this.props;

    const territoryData = {
      id,
      name,
      contacts,
      idContinent,
      owner: currentPlayerId,
      armysCount: 1,
    };

    updateTerritoryData({ territory: territoryData });

    if (currentPlayerId === players.length - 1) {
      const emptyTerritories = territories.filter((i) => i.owner === null);

      if (emptyTerritories.length - 1 === 0) {
        setGamePhase({ phase: 'troop deployment' });
      }

      return setCurrentPlayer({ id: 0 });
    }
    return setCurrentPlayer({ id: Number(currentPlayerId) + 1 });
  }

  render() {
    const {
      id,
      players,
      territories,
    } = this.props;

    const {
      name,
      contacts,
      idContinent,
      owner,
      armysCount,
    } = territories.find((t) => t.id === id);

    const terClass = cn({
      territory: true,
      [name]: true,
      [`contynent-${idContinent}`]: true,
      pointer: owner === null,
      [players[owner] ? `bg-${players[owner].color}` : '']: players[owner],
    });

    const territoryData = {
      id,
      name,
      contacts,
      idContinent,
      owner,
      armysCount,
    };

    return (
      <div
        className={terClass}
        onClick={this.handleClick(territoryData)}
        onKeyDown={this.handleClick(territoryData)}
        role="button"
        tabIndex="0"
      >
        {(armysCount !== null)
          ? <div className="territory-armys">{armysCount}</div>
          : null}
        <span className="ter-name">{I18n.t(`territories.${name}`)}</span>
      </div>
    );
  }
}

export default Ceil;
