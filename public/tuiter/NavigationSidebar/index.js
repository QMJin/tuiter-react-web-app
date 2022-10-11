const NavigationSidebar = () => {
  return(`
    <div class="list-group wd-list-group">
      <a class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-2">
            <i class="fab fa-tumblr"></i>
          </div>
          <div class="col-10 d-none d-xl-block d-xxl-block">
          </div>
        </div>
      </a>
      <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-2">
            <i class="fas fa-home"></i>
          </div>
          <div class="col-10 d-none d-xl-block d-xxl-block">
            Home
          </div>
        </div>
      </a>
      <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-2">
            <i class="fas fa-hashtag"></i>
          </div>
          <div class="col-10 d-none d-xl-block d-xxl-block">
            Explore
          </div>
        </div>
      </a>
      <a href="notification.html" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-2">
            <i class="fas fa-bell"></i>
          </div>
          <div class="col-10 d-none d-xl-block d-xxl-block">
            Notifications
          </div>
        </div>
      </a>
      <a href="message.html" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-2">
            <i class="fas fa-envelope"></i>
          </div>
          <div class="col-10 d-none d-xl-block d-xxl-block">
            Messages
          </div>
        </div>
      </a>
      <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-2">
            <i class="fas fa-bookmark"></i>
          </div>
          <div class="col-10 d-none d-xl-block d-xxl-block">
            Bookmarks
          </div>
        </div>
      </a>
      <a href="list.html" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-2">
            <i class="fas fa-list"></i>
          </div>
          <div class="col-10 d-none d-xl-block d-xxl-block">
            Lists
          </div>
        </div>
      </a>
      <a href="../../tuiter/profile.html" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-2">
            <i class="fas fa-user"></i>
          </div>
          <div class="col-10 d-none d-xl-block d-xxl-block">
            Profile
          </div>
        </div>
      </a>
      <a href="more.html" class="list-group-item list-group-item-action">
        <div class="row">
          <div class="col-2">
            <i class="fas fa-minus-circle"></i>
          </div>
          <div class="col-10 d-none d-xl-block d-xxl-block">
            More
          </div>
        </div>
      </a>
    </div>
    <button class="btn btn-primary w-100 mt-1 rounded-pill">Tuit</button>
   
  `);
}

export default NavigationSidebar;
