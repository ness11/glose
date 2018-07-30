import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ReactDOM from "react-dom";
import "./index.css";
import GloseContainer from "./components/container/GloseContainer";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
	<Provider store={store}>
		<GloseContainer />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
