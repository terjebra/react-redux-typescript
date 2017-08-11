import { ActionTypes, Actions } from "../actions/actions";

export const increment = (number: number): ActionTypes => {
  return {
    incrementWith: number,
    type: Actions.Increment
  };
};

export const decrement = (number: number): ActionTypes => {
  return {
    decrementWith: number,
    type: Actions.Decrement
  };
};
