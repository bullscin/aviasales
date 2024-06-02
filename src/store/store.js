import { configureStore } from '@reduxjs/toolkit';
import numberOfTransfersReducer from './slices/numberOfTransfersSlice'; // Импорт редюсера

// Создание Redux Store и добавление редюсера для управления состоянием
const store = configureStore({
  reducer: {
    transfers: numberOfTransfersReducer,
  },
});

export default store; // Экспорт store для использования в приложении
