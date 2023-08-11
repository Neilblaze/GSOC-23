// Action creator functions to create actions with specific types and payload data to dispatch to the reducer.
// Action creators are functions that return an action object with a type and payload property.

// import action types
import { GEST_ASSIGN, FINLOCK_ASSIGN, INIT_ASSIGN } from "./gesture.forms";

export const putGesture = (gesture) => ({
  type: GEST_ASSIGN,
  payload: gesture,
});

export const putFingLock = (locs) => ({
  type: FINLOCK_ASSIGN,
  payload: locs,
});

export const putInitialze = () => ({
  type: INIT_ASSIGN,
});
