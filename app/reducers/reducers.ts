import { combineReducers } from "redux";
import Counter from "./counter";
import { GlobalState } from "../models/state";

export default combineReducers<GlobalState>({
  Counter
});
