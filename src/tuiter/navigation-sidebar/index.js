import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  return (
   <div className="list-group">
     <a className="list-group-item">Tuiter</a>
     <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
       Home
     </Link>
     <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
       Explore
     </Link>
     <Link to="/tuiter/notifications" className={`list-group-item ${active === 'notifications'?'active':''}`}>
       <i class="fas fa-bell"></i> Notifications
     </Link>
     <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages'?'active':''}`}>
       <i class="fas fa-envelope"></i> Messages
     </Link>
     <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
       <i class="fas fa-bookmark"></i> Bookmarks
     </Link>
     <Link to="/tuiter/lists" className={`list-group-item ${active === 'lists'?'active':''}`}>
       <i class="fas fa-list"></i> Lists
     </Link>
     <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
       <i class="fas fa-user"></i> Profile
     </Link>
     <Link to="/tuiter/more" className={`list-group-item ${active === 'more'?'active':''}`}>
       <i class="fas fa-minus-circl"></i>More
     </Link>
   </div>
  );
};

export default NavigationSidebar;