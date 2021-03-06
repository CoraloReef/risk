import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { actions } from '../slices';

const mapStateToProps = (state) => {
  const { gamePhase, currentPlayerId } = state;

  const players = state.players.allIds.map((id) => state.players.byId[id]);

  const territories = state.territories.allIds.map((id) => state.territories.byId[id]);

  return {
    gamePhase,
    currentPlayerId,
    players,
    territories,
  };
};

const actionCreators = {
  setGamePhase: actions.setGamePhase,
  setCurrentPlayer: actions.setCurrentPlayer,
  updateTerritoryData: actions.updateTerritoryData,
};

const Ceil = (props) => {
  const { t } = useTranslation();

  const {
    id,
    players,
    territories,
    setGamePhase,
    currentPlayerId,
    updateTerritoryData,
    setCurrentPlayer,
  } = props;

  useEffect(() => {
    const emptyTerritories = territories.filter((i) => i.owner === null);

    if (emptyTerritories.length === 0) {
      setGamePhase({ phase: 'troopDeployment' });
    }
  }, [territories]);

  const handleClick = (territory) => () => {
    const { name, contacts, idContinent, owner } = territory;

    if (owner !== null) {
      return null;
    }

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
      return setCurrentPlayer({ id: 0 });
    }
    return setCurrentPlayer({ id: currentPlayerId + 1 });
  };

  const { name, contacts, idContinent, owner, armysCount } = territories.find(
    (territory) => territory.id === id,
  );

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
      onClick={handleClick(territoryData)}
      onKeyDown={handleClick(territoryData)}
      role="button"
      tabIndex="0"
    >
      {armysCount !== null ? <div className="territory-armys">{armysCount}</div> : null}
      <span className="ter-name">{t(`territories.${name}`)}</span>
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(Ceil);
