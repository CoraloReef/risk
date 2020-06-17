import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'currentPlayerId',
  initialState: 0,
  reducers: {
    setCurrentPlayer: (state, { payload: { id } }) => id,
  },
});

const actions = { ...slice.actions };
export { actions };
export default slice.reducer;
