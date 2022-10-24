import {createSlice } from "@reduxjs/toolkit";
import initialProfile from './profile.json';

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialProfile,
  reducers: {
    updateFirstName (state = initialProfile, action) {
      state[0].firstName = action.payload
      return state
    },
    updateLastName (state = initialProfile, action) {
      state[0].lastName = action.payload
      return state
    },
    updateBio (state = initialProfile, action) {
      state[0].bio = action.payload
      return state
    },
    updateLocation (state = initialProfile, action) {
      state[0].location = action.payload
      return state
    },
    updateWebsite (state = initialProfile, action) {
      state[0].website = action.payload
      return state
    },
    updateDateOfBirth (state = initialProfile, action) {
      state[0].dateOfBirth = action.payload
      return state
    }
  }
});

export const {updateFirstName, updateLastName, updateBio, updateLocation,updateWebsite,updateDateOfBirth} = profileSlice.actions;
export default profileSlice.reducer;
