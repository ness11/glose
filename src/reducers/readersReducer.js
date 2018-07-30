import * as types from "../actions/actionsTypes";

const initialState = {
	readers: []
};

const readersReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.READERS: {
			return {
				...state,
				readers: [...action.readers]
			};
		}
		default:
			return state;
	}
};

export default readersReducer;
