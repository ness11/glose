import { axiosInstance } from "../utils/axios";
import { apiRoutes } from "../utils/config";

// récuperer la liste des lecteurs par livre

const readersApi = {
	getReadersUrl(ids) {
		const getReadersUrl = apiRoutes.books.getReaders;

		return axiosInstance.get(getReadersUrl, { params: { id: ids } });
	}
};

export default readersApi;
