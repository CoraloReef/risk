import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'continents',
  initialState: { byId: {}, allIds: [] },
  reducers: {
    addContinent: (state, { payload: { continent } }) => {
      const { byId, allIds } = state;
      return {
        byId: { ...byId, [continent.id]: continent },
        allIds: [...allIds, continent.id],
      };
    },
  },
});

const actions = { ...slice.actions };
export { actions };
export default slice.reducer;
