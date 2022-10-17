const NavigationSidebar = (active) => {
  return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i>
     </a>
     
     <a>
      ${active === 'home'? `<a href="../HomeScreen/index.html" class="list-group-item active">` : `<a href="../HomeScreen/index.html" class="list-group-item">`}
       <div class="row">
        <div class="col-2">
          <i class="fas fa-home"}></i>
        </div>
        <div class="col-10 d-none d-xl-block d-xxl-block">
         Home
        </div>
      </div>
     </a>
     
     <a>
      ${active === 'explore'? `<a href="../ExploreScreen/index.html" class="list-group-item active">` : `<a href="../ExploreScreen/index.html" class="list-group-item">`}
       <div class="row">
        <div class="col-2">
          <i class="fas fa-hashtag"}></i>
        </div>
        <div class="col-10 d-none d-xl-block d-xxl-block">
         Explore
        </div>
      </div>
     </a>
     
     <a class="list-group-item" href="notification.html">
      <div class="row">
       <div class="col-2">
         <i class="fas fa-bell"}></i>
       </div>
       <div class="col-10 d-none d-xl-block d-xxl-block">
         Notification
       </div>
      </div>
     </a>
     
    <a class="list-group-item" href="message.html">
      <div class="row">
        <div class="col-2">
         <i class="fas fa-envelope"}></i>
        </div>
        <div class="col-10 d-none d-xl-block d-xxl-block">
         Message
        </div>
      </div>
    </a>
    
    <a class="list-group-item" href="bookmark.html">
      <div class="row">
       <div class="col-2">
         <i class="fas fa-bookmark"}></i>
       </div>
       <div class="col-10 d-none d-xl-block d-xxl-block">
         Bookmarks
       </div>
      </div>
    </a>
    
    <a class="list-group-item" href="list.html">
      <div class="row">
       <div class="col-2">
         <i class="fas fa-list"}></i>
       </div>
       <div class="col-10 d-none d-xl-block d-xxl-block">
         Lists
       </div>
      </div>
    </a>
    
    <a class="list-group-item" href="profile.html">
      <div class="row">
       <div class="col-2">
         <i class="fas fa-user"}></i>
       </div>
       <div class="col-10 d-none d-xl-block d-xxl-block">
         Profile
       </div>
      </div>
    </a>
 
    <a class="list-group-item" href="more.html">
      <div class="row">
       <div class="col-2">
         <i class="fas fa-minus-circle"}></i>
       </div>
       <div class="col-10 d-none d-xl-block d-xxl-block">
         More
       </div>
      </div>
    </a>
  </div>
  
    <div class="d-grid mt-2">
      <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
    </div>

  `);
};
export default NavigationSidebar;