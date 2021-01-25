import { combineReducers } from "redux";
import { FormReducer } from "./FormReducer";
import { TasksReducer } from "./TasksReducer";

const rootReducer = combineReducers({
  tasks: TasksReducer,
  isDisplayForm: FormReducer,
});

export default rootReducer;
