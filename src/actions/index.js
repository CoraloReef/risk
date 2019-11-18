import { createAction } from '@reduxjs/toolkit';

export const addContinent = createAction('CONTINENT_ADD');
export const addTerritory = createAction('TERRITORY_ADD');
export const addPlayer = createAction('PLAYER_ADD');

export const setCurrentPlayer = createAction('CURRENT_PLAYER_SET');
export const setGamePhase = createAction('GAME_PHASE_SET');

export const updateTerritoryData = createAction('TERRITORY_DATA_UPDATE');
