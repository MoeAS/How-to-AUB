import { combineReducers } from "redux";
import authenticationReducer from "./authentication";
import allClubsReducer from "./allClubs";

export default combineReducers({authenticationReducer, allClubsReducer});


// Authentication, courses