import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { i18nReducer } from 'react-redux-i18n';
import * as actions from '../actions';

const continents = handleActions({
  [actions.addContinent](state, { payload: continent }) {
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [continent.id]: continent },
      allIds: [...allIds, continent.id],
    };
  },
}, { byId: {}, allIds: [] });

const territories = handleActions({
  [actions.addTerritory](state, { payload: territory }) {
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [territory.id]: territory },
      allIds: [...allIds, territory.id],
    };
  },
}, { byId: {}, allIds: [] });

const players = handleActions({
  [actions.addPlayer](state, { payload: player }) {
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [player.id]: player },
      allIds: [...allIds, player.id],
    };
  },
}, { byId: {}, allIds: [] });

const currentPlayerId = handleActions({
  [actions.setCurrentPlayer](state, { payload: { id } }) {
    return id;
  },
}, '0');

const gamePhase = handleActions({
  [actions.setGamePhase](state, { payload: { phase } }) {
    return phase;
  },
}, 'start');

export default combineReducers({
  continents,
  territories,
  players,
  currentPlayerId,
  gamePhase,
  i18n: i18nReducer,
  form: formReducer,
});
