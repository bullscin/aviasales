import { createSlice } from '@reduxjs/toolkit';

// Определение слайса для фильтров количества пересадок
const numberOfTransfersSlice = createSlice({
  // Имя слайса
  name: 'filters',
  // Начальное состояние
  initialState: {
    all: false,
    noTransfers: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
  // Определение редюсеров
  reducers: {
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
      const copyState = { ...state, [filter]: !state[filter] };

      // Обновление состояния "all" в зависимости от состояния всех других фильтров
      if (filter !== 'all') {
        copyState.all =
          copyState.noTransfers &&
          copyState.oneTransfer &&
          copyState.twoTransfers &&
          copyState.threeTransfers;
      }

      return copyState;
    },
  },
});

// Экспорт действий для использования в компонентах
export const { toggleAll, toggleFilter } = numberOfTransfersSlice.actions;
// Экспорт редюсера для использования в store
export default numberOfTransfersSlice.reducer;
