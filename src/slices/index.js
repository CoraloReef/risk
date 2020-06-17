import { combineReducers } from 'redux';

import continents, { actions as continentsActions } from './continents';
import territories, { actions as territoriesActions } from './territories';
import players, { actions as playersActions } from './players';
import currentPlayerId, { actions as currentPlayerIdActions } from './currentPlayerId';
import gamePhase, { actions as gamePhaseActions } from './gamePhase';

export default combineReducers({
  continents,
  territories,
  players,
  currentPlayerId,
  gamePhase,
});

const actions = {
  ...continentsActions,
  ...territoriesActions,
  ...playersActions,
  ...currentPlayerIdActions,
  ...gamePhaseActions,
};

const asyncActions = {};

export { actions, asyncActions };
