import { combineReducers } from "redux";
import { FilterTable } from "./FilterTable";
import { FormReducer } from "./FormReducer";
import { ItemEdit } from "./ItemEdit";
import { TasksReducer } from "./TasksReducer";

const rootReducer = combineReducers({
  tasks: TasksReducer,
  isDisplayForm: FormReducer,
  ItemEdit: ItemEdit,
  FilterTable: FilterTable,
});

export default rootReducer;
