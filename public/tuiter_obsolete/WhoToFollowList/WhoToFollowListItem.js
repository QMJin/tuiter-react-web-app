const WhoToFollowListItem = (who) => {
  return(`
    <li class="list-group-item">
      <div class="row">
      
        <div class="col-2">
          <img class="rounded-circle float-start" src=${who.avatarIcon} height="50px"/>
        </div>
     
        <div class="col-6">
          <div class="fw-bolder">
            ${who.userName} <i class="fas fa-check-circle"></i>
          </div>
          <div>
            @${who.handle}
          </div>
        </div>
        
        <div class="col-4">
          <button type="button" class="btn btn-primary w-100 rounded-pill float-end">
            Follow
          </button>
        </div>
        
      </div>

    </li>
  `);
}

export default WhoToFollowListItem;
