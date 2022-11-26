import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import taskReducer from "../features/task/taskSlice";

export const store = configureStore({
	reducer: {
		taskManagement: persistReducer(
			{
				key: "taskManagement",
				storage,
			},
			taskReducer
		),
	},
});

export const persistor = persistStore(store);
