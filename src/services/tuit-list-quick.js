import {useEffect, useState} from "react";

const TuitListQuick = () => {
  const [tuits, setTuits] = useState([])
  const getAllTuitsFromServer = async () => {
    const response = await fetch('http://localhost:4000/api/tuits')
    const data = await response.json()
    console.log(data)
    setTuits(data)
  }
  useEffect(() => {
    getAllTuitsFromServer()
  },[])
  return (
      <>
        <h3>Tui List Quick</h3>
        {tuits.length}
        <ul>
          {
            tuits.map(tuit =>
            <li key={tuit._id}>{tuit.tuit}</li>)
          }
        </ul>
      </>
  )
}
export default TuitListQuick;