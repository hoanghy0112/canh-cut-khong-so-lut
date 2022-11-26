import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import taskReducer from "../features/task/taskSlice";
import activitiesReducer from "../features/activities/activitiesSlice";

export const store = configureStore({
	reducer: {
		taskManagement: persistReducer(
			{
				key: "taskManagement",
				storage,
			},
			taskReducer
		),
		activities: persistReducer(
			{
				key: "activities",
				storage,
			},
			activitiesReducer
		),
	},
});

export const persistor = persistStore(store);
