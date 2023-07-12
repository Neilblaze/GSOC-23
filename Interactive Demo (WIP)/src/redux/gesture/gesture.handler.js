import { GEST_ASSIGN, FINLOCK_ASSIGN, INIT_ASSIGN } from "./gesture.forms";

const initialState = {
  gesture: null, finger_locx: null, loaded: false,
};

const gestureHandler = (state = initialState, action) => {
  switch (action.type) {
    case GEST_ASSIGN:
      return {
        ...state,
        gesture: action.payload,
      };
    case FINLOCK_ASSIGN:
      return {
        ...state,
        finger_locx: action.payload,
      };
    case INIT_ASSIGN:
      return {
        ...state,
        loaded: true,
      };
    default:
      return state;
  }
};

export default gestureHandler;
