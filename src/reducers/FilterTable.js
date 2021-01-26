import { FILTER_TABLE } from "../constans/ActionTypes";

const initialState = {
  name: "",
  status: -1,
};

export const FilterTable = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_TABLE: {
      return action.filter;
    }
    default: {
      return state;
    }
  }
};
