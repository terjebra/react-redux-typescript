import { Counter } from "../models/state";
import { ActionTypes, Actions } from "../actions/actions";

export default (s: Counter = { number: 5 }, action: ActionTypes): Counter => {
  switch (action.type) {
    case Actions.Increment:
      return { number: s.number + action.incrementWith };
    case Actions.Decrement:
      return { number: s.number - action.decrementWith };
    default:
      return s;
  }
};
