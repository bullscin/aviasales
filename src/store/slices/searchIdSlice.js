/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { fetchSearchId } from '../../service/service';

const searchIdSlice = createSlice({
  name: 'searchId',
  initialState: { searchId: null, error: null },
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

export default searchIdSlice.reducer;
