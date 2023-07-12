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
