import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    handleFilter: {
      reducer(state, action) {
        state.search = action.payload;
      },
    },
  },
});

export const { handleFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
