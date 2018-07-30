import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import readersReducer from "./readersReducer";

export default combineReducers({
	bookState: bookReducer,
	readersState: readersReducer
});
