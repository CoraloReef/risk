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
  handleClick = (id, owner) => () => {
    if (owner !== null) {
      return null;
    }

    const {
      currentPlayerId,
      players,
      territories,
      setTerritoryOwner,
      increaseTerritoryArmy,
      setCurrentPlayer,
      setGamePhase,
    } = this.props;

    setTerritoryOwner({ id, owner: currentPlayerId });
    increaseTerritoryArmy(id);

    if (currentPlayerId === players.length - 1) {
      const emptyTerritories = territories.filter((i) => i.owner === null);

      if (emptyTerritories.length === 0) {
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

    return (
      <div
        className={terClass}
        onClick={this.handleClick(id, owner)}
        onKeyDown={this.handleClick(id, owner)}
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
