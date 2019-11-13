import React from 'react';
import cn from 'classnames';
import { I18n } from 'react-redux-i18n';

import connect from '../connect';


const mapStateToProps = (state) => {
  const {
    gamePhase,
    currentPlayerId,
    players: { byId, allIds },
    i18n: { locale },
  } = state;
  const players = allIds.map((id) => byId[id]);

  return {
    gamePhase,
    currentPlayerId,
    players,
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
      setTerritoryOwner,
      increaseTerritoryArmy,
      setCurrentPlayer,
    } = this.props;

    setTerritoryOwner({ id, owner: currentPlayerId });
    increaseTerritoryArmy(id);

    if (currentPlayerId !== players.length - 1) {
      return setCurrentPlayer({ id: Number(currentPlayerId) + 1 });
    }
    return setCurrentPlayer({ id: 0 });
  }

  render() {
    const {
      id,
      name,
      contynentId,
      owner,
      players,
    } = this.props;

    const terClass = cn({
      territory: true,
      [name]: true,
      [`contynent-${contynentId}`]: true,
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
        <span className="ter-name">{I18n.t(`territories.${name}`)}</span>
      </div>
    );
  }
}

export default Ceil;
