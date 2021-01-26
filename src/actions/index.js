import {
  CLOSE_FORM,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TABLE,
  LIST_ALL,
  OPEN_FORM,
  SAVE_TASK,
  SEARCH_TASK,
  UPDATE_STATUS_TASK,
} from "../constans/ActionTypes";

export const listAll = () => {
  return {
    type: LIST_ALL,
  };
};
export const saveTask = (task) => {
  return {
    type: SAVE_TASK,
    task: task,
  };
};
// export const toggleForm = () => {
//   return {
//     type: TOGGLE_FORM,
//   };
// };
export const closeForm = () => {
  return {
    type: CLOSE_FORM,
  };
};

export const openForm = () => {
  return {
    type: OPEN_FORM,
  };
};

export const updateStatus = (id) => {
  return {
    type: UPDATE_STATUS_TASK,
    id: id,
  };
};
export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    id: id,
  };
};
export const editTask = (task) => {
  return {
    type: EDIT_TASK,
    task,
  };
};
export const filterTable = (filter) => {
  return {
    type: FILTER_TABLE,
    filter,
  };
};
export const searchTask = (keyword) => {
  return {
    type: SEARCH_TASK,
    keyword,
  };
};
