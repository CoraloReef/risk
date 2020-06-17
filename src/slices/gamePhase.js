import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'gamePhase',
  initialState: 'start',
  reducers: {
    setGamePhase: (state, { payload: { phase } }) => phase,
  },
});

const actions = { ...slice.actions };
export { actions };
export default slice.reducer;
