import { CLOSE_FORM, OPEN_FORM, TOGGLE_FORM } from "../constans/ActionTypes";

const inittialState = false;

export const FormReducer = (state = inittialState, action) => {
  switch (action.type) {
    case TOGGLE_FORM: {
      return !state;
    }
    case OPEN_FORM: {
      state = true;
      return state;
    }
    case CLOSE_FORM: {
      state = false;
      return state;
    }
    default:
      return state;
  }
};
