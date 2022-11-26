import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import taskReducer from "../features/task/taskSlice";
import activitiesReducer from "../features/activities/activitiesSlice";

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
	},
});

export const persistor = persistStore(store);

// export default configureStore({
// 	reducer: {
// 	  tasks: taskReducer,
// 	  activities: activitiesReducer
// 	}
//   })
