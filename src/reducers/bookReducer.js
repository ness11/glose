import * as types from "../actions/actionsTypes";

const initialState = {
	bookList: []
};

const bookReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.BOOKS: {
			return {
				...state,
				bookList: [...action.data.modules[1].books]
			};
		}
		default:
			return state;
	}
};

export default bookReducer;
