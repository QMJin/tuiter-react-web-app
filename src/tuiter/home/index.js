import React from "react";
import postsArray from "./homeposts.json"
import HomePostItem from "./home-post-item";

const HomeComponent = () => {
  return(
      <ul className="list-group"> {
        postsArray.map(post =>
            <HomePostItem post={post}/> )
      }
      </ul>
  );
};

export default HomeComponent;