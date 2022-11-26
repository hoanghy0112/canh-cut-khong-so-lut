/* eslint-disable no-underscore-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	listTasks: [],
	status: "idle",
	error: null,
};

export const tasksManagementSclice = createSlice({
	name: "tasksManagement",
	initialState,
});

export const selectAllTasks = (state) => state.tasksManagement.listTasks;
export const selectCurrentWeekTasks = (startDate) =>
	function (state) {
		// console.log({ startDate });
		const tasks = state.tasksManagement.listTasks.filter((task) => {
			const diff = moment(new Date(task.time.from)).diff(
				new Date(startDate),
				"d"
			);
			return diff >= 0 && diff < 7;
		});
		// console.log({ tasks });
		return tasks;
	};

export const selectTasksStatus = (state) => state.tasksManagement.status;

export const selectTasksError = (state) => state.tasksManagement.error;

export default tasksManagementSclice.reducer;
