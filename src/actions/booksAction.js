import * as types from "./actionsTypes";
import bookApi from "../api/booksApi";

// le dispatch recupère les datas des livres
const allBooks = data => {
	return {
		type: types.BOOKS,
		data
	};
};

const allBooksError = err => {
	return {
		type: types.BOOKS_ERR,
		err
	};
};

// action pour faire appel a l'Api et dispatcher les Data

const books = () => {
	return function(dispatch, getState) {
		let apiCall = bookApi.getBooksUrl();
		apiCall
			.then(res => {
				dispatch(allBooks(res.data));
			})
			.catch(err => {
				dispatch(allBooksError(err));
			});
		return apiCall;
	};
};

export default books;
