import { EDIT_TASK } from "../constans/ActionTypes";

const inittialState = {
  id: "",
  name: "",
  status: false,
};

export const ItemEdit = (state = inittialState, action) => {
  switch (action.type) {
    case EDIT_TASK: {
      return action.task;
    }
    default:
      return state;
  }
};
