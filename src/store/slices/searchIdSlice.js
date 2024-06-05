/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { fetchSearchId } from '../../service/service';

const searchIdSlice = createSlice({
  name: 'searchId',
  initialState: { searchId: null, error: null },
  reducers: {
    setSearchId(state, action) {
      state.searchId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload;
      })
      .addCase(fetchSearchId.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { setSearchId } = searchIdSlice.actions;

export default searchIdSlice.reducer;
