import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'territories',
  initialState: { byId: {}, allIds: [] },
  reducers: {
    addTerritory: (state, { payload: { territory } }) => {
      const { byId, allIds } = state;
      return {
        byId: { ...byId, [territory.id]: territory },
        allIds: [...allIds, territory.id],
      };
    },
    updateTerritoryData: (state, { payload: { territory } }) => {
      const { byId, allIds } = state;
      const { id } = territory;
      return {
        allIds,
        byId: { ...byId, [id]: territory },
      };
    },
  },
});

const actions = { ...slice.actions };
export { actions };
export default slice.reducer;
