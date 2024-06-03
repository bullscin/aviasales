/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// Создание слайса для управления фильтрами и сортировкой билетов
const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    selected: 'cheapest', // Выбранный фильтр по умолчанию
    sortedTickets: [], // Отсортированные билеты
  },
  reducers: {
    // Редюсер для установки выбранного фильтра
    setFilter(state, action) {
      state.selected = action.payload; // Устанавливаем выбранный фильтр
    },
    // Редюсер для сортировки билетов в соответствии с выбранным фильтром
    sortTickets(state, action) {
      const { tickets } = action.payload; // Получаем билеты из действия
      const activeFilter = state.selected; // Получаем выбранный фильтр

      // Объект с функциями сортировки для каждого фильтра
      const sortFunctions = {
        // Сортировка по возрастанию цены
        cheapest: (a, b) => a.price - b.price,
        // Сортировка по общей продолжительности перелёта
        fastest: (a, b) =>
          a.segments[0].duration +
          a.segments[1].duration -
          (b.segments[0].duration + b.segments[1].duration),
        // Сортировка по оптимальному критерию
        optimal: (a, b) =>
          a.price * a.segments[0].duration - b.price * b.segments[0].duration,
      };

      // Сортируем билеты с помощью выбранной функции сортировки
      state.sortedTickets = [...tickets].sort(sortFunctions[activeFilter]);
    },
  },
});

// Экспорт действий и редюсера
export const { setFilter, sortTickets } = filterSlice.actions;
export default filterSlice.reducer;
