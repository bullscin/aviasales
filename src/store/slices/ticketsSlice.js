/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { fetchTickets } from '../../service/service';

let idCounter = 0;

function generateUniqueId() {
  idCounter += 1;
  return idCounter;
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: { tickets: [], stop: false, loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = [
          ...state.tickets,
          ...action.payload.tickets.map((ticket) => ({
            ...ticket,
            id: generateUniqueId(),
          })),
        ];

        state.stop = action.payload.stop;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;
