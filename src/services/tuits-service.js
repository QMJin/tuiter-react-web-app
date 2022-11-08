import axios from "axios";
const TUITS_API = 'http://localhost:4000/api/tuits';

export const findTuits = async () => {
  /*const response = await fetch(TUITS_API)*/
  const response = await axios.get(TUITS_API)
  /*const tuits = await response.json()*/
  /*return tuits*/
  return response.data
}
export const createTuit = async (tuitText) => {
  const response = await axios.post(TUITS_API,{tuit: tuitText})
  return response.data
}

export const deleteTuit = async (tid) => {
  const response = await axios.delete(`${TUITS_API}/${tid}`)
  return tid
}
export const updateTuit = async (tuit) => {
  const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit)
  return response.data
}

