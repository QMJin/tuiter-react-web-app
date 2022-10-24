import React, {useState} from "react";
import {setFirstName} from "../profile/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./index.css";

const EditProfileComponent = () => {
  const profileArray = useSelector((state) => state.profile);
  const profile = profileArray[0];
  let [currentName, setCurrentName] = useState('');
  const dispatch = useDispatch();
  const profileClickHandler = () => {
    const newFirstName = {
      profile: currentName
    }
    console.log("test")
    console.log(newFirstName)
    dispatch(setFirstName(newFirstName))
  }
  return(
    <div>
      <div className="position-relative mb-2">
        <img className="w-100 wd-padding-to-top" src={`/images/${profile.bannerPicture}`}/>
        <img className="position-absolute wd-nudge-up rounded-circle"
             width={120}
             src={`/images/${profile.profilePicture}`}/>
      </div>
      <div className="wd-padding-to-top-lg">
        <textarea
            value={currentName}
            placeholder="James Webb Space Telescope"
            className="form-control border-0"
            onChange={(event) => setCurrentName(event.target.value)}>
        </textarea>
      </div>
      <Link to="/tuiter/profile" className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold" onClick={profileClickHandler}>
        Save
      </Link>
    </div>
  );
  console.log(profile);
};

export default EditProfileComponent;



