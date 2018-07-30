// http request config
const httpRequest = {
	serverAddress: " https://api.glose.com",
	serverPath: "v1"
};

// TimeOut request
const requestTimeOut = 10000;

// apiRoute
const apiRoutes = {
	books: {
		getBooks: "/booklists/free-books",
		getReaders: "/books/batch"
	}
};

export { requestTimeOut, httpRequest, apiRoutes };
