import { createSlice } from '@reduxjs/toolkit';

// Определение слайса для фильтров количества пересадок
const NumberTransfersSlice = createSlice({
  name: 'filters', // Имя слайса
  initialState: {
    // Начальное состояние
    all: false,
    noTransfers: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
  reducers: {
    // Определение редюсеров

    // Редюсер для переключения всех фильтров
    toggleAll(state) {
      // Создание копии состояния
      const copyState = { ...state };
      // Изменение всех значений на противоположные
      return Object.keys(copyState).reduce((acc, key) => {
        acc[key] = !state.all;
        return acc;
      }, {});
    },

    // Редюсер для переключения отдельного фильтра
    toggleFilter(state, action) {
      const { filter } = action.payload;

      // Создание нового состояния с обновленным значением выбранного фильтра
      const newState = { ...state, [filter]: !state[filter] };

      // Обновление состояния "all" в зависимости от состояния всех других фильтров
      if (filter !== 'all') {
        newState.all =
          newState.noTransfers &&
          newState.oneTransfer &&
          newState.twoTransfers &&
          newState.threeTransfers;
      }

      console.log('toggleFilter:', newState);
      return newState;
    },
  },
});

// Экспорт действий для использования в компонентах
export const { toggleAll, toggleFilter } = NumberTransfersSlice.actions;

// Экспорт редюсера для использования в store
export default NumberTransfersSlice.reducer;
