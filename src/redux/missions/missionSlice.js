import { createSlice } from '@reduxjs/toolkit';

const missionSlice = createSlice({
  name: 'mission',
  initialState: {
    missions: [],
    joinedMissions: [],
  },
  reducers: {
    setMissions: (state, action) => {
      state.missions = action.payload;
    },
    joinMission: (state, action) => {
      const missionId = action.payload;
      const mission = state.missions.find(
        (mission) => mission.mission_id === missionId,
      );
      if (mission) {
        mission.reserved = true;
        state.joinedMissions.push(mission);
      }
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      state.missions = state.missions.map((mission) => (mission.mission_id === missionId
        ? { ...mission, reserved: false }
        : mission));
      state.joinedMissions = state.joinedMissions.filter(
        (mission) => mission.mission_id !== missionId,
      );
    },
  },
});

export const { setMissions, joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
