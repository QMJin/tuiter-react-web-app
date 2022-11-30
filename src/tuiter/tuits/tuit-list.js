import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import {useEffect, useState} from "react";
import {createTuitThunk, findTuitsThunk} from "./tuits-thunks.js";

const TuitsList = () => {
  const[tuitText, setTuitText] = useState('')
  const {tuits, loading} = useSelector((state) => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  },[])
  return (
        <ul className="list-group">
          {
            loading && <li className="list-group-item">
              Loading ...
            </li>
          }
          <li className="list-group-item">
            <button
                onClick={() => dispatch(createTuitThunk(tuitText))}
                className="btn btn-primary float-end">Tuit</button>
            <input
                value={tuitText}
                onChange={(e) => setTuitText(e.target.value)}
                placeholder="What's happening?" className="form-control w-75"/>
          </li>
          {
            tuits.map(post =>
              <TuitItem
                key={post._id}
                tuit={post}
              />
            )
          }
        </ul>
  )
}
export default TuitsList;