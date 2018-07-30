import * as types from "./actionsTypes";
import readersApi from "../api/readersApi";

// le dispatch recupère les infos des livres et des lecteurs
const allReaders = (readers, bookList) => {
	return {
		type: types.READERS,
		readers,
		bookList
	};
};

const allReadersError = err => {
	return {
		type: types.READERS_ERR,
		err
	};
};

// action pour faire appel a l'Api et dispatcher les Data

const readers = ids => {
	return function(dispatch, getState) {
		let apiCall = readersApi.getReadersUrl(ids);
		apiCall
			.then(res => {
				let { bookState } = getState();
				dispatch(allReaders(res.data, bookState.bookList));
			})
			.catch(err => {
				console.log(err);
				dispatch(allReadersError(err));
			});
		return apiCall;
	};
};

export default readers;
