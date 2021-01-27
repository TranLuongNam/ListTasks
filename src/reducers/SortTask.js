import { SORT_TASK } from "../constans/ActionTypes";

const initialState = {
  by: "name",
  value: 1,
};

const SortTask = (state = initialState, action) => {
  switch (action.type) {
    case SORT_TASK: {
      return {
        by: action.sort.by,
        value: action.sort.value,
      };
    }
    default:
      return state;
  }
};
export default SortTask;
