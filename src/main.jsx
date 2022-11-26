import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "./routers/MainRouter";

import { PersistGate } from "redux-persist/es/integration/react";

import { Provider } from "react-redux";
import { store, persistor } from "./app/store";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<MainRouter />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
