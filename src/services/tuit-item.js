import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {deleteTuitThunk, updateTuitThunk} from "./tuits-thunks";

const TuitItem = (
    {
      tuit  = {
        "_id": 123,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists,being building Mars Base 1",
        "image": "spacex.jpeg",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  const likeTuit = (tuit) => {
    const updatedTuit = {
      ...tuit,
      liked: true,
      likes: typeof tuit.likes === 'undefined' ? 1 : tuit.likes + 1
    }
    console.log(updatedTuit)
    dispatch(updateTuitThunk(updatedTuit));
  }
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-auto">
            <img width={50} className="rounded-circle float-end" src={`/images/${tuit.image}`}/>
          </div>
          <div className="col-10">
            <div className = "row">
              <div className = "col-11">
                <span className="fw-bold"> {tuit.userName}</span>
                <span> <i className="bi bi-check-circle-fill wd-blue-color"></i></span>
                <span className="text-secondary"> {tuit.handle} &#183; {tuit.time} </span>
              </div>
              <div className= "col-1 float-end">
               <i className="bi bi-x-lg float-end"
                  onClick={() => {dispatch(deleteTuitThunk(tuit._id))}}></i>
              </div>
            </div>
            <div>{tuit.tuit}</div>
            <div className="mt-3 row text-secondary">
              <div className="col"><i className="bi bi-chat"></i>  {tuit.replies}</div>
              <div className="col">&#x21C6; {tuit.retuits}</div>
              <div className="col">
                <i onClick={() => {likeTuit(tuit)}}>
                  &#9825; {tuit.likes}</i>
              </div>
              <div className="col"><i className="bi bi-box-arrow-up"></i></div>
            </div>
          </div>
        </div>
      </li>
  );
};
export default TuitItem;