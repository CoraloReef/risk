import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import { i18nReducer } from 'react-redux-i18n';
import * as actions from '../actions';

const continents = createReducer({ byId: {}, allIds: [] }, {
  [actions.addContinent]: (state, { payload: { continent } }) => {
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [continent.id]: continent },
      allIds: [...allIds, continent.id],
    };
  },
});

const territories = createReducer({ byId: {}, allIds: [] }, {
  [actions.addTerritory]: (state, { payload: { territory } }) => {
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [territory.id]: territory },
      allIds: [...allIds, territory.id],
    };
  },
  [actions.updateTerritoryData]: (state, { payload: { territory } }) => {
    const { byId, allIds } = state;
    const { id } = territory;
    return {
      allIds,
      byId: { ...byId, [id]: territory },
    };
  },
});

const players = createReducer({ byId: {}, allIds: [] }, {
  [actions.addPlayer]: (state, { payload: { player } }) => {
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [player.id]: player },
      allIds: [...allIds, player.id],
    };
  },
});

const currentPlayerId = createReducer(0, {
  [actions.setCurrentPlayer]: (state, { payload: { id } }) => id,
});

const gamePhase = createReducer('start', {
  [actions.setGamePhase]: (state, { payload: { phase } }) => phase,
});

export default combineReducers({
  continents,
  territories,
  players,
  currentPlayerId,
  gamePhase,
  i18n: i18nReducer,
  form: formReducer,
});
