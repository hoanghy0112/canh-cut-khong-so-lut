import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";
import moment from "moment";

const initialState = {
	listTasks: [
		{
			_id: uid(16),
			time: {
				from: new Date("2022-11-21T07:30:00"),
				to: new Date("2022-11-21T11:30:00"),
			},
			title: "Nhập môn mạng máy tính Thực hành",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-11-21T13:00:00"),
				to: new Date("2022-11-21T15:15:00"),
			},
			title: "Nhập môn mạng máy tính",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-11-22T07:30:00"),
				to: new Date("2022-11-22T09:45:00"),
			},
			title: "Hệ điều hành",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-11-22T13:00:00"),
				to: new Date("2022-11-22T17:00:00"),
			},
			title: "Hệ điều hành thực hành",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-11-23T07:30:00"),
				to: new Date("2022-11-23T11:30:00"),
			},
			title: "Lập trình trực quan thực hành",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-11-23T13:00:00"),
				to: new Date("2022-11-23T15:15:00"),
			},
			title: "Lập trình trực quan",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-11-24T13:00:00"),
				to: new Date("2022-11-24T15:15:00"),
			},
			title: "Triết học Mác lênin",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-11-25T07:30:00"),
				to: new Date("2022-11-25T11:30:00"),
			},
			title: "Cơ sở dữ liệu thực hành",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-11-25T13:00:00"),
				to: new Date("2022-11-25T15:15:00"),
			},
			title: "Cơ sở dữ liệu",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-11-26T8:00:00"),
				to: new Date("2022-11-26T10:15:00"),
			},
			title: "Học thêm anh văn",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-11-27T13:00:00"),
				to: new Date("2022-11-27T18:00:00"),
			},
			title: "Đi chơi",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-11-28T13:00:00"),
				to: new Date("2022-11-28T15:15:00"),
			},
			title: "Nhập môn mạng máy tính",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-11-29T07:30:00"),
				to: new Date("2022-11-29T09:45:00"),
			},
			title: "Hệ điều hành",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-11-29T13:00:00"),
				to: new Date("2022-11-29T17:00:00"),
			},
			title: "Hệ điều hành thực hành",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-11-30T13:00:00"),
				to: new Date("2022-11-30T15:15:00"),
			},
			title: "Lập trình trực quan",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-12-01T09:00:00"),
				to: new Date("2022-12-01T10:30:00"),
			},
			title: "Tư tưởng Hồ Chí Minh",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-12-02T14:30:00"),
				to: new Date("2022-12-02T16:00:00"),
			},
			title: "Chủ nghĩa xã hội khoa học",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-12-03T07:30:00"),
				to: new Date("2022-12-03T09:45:00"),
			},
			title: "Cơ sở dữ liệu",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-12-03T13:00:00"),
				to: new Date("2022-12-03T15:30:00"),
			},
			title: "Cơ sở dữ liệu thực hành",
			descriptions: [],
		},
		{
			_id: uid(16),
			time: {
				from: new Date("2022-12-04T13:00:00"),
				to: new Date("2022-12-04T16:15:00"),
			},
			title: "Đi chơi",
			descriptions: [],
		},
	],
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
				state.listTasks.find((task) => task._id === _id),
				1
			);
		},
	},
});

export const { changeTask, createNewTask, deleteTask } =
	tasksManagementSlice.actions;

export const selectAllTasks = (state) => state.tasksManagement.listTasks;
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

export const selectTasksStatus = (state) => state.tasksManagement.status;

export const selectTasksError = (state) => state.tasksManagement.error;

export default tasksManagementSlice.reducer;
