import React from "react";
import tuitItem from "./tuitItem";
import {useSelector} from "react-redux";

const TuitsList = () => {
  const tuitsArray = useSelector((state) => state.tuits);
  return(
      <ul className="list-group">
        {
          tuitsArray.map(tuit =>
              <tuitItem tuit={tuit}/>)
        }
      </ul>
  );
};

export default TuitsList;