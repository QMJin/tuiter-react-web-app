import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
  return(`
  <div class="row">
       <div class="col-10">
         <div class="position-relative">
            <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
            <span class="position-absolute wd-search-tuiter">
                <i class="fas fa-search position-absolute"></i>
              </span>
          </div>
       </div>
       <div class="col-2">
          <i class="fa fa-cog mt-2" style="color: blue"></i>
       </div>
     </div>

     <ul class="nav nav-tabs navbar-expand mt-1 mb-1">
       <li class="nav-item">
         <a class="nav-link active text-nowrap" href="for-you.html">For you</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="trending.html">Trending</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="news.html">News</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="sports.html">Sports</a>
       </li>
       <li class="nav-item d-none d-sm-none d-md-block">
         <a class="nav-link" href="entertainment.html">Entertainment</a>
       </li>
     </ul>

     <div class="position-relative">
       <img src="../../images/starship.jpg" width="100%" style="overflow:hidden"/>
       <h1 class="position-absolute bottom-0 left-0 text-white">
         SpaceX's Starship</h1>
     </div>
     
     ${PostSummaryList()}
  `)
}

export default  ExploreComponent;
