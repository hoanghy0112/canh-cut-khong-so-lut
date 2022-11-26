/* eslint-disable no-underscore-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	listTasks: [],
	status: "idle",
	error: null,
};

export const activitiesSlice = createSlice({
	name: "activities",
	initialState,
});

export default activitiesSlice.reducer;
