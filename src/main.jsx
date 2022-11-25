import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "./routers/mainRouter";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<MainRouter />
	</React.StrictMode>
);
