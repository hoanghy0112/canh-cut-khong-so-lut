import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import userManagementReducer from "../features/userManagement/ProfileSlice";

export const store = configureStore({
	reducer: {
		// userManagement: persistReducer(
		// 	{
		// 		key: "userManagement",
		// 		storage,
		// 	},
		// 	userManagementReducer
		// ),
	},
});

export const persistor = persistStore(store);
