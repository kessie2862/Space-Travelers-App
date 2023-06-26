import { createSlice } from '@reduxjs/toolkit';

const rocketSlice = createSlice({
  name: 'rocket',
  initialState: { rockets: [] },
  reducers: {
    setRockets: (state, action) => {
      state.rockets = action.payload;
    },
  },
});

export const { setRockets } = rocketSlice.actions;
export default rocketSlice.reducer;
