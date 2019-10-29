import { createAction } from 'redux-actions';

export const addContinent = createAction('CONTINENT_ADD');
export const addTerritory = createAction('TERRITORY_ADD');

export const setGamePhase = createAction('GAME_PHASE_SET');
