import { combineReducers } from "redux";
import { FilterTable } from "./FilterTable";
import { FormReducer } from "./FormReducer";
import { ItemEdit } from "./ItemEdit";
import SearchTask from "./SearchTask";
import { TasksReducer } from "./TasksReducer";

const rootReducer = combineReducers({
  tasks: TasksReducer,
  isDisplayForm: FormReducer,
  ItemEdit: ItemEdit,
  FilterTable: FilterTable,
  SearchTask: SearchTask,
});

export default rootReducer;
