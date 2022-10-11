const navigationItem = (navigation) => {
  if (window.location.pathname.substr(36,) == navigation.link.substr(3,)){
    return(`
      <a href = ${navigation.link} class="list-group-item list-group-item-action active">
       <div class="row">
          <div class="col-2">
            <i class=${navigation.icon}></i>
          </div>
          <div class="col-10 d-none d-xl-block d-xxl-block">
            ${navigation.name}
          </div>
       </div>
      </a>
    `)}
  else{
    return(`
      <a href = ${navigation.link} class="list-group-item list-group-item-action">
        <div class="row">
         <div class="col-2">
          <i class=${navigation.icon}></i>
          </div>
          <div class="col-10 d-none d-xl-block d-xxl-block">
            ${navigation.name}
          </div>
        </div>
      </a>
    `)
  }
}
export default navigationItem;