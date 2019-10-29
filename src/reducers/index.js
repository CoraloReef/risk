import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
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

const gamePhase = handleActions({
  [actions.setGamePhase](state, { payload: { phase } }) {
    return phase;
  },
}, 'Troop deployment');

export default combineReducers({
  continents,
  territories,
  gamePhase,
  i18n: i18nReducer,
});
