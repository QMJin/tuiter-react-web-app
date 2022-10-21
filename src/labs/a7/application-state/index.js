import ProfileScreen from "./profile-screen";
import BillingScreen from "./billing-screen";
import currentUserReducer from "./current-user";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import tuitsReducer from "./tuits-reducer";
import Tuits from "./tuits"
import {configureStore} from "@reduxjs/toolkit";
import tuitsSlice from "./tuits-reducer";

/*const masterReducer = combineReducers({
  currentUser:currentUserReducer,
  tuits: tuitsReducer
})*/
/*const store = createStore(masterReducer)*/

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    tuits: tuitsSlice
  }
})

const ApplicationState = () => {
  return(
      <>
        <Provider store={store}>
          <h3>Application State</h3>
          <Tuits/>
          <ProfileScreen/>
          <BillingScreen/>
        </Provider>
      </>
  )
}
export default ApplicationState;