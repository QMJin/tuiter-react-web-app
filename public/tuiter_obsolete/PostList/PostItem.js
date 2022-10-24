const PostItem = (post) => {
  return(`
    <li class="list-group-item">
      <div class="row border-bottom border-secondary">
        <div class="col-2">
          <img class="rounded-circle float-end" src=${post.icon} height="50px"/>
        </div>
       
        <div class="col-10">
          <div class="row">
            <div class="col-11">
              <span class="fw-bolder">${post.username} <i class="fas fa-check-circle"></i></span>
              <span class="text-secondary"> @${post.handle} \t&#183; ${post.time}</span>
            </div>
            <div class="col-1 float-end text-secondary">
              <i class="float-end fas fa-ellipsis-h"></i>
            </div>
          </div>
          
          <div>
            ${post.title}
          </div>
          
          <div class="mt-2 border border-1 border-secondary rounded-3">
            <div class = "border-bottom border-1 border-secondary d-block">
              <img class="rounded-3" src=${post.image} width="100%"/>
            </div>
            <div class="m-2">
              <div class="fw-bolder">
                ${post.header}
              </div>
              <div class="text-secondary">
                ${post.content}
              </div>
            </div>
          </div>
          
          <div class="row text-secondary mt-2 mb-2">
            <div class="col">&#x1F5E8; ${post.comment}</div>
            <div class="col">&#x21C6; ${post.share}</div>
            <div class="col">&#10084; ${post.like}</div>
            <div class="col"> &#128777;</div>
          </div>
          
        </div>
      </div>
    </li>
  `);
}

export default PostItem;