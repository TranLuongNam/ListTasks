import { SEARCH_TASK } from "../constans/ActionTypes";

const initialState = "";

const SearchTask = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TASK: {
      console.log(action.keyword);
      return action.keyword;
    }
    default: {
      return state;
    }
  }
};

export default SearchTask;
