import {
  DELETE_TASK,
  LIST_ALL,
  SAVE_TASK,
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
    case SAVE_TASK: {
      const task = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status === true ? true : false,
      };
      if (!task.id) {
        task.id = randomID();
        state.push(task);
      } else {
        const index = findIndex(state, task.id);
        state[index] = task;
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    }
    case UPDATE_STATUS_TASK: {
      // console.log(action);
      const id = action.id;
      const index = findIndex(state, id);
      state[index] = {
        ...state[index],
        status: !state[index].status,
      };
      localStorage.setItem("tasks", JSON.stringify(state));

      return [...state];
    }
    case DELETE_TASK: {
      const id = action.id;
      const index = findIndex(state, id);
      state.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    }
    default:
      return state;
  }
};
