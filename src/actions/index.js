import { createAction } from 'redux-actions';

export const addContinent = createAction('CONTINENT_ADD');
export const addTerritory = createAction('TERRITORY_ADD');
export const addPlayer = createAction('PLAYER_ADD');

export const setCurrentPlayer = createAction('CURRENT_PLAYER_SET');
export const setGamePhase = createAction('GAME_PHASE_SET');

export const setTerritoryOwner = createAction('TERRITORY_OWNER_SET');
