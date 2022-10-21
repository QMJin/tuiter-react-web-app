import {createSlice} from "@reduxjs/toolkit";

const tuits = [
  {_id: 123, tuit:'Tuit 1'},
  {_id: 234, tuit:'Tuit 2'},
  {_id: 345, tuit:'Tuit 3'},
  {_id: 456, tuit:'Tuit 4'},
]

/*const tuitsReducer = () => {
  return tuits
}*/

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: tuits
})

export default tuitsSlice.reducer;

/*
export default  tuitsReducer;*/
