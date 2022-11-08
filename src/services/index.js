import TuitsList from "./tuit-list.js";
import {configureStore} from "@reduxjs/toolkit";
import tuitsSlice from "./tuit-reducer.js";
import {Provider} from "react-redux";

const store = configureStore({
  reducer:{
    tuitsData: tuitsSlice
  }
})

function Tuiter() {
  return (
      <Provider store={store}>
        <div>
          <h1>Tuiter</h1>
          <TuitsList/>
        </div>
      </Provider>
  )
}
export default Tuiter;