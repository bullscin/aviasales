/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';

// Обработка ошибок при запросах
const handleFetchError = (error) => {
  if (error.message === 'Failed to fetch')
    return new Error(
      'Не удалось загрузить данные. Проверьте подключение к интернету и повторите попытку.',
    );

  if (error.response) {
    const { status } = error.response;
    if (status === 404)
      return new Error(
        'Данные не найдены. Проверьте правильность введенных данных.',
      );

    if (status >= 500)
      return new Error('Ошибка сервера. Попробуйте повторить запрос позже.');
  }
  return new Error('Произошла неизвестная ошибка.');
};

export const fetchSearchId = createAsyncThunk(
  'searchId',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://aviasales-test-api.kata.academy/search',
      );
      const data = await response.json();
      return data.searchId;
    } catch (error) {
      const customError = handleFetchError(error);
      return rejectWithValue(customError.message);
    }
  },
);

export const fetchTickets = createAsyncThunk(
  'tickets',
  async (_, { rejectWithValue, getState }) => {
    const { searchId } = getState().search;
    try {
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
      );

      const data = await response.json();
      return data;
    } catch (error) {
      const customError = handleFetchError(error);
      return rejectWithValue(customError.message);
    }
  },
);
