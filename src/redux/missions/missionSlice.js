import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk(
  'mission/fetchMissions',
  async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/missions');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching missions:', error);
      throw error;
    }
  },
);

const missionSlice = createSlice({
  name: 'mission',
  initialState: {
    missions: [],
    joinedMissions: [],
    loading: false,
    error: null,
  },
  reducers: {
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.loading = false;
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
