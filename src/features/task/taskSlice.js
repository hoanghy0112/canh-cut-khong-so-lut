/* eslint-disable no-underscore-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";
import moment from "moment";

const initialState = {
	listTasks: [],
	status: "idle",
	error: null,
};

export const tasksManagementSlice = createSlice({
	name: "tasksManagement",
	initialState,
	reducers: {
		createNewTask: (state, payload) => {
			const _id = uid(16);
			const newData = { _id, ...payload.payload };
			state.listTasks.push(newData);
		},
		changeTask: (state, payload) => {
			const { _id } = payload.payload;

			const newData = {
				...state.listTasks.find((task) => task._id === _id),
				...payload.payload,
			};

			state.listTasks = [
				...state.listTasks.filter((task) => task._id !== _id),
				newData,
			];
		},
		deleteTask: (state, payload) => {
			const { _id } = payload.payload;
			state.listTasks.splice(
				state.listTasks.find((task) => task._id === _id)
			);
		},
	},
});

export const { changeTask, createNewTask, deleteTask } =
	tasksManagementSlice.actions;

export const selectAllTasks = (state) => state.taskManagement.listTasks;
export const selectCurrentWeekTasks = (startDate) =>
	function (state) {
		const tasks = selectAllTasks(state).filter((task) => {
			const diff = moment(new Date(task.time.from)).diff(
				new Date(startDate),
				"d"
			);
			return diff >= 0 && diff < 7;
		});
		return tasks;
	};

export const selectTasksStatus = (state) => state.taskManagement.status;

export const selectTasksError = (state) => state.taskManagement.error;

export default tasksManagementSlice.reducer;
