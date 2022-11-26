/* eslint-disable no-underscore-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	score: 0,
};

export const scoreManagementSlice = createSlice({
	name: "scoreManagement",
	initialState,
	reducers: {
		addScore: (state, action) => {
			const score = action.payload;

			state.point += score;
		},
		reduceScore: (state, action) => {
			const score = action.payload;

			state.point -= score;
		},
	},
});

export const { addScore, reduceScore } = scoreManagementSlice.actions;

export const selectScore = (state) => state.scoreManagement.point;

export default scoreManagementSlice.reducer;
