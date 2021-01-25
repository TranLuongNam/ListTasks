import {
  ADD_TASK,
  LIST_ALL,
  UPDATE_STATUS_TASK,
} from "../constans/ActionTypes";

const data = JSON.parse(localStorage.getItem("tasks"));
const inittialState = data ? data : [];

var findIndex = (tasks, id) => {
  var result = -1;
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};

const s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
const randomID = () => {
  return s4() + "-" + s4() + "-" + s4() + "-" + s4();
};

export const TasksReducer = (state = inittialState, action) => {
  switch (action.type) {
    case LIST_ALL: {
      return state;
    }
    case ADD_TASK: {
      const newTask = {
        id: randomID(),
        name: action.task.name,
        status: action.task.status === true ? true : false,
      };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    }
    case UPDATE_STATUS_TASK: {
      console.log(action);
      const id = action.id;
      const index = findIndex(state, id);
      state[index].status = !state[index].status;
      localStorage.setItem("tasks", JSON.stringify(state));

      return [...state];
    }
    default:
      return state;
  }
};
