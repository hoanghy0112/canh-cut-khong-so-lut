/* eslint-disable no-underscore-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import ITEMS_LIST from "../../constants/ITEM_LIST";

const initialState = {
	listItems: ITEMS_LIST.map((item) => ({
		...item,
		quantity: 0,
		date: new Date(),
	})),
	status: "idle",
	error: null,
};

export const itemsManagementSlice = createSlice({
	name: "itemsManagement",
	initialState,
	reducers: {
		addOneItem: (state, action) => {
			const { title } = action.payload;
			state.listItems[
				state.listItems.indexOf(
					state.listItems.find((item) => item.title === title)
				)
			].quantity += 1;
		},
		removeOneItem: (state, action) => {
			const { title } = action.payload;
			state.listItems[
				state.listItems.indexOf(
					state.listItems.find((item) => item.title === title)
				)
			].quantity -= 1;
		},
		removeItem: (state, action) => {
			const { title } = action.payload;
			state.listItems[
				state.listItems.indexOf(
					state.listItems.find((item) => item.title === title)
				)
			].quantity = 0;
		},
	},
});

export const { addOneItem, removeOneItem, removeItem } =
	itemsManagementSlice.actions;

export const selectAllItems = (state) => state.itemsManagement.listItems;

export const selectNotZeroItems = (state) =>
	state.itemsManagement.listItems.filter((item) => item.quantity !== 0);

export default itemsManagementSlice.reducer;
