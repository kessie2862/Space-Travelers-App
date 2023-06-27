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
    setRockets: (state, action) => {
      const rocketId = action.payload.id;
      const rocketName = action.payload.rocket_name;
      const rocketDescription = action.payload.description;
      const images = action.payload.flickr_images;
      const rocket = {
        id: rocketId,
        rocket_name: rocketName,
        description: rocketDescription,
        flickr_images: images,
      };
      state.rockets.push(rocket);
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
        }));
      })
      .addCase(fetchRockets.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setRockets } = rocketSlice.actions;
export default rocketSlice.reducer;
