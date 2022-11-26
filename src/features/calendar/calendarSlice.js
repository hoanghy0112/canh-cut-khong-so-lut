/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startDate: new Date(),
  suggestionTime: [],
  suggestionVisible: false,
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setSuggestionTime(state, action) {
      state.suggestionTime = action.payload;
    },
    setSuggestionVisible(state, action) {
      state.suggestionVisible = action.payload;
    },
  },
  extraReducers() {},
});

export const selectStartDate = (state) => state.calendar.startDate;
export const selectSuggestionVisible = (state) =>
  state.calendar.suggestionVisible;
export const selectSuggestionTime = (state) => state.calendar.suggestionTime;

export const { setSuggestionTime, setSuggestionVisible } =
  calendarSlice.actions;

export default calendarSlice.reducer;
