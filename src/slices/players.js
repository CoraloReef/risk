import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'players',
  initialState: { byId: {}, allIds: [] },
  reducers: {
    addPlayer: (state, { payload: { player } }) => {
      const { byId, allIds } = state;
      return {
        byId: { ...byId, [player.id]: player },
        allIds: [...allIds, player.id],
      };
    },
  },
});

const actions = { ...slice.actions };
export { actions };
export default slice.reducer;
