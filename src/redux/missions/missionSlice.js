import { createSlice } from '@reduxjs/toolkit';

const missionSlice = createSlice({
  name: 'mission',
  initialState: { missions: [] },
  reducers: {
    setMissions: (state, action) => {
      state.missions = action.payload;
    },
    joinMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map((mission) => (mission.mission_id === missionId
        ? { ...mission, reserved: true }
        : mission));
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.filter(
        (mission) => mission.mission_id !== missionId,
      );
    },

  },
});

export const { setMissions, joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
