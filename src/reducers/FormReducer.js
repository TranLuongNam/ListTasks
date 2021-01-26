import { CLOSE_FORM, OPEN_FORM, TOGGLE_FORM } from "../constans/ActionTypes";

const inittialState = false;

export const FormReducer = (state = inittialState, action) => {
  switch (action.type) {
    case TOGGLE_FORM: {
      return !state;
    }
    case OPEN_FORM: {
      return true;
    }
    case CLOSE_FORM: {
      return false;
    }
    default:
      return state;
  }
};
