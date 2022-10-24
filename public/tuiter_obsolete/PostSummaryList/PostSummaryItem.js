const PostSummaryItem = (exploreItems) => {
  return(`
    <li class="list-group-item">
      <div class="row">
      
        <div class="col-9">
          <div class="text-secondary">
            ${exploreItems.topic}
          </div>
          <div>
            <span class="fw-bolder">${exploreItems.username} <i class="fas fa-check-circle"></i></span>
            <span class="text-secondary">- ${exploreItems.time}</span>
          </div>
          <div class="fw-bolder d-block">
            ${exploreItems.title}
          </div>
          <div class="text-secondary">
            ${exploreItems.tweets}
          </div>
        </div>
        
        <div class="col-3">
          <img class="float-end rounded-3" src=${exploreItems.image} height="90px"/>
        </div>
      
      </div>
    </li>
  `);
}

export default PostSummaryItem;