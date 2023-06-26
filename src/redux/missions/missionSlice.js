import { createSlice } from '@reduxjs/toolkit';

const missionSlice = createSlice({
  name: 'mission',
  initialState: { missions: [] },
  reducers: {
    setMissions: (state, action) => {
      state.missions = action.payload;
    },
  },
});

export const { setMissions } = missionSlice.actions;
export default missionSlice.reducer;
