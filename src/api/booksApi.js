import { axiosInstance } from "../utils/axios";
import { apiRoutes } from "../utils/config";

// api pour récupérer tous les livres

const bookApi = {
	getBooksUrl() {
		const getBooksUrl = apiRoutes.books.getBooks;

		return axiosInstance.get(getBooksUrl);
	}
};

export default bookApi;
