import "./index.css";
import {Link} from "react-router-dom";

const ProfileItem = ({
      profile =
          {
            "_id": 123,
            "firstName": "James Webb",
            "lastName": "Space Telescope",
            "handle": "@nasa",
            "profilePicture": "webb_icon.jpeg",
            "bannerPicture": "webb_banner.png",
            "bio": "A space telescope which conducts infrared astronomy",
            "website": "https://webb.nasa.gov/content/about/launch.html",
            "location": "Lagrange point",
            "dateOfBirth": "12/25/2021",
            "dateJoined": "12/25/2021",
            "followingCount": 123,
            "followersCount": 234
          }
      }
) => {
  return(
      <>
        <div className="position-relative mb-2">
          <img className="w-100" src={`/images/${profile.bannerPicture}`}/>
          <img className="position-absolute wd-nudge-up rounded-circle"
               width={120}
               src={`/images/${profile.profilePicture}`}/>
          <Link to="/tuiter/edit-profile" className="position-absolute wd-nudge-down btn btn-outline-dark fw-bold rounded-pill float-end">
            Edit profile
          </Link>
        </div>
        <div class="wd-padding-to-top-lg fw-bold lead">
          {profile.firstName} {profile.lastName}
        </div>
        <div className="text-secondary">
          {profile.handle}
        </div>
        <div className="wd-padding-to-top">
          {profile.bio}
        </div>
        <div className="wd-padding-to-top text-secondary">
          <i className="bi bi-geo-alt"></i> {profile.location} &nbsp;
          <i className="bi bi-balloon"></i> {profile.dateOfBirth} &nbsp;
          <i className="bi bi-calendar3"></i> {profile.dateJoined} &nbsp;
        </div>
        <div className="wd-padding-to-top text-secondary">
          {profile.website}
        </div>
        <div className="wd-padding-to-top">
          <span className="fw-bold">{profile.followingCount}</span>&nbsp;
          <span className="text-secondary">Following</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="fw-bold">{profile.followersCount}</span>&nbsp;
          <span className="text-secondary">Followers</span>
        </div>
      </> );
};
export default ProfileItem;