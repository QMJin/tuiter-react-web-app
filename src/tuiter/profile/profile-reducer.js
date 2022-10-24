import {createSlice } from "@reduxjs/toolkit";
import initialProfile from './profile.json';

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialProfile,
  reducers: {
    setFirstName (state, action) {
      initialProfile.map(profile => {
        if (profile._id === 123) {
          return {...profile, firstName:action.payload}
        }
      })
    }
  }
});


export const {setFirstName} = profileSlice.actions;
export default profileSlice.reducer;
