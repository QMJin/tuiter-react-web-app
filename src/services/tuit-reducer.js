import {
  createTuitThunk,
  deleteTuitThunk,
  findTuitsThunk,
  updateTuitThunk
} from "./tuits-thunks";
const {createSlice} = require("@reduxjs/toolkit");

const initialState = {
  tuits: [
    {
      "_id": "123",
      "topic": "Space",
      "username": "SpaceX",
      "handle": "@spacex_init",
      "time": "2h",
      "image": "spacex.jpeg",
      "title": "SpaceX's Mission",
      "tuit": "You want to wake up in the morning and think the future is going to be great - and"
          + "that’s what being a spacefaring civilization is all about. It’s about believing in the future"
          + "and thinking that the future will be better than the past. And I can’t think of anything more"
          + "exciting than going out there and being among the stars",
      "liked": true,
      "likes": 2345,
      "replies": 123,
      "retuits": 432
    },
    {
      "_id": "234",
      "topic": "Traffic",
      "username": "The Boring Company",
      "handle": "@boringcompany_init",
      "time": "2h",
      "image": "boring.png",
      "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian" +
          "colonists being building Mars Base 1",
      "tuit": "The Boring Company (TBC) is an American infrastructure and tunnel construction" +
          "services company founded by Elon Musk. Its ongoing and proposed projects are designed for" +
          "intra-city ('loop') transit systems.",
      "liked": true,
      "likes": 2345,
      "replies": 123,
      "retuits": 432
    },
  ],
  loading: false
}

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState,
  reducer:{
    findTuits: (state, action) => {
      state.tuits = action.payload
    }
  },
  extraReducers: {
    [findTuitsThunk.pending]: (state) => {
      state.loading = true
      state.tuits = []
  },
    [findTuitsThunk.fulfilled]: (state, {payload}) => {
      state.loading = false
      state.tuits=payload
    },
    [findTuitsThunk.rejected]: (state) => {
      state.loading = false
    },
    [deleteTuitThunk.fulfilled]: (state, action) => {
      state.loading = false
      state.tuits = state.tuits.filter(t => t._id !== action.payload)
    },
    [createTuitThunk.fulfilled]: (state, action) => {
      state.tuits.push(action.payload)
    },
    [updateTuitThunk.fulfilled]: (state, action) => {
      const tuitIndex = state.tuits.findIndex(tuit => tuit._id === action.payload._id)
      state.tuits[tuitIndex] = action.payload
    }
  }
})

export default tuitsSlice.reducer;