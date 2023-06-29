import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk('rockets/', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch rockets data.');
  }
});

const rocketSlice = createSlice({
  name: 'Rockets',
  initialState: {
    rockets: [],
    isLoading: true,
  },
  reducers: {
    bookReservation: (state, action) => {
      const rocketId = action.payload;
      const rocket = state.rockets.find((rocket) => rocket.id === rocketId);
      if (rocket) {
        rocket.reserved = true;
      }
    },
    cancelReservation: (state, action) => {
      const rocketId = action.payload;
      const rocket = state.rockets.find((rocket) => rocket.id === rocketId);
      if (rocket) {
        rocket.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rockets = action.payload.map((rocket) => ({
          id: rocket.id,
          rocket_name: rocket.name,
          description: rocket.description,
          image: rocket.flickr_images[0],
          reserved: false,
        }));
      })
      .addCase(fetchRockets.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { bookReservation, cancelReservation } = rocketSlice.actions;
export default rocketSlice.reducer;
