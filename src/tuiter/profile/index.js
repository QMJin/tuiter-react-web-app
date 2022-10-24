import React from "react";
import "./index.css";
import ProfileItem from "./profileItem";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
  const profileArray = useSelector((state) => state.profile);
  return(
        profileArray.map(profile =>
          <ProfileItem
             key={profile._id}
             profile={profile}/>)
  )
};
export default ProfileComponent;