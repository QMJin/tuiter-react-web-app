import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./index.css";
import {
  updateFirstName,
  updateLastName,
  updateBio,
  updateLocation, updateWebsite, updateDateOfBirth
} from "../profile/profile-reducer";

const EditProfileComponent = () => {
  const profileArray = useSelector((state) => state.profile);
  const profile = profileArray[0];

  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [bio, setBio] = useState('');
  let [location, setLocation] = useState('');
  let [website, setWebsite] = useState('');
  let [dateOfBirth, setDateOfBirth] = useState('');

  const dispatch = useDispatch();
  const profileClickHandler = () => {
    dispatch(updateFirstName(firstName))
    dispatch(updateLastName(lastName))
    dispatch(updateBio(bio))
    dispatch(updateLocation(location))
    dispatch(updateWebsite(website))
    dispatch(updateDateOfBirth(dateOfBirth))
  }
  return(
      <>
        <Link to="/tuiter/profile"><i className="bi bi-x-lg"></i></Link>

        <div className="position-relative">
          <div>
            <div className="position-relative mb-2">
              <img className="w-100 wd-padding-to-top" src={`/images/${profile.bannerPicture}`}/>
              <img className="position-absolute wd-nudge-up rounded-circle"
                   width={120}
                   src={`/images/${profile.profilePicture}`}/>
            </div>

            <div>
              <label className="text-secondary wd-label-above-text wd-padding-to-top-lg">First Name</label>
              <textarea
                  value={firstName}
                  placeholder="James"
                  className="form-control wd-textarea-border mb-4"
                  cols="50" rows="1"
                  onChange={(event) => setFirstName(event.target.value)}>
              </textarea>
            </div>

            <div>
              <label className="text-secondary wd-label-above-text">Last Name</label>
              <textarea
                  value={lastName}
                  placeholder="Webb"
                  className="form-control wd-textarea-border mb-4"
                  cols="50" rows="1"
                  onChange={(event) => setLastName(event.target.value)}>
              </textarea>
            </div>

            <div>
              <label className="text-secondary wd-label-above-text">Bio</label>
              <textarea
                  value={bio}
                  placeholder="Space Telescope"
                  className="form-control wd-textarea-border mb-4"
                  cols="50" rows="5"
                  onChange={(event) => setBio(event.target.value)}>
              </textarea>
            </div>

            <div>
              <label className="text-secondary wd-label-above-text">Location</label>
              <textarea
                  value={location}
                  placeholder="Boston, MA"
                  className="form-control wd-textarea-border mb-4"
                  cols="50" rows="1"
                  onChange={(event) => setLocation(event.target.value)}>
              </textarea>
            </div>

            <div>
              <textarea
                value={website}
                placeholder="Website"
                className="form-control wd-textarea-border mb-4"
                cols="50" rows="1"
                onChange={(event) => setWebsite(event.target.value)}>
              </textarea>
            </div>

            <div>
              <label className="text-secondary wd-label-above-text">Date of Birth</label>
              <textarea
                  value={dateOfBirth}
                  placeholder="01/01/2022"
                  className="form-control wd-textarea-border mb-4"
                  cols="50" rows="1"
                  onChange={(event) => setDateOfBirth(event.target.value)}>
              </textarea>
            </div>
          </div>

          <Link to="/tuiter/profile"
                className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold position-absolute wd-bt-nudge-up"
                onClick={profileClickHandler}>
            Save
          </Link>
        </div>
      </>
  );
};

export default EditProfileComponent;



