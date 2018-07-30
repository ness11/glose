import axios from "axios";
import { stringify } from "qs";
import { httpRequest, requestTimeOut } from "./config";

// Base server URL
const baseURL = httpRequest.serverAddress + "/" + httpRequest.serverPath;

// Generic axiosInstance
let axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: requestTimeOut,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json"
	},
	paramsSerializer: function(params) {
		return stringify(params, { arrayFormat: "repeat" });
	}
});

// Intercept response, used to generic format HTTP responses

axiosInstance.interceptors.response.use(
	function(response) {
		return response;
	},
	function(error) {
		let errorFormatted = {
			status: error.response.status
		};
		// Do something with response error
		return Promise.reject(errorFormatted);
	}
);

export { axiosInstance };
