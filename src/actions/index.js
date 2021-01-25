import {
  ADD_TASK,
  CLOSE_FORM,
  LIST_ALL,
  OPEN_FORM,
  TOGGLE_FORM,
  UPDATE_STATUS_TASK,
} from "../constans/ActionTypes";

export const listAll = () => {
  return {
    type: LIST_ALL,
  };
};
export const addTask = (task) => {
  return {
    type: ADD_TASK,
    task: task,
  };
};

export const toggleForm = () => {
  return {
    type: TOGGLE_FORM,
  };
};
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
