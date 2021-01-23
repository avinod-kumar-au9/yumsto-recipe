import { combineReducers } from "redux";
import home_reducer from "./home_reducer";
import details_reducer from "./details_reducer";
import addmeal_reducer from "./addmeal_reducer";
import search1_reducer from "./search_Reducer1";
import videosearch_reducer from "./videosearch_reducer";

const Reducer = combineReducers({
  home_reducer,
  details_reducer,
  addmeal_reducer,
  search1_reducer,
  videosearch_reducer,
});

export default Reducer;
