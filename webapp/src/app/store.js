import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import taskReducer from "../features/task/taskSlice";
import activitiesReducer from "../features/activities/activitiesSlice";
import itemReducer from "../features/item/itemSlice";
import scoreReducer from "../features/score/scoreSlice";

export const store = configureStore({
	reducer: {
		tasksManagement: persistReducer(
			{
				key: "tasksManagement",
				storage,
			},
			taskReducer
		),
		activitiesManagement: persistReducer(
			{
				key: "activitiesManagement",
				storage,
			},
			activitiesReducer
		),
		itemsManagement: persistReducer(
			{
				key: "itemsManagement",
				storage,
			},
			itemReducer
		),
		scoreManagement: persistReducer(
			{
				key: "scoreManagement",
				storage,
			},
			scoreReducer
		),
	},
});

export const persistor = persistStore(store);
