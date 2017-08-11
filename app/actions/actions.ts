export enum Actions {
  Increment = "Increment",
  Decrement = "Decrement",
  Other = "Other"
}

export type IncrementAction = {
  type: Actions.Increment;
  incrementWith: number;
};

export type DecrementAction = {
  type: Actions.Decrement;
  decrementWith: number;
};

export type OtherAction = {
  type: Actions.Other;
};

export type ActionTypes = IncrementAction | DecrementAction | OtherAction;
