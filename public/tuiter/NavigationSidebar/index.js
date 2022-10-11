import navigationItem from "./NavigationItem.js";
import navigation from "./navigation.js";

const NavigationSidebar = () => {
  return(`
    <div class="list-group wd-list-group">
      ${
        navigation.map(n => {
        return(navigationItem(n));
      }).join('')}
    </div>
    <button class="btn btn-primary w-100 mt-1 rounded-pill">Tuit</button>
  `);
}

export default NavigationSidebar;
