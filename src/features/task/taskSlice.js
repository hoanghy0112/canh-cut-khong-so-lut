/* eslint-disable no-underscore-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { uid } from 'uid';
import moment from 'moment';

const initialState = {
	listTasks: [
		{
			time: {
				from: new Date("2022-12-21T07:30:00"),
				to: new Date("2022-12-21T11:30:00"),
			},
			title: "Nhập môn mạng máy tính Thực hành",
		},
		{
			time: {
				from: new Date("2022-12-21T13:00:00"),
				to: new Date("2022-12-21T15:15:00"),
			},
			title: "Nhập môn mạng máy tính",
		},
		{
			time: {
				from: new Date("2022-12-22T07:30:00"),
				to: new Date("2022-12-22T09:45:00"),
			},
			title: "Hệ điều hành",
		},
		{
			time: {
				from: new Date("2022-12-22T13:00:00"),
				to: new Date("2022-12-22T17:00:00"),
			},
			title: "Hệ điều hành thực hành",
		},
		{
			time: {
				from: new Date("2022-12-23T07:30:00"),
				to: new Date("2022-12-23T11:30:00"),
			},
			title: "Lập trình trực quan thực hành",
		},
		{
			time: {
				from: new Date("2022-12-23T13:00:00"),
				to: new Date("2022-12-23T15:15:00"),
			},
			title: "Lập trình trực quan",
		},
		{
			time: {
				from: new Date("2022-12-24T13:00:00"),
				to: new Date("2022-12-24T15:15:00"),
			},
			title: "Triết học Mác lênin",
		},
		{
			time: {
				from: new Date("2022-12-25T07:30:00"),
				to: new Date("2022-12-25T11:30:00"),
			},
			title: "Cơ sở dữ liệu thực hành",
		},
		{
			time: {
				from: new Date("2022-12-25T13:00:00"),
				to: new Date("2022-12-25T15:15:00"),
			},
			title: "Cơ sở dữ liệu",
		},
		{
			time: {
				from: new Date("2022-12-26T8:00:00"),
				to: new Date("2022-12-26T10:15:00"),
			},
			title: "Học thêm anh văn",
		},
		{
			time: {
				from: new Date("2022-12-27T13:00:00"),
				to: new Date("2022-12-27T18:00:00"),
			},
			title: "Đi chơi",
		},
	],
	status: "idle",
	error: null,
};

export const tasksManagementSlice = createSlice({
  name: 'tasksManagement',
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
        'd'
      );
      return diff >= 0 && diff < 7;
    });
    return tasks;
  };

export const selectTasksStatus = (state) => state.tasksManagement.status;

export const selectTasksError = (state) => state.tasksManagement.error;

export default tasksManagementSlice.reducer;
