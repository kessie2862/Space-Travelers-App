import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketSlice';
import missionReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    mission: missionReducer,
  },
});

export default store;
