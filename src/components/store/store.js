import { configureStore } from '@reduxjs/toolkit';
import NumberTransfersReducer from './slices/NumberTransfersSlice'; // Импорт редюсера

// Создание Redux Store и добавление редюсера для управления состоянием
const store = configureStore({
  reducer: {
    NumberTransfers: NumberTransfersReducer,
  },
});

export default store; // Экспорт store для использования в приложении
