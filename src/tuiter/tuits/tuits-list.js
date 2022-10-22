import React from "react";
import TuitItem from "./tuitItem";
import {useSelector} from "react-redux";

const TuitsList = () => {
  const tuitsArray = useSelector((state) => state.tuits);
  return(
        <ul className="list-group">
          {
            tuitsArray.map(tuit =>
                <TuitItem
                    key={tuit._id}
                    tuit={tuit}/>)
          }
        </ul>
  );
}

export default TuitsList;