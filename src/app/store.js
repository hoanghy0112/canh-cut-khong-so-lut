import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import taskReducer from "../features/task/taskSlice";
import activitiesReducer from "../features/activities/activitiesSlice";
import itemReducer from "../features/item/itemSlice";

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
	},
});

export const persistor = persistStore(store);

// export default configureStore({
// 	reducer: {
// 	  tasks: taskReducer,
// 	  activities: activitiesReducer
// 	}
//   })
