export const loggerMiddleware = store => next => action => {
	// action type is function when thunk is used
	if (typeof action.type === "string") {
	}
	let result = next(action);
	return result;
};
