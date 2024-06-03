import { configureStore } from '@reduxjs/toolkit';
import numberOfTransfersReducer from './slices/numberOfTransfersSlice'; // Импорт редюсера
import searchIdReducer from './slices/searchIdSlice'; // Импорт редюсера
import ticketsReducer from './slices/ticketsSlice'; // Импорт редюсера

// Создание Redux Store и добавление редюсера для управления состоянием
const store = configureStore({
  reducer: {
    transfers: numberOfTransfersReducer,
    search: searchIdReducer,
    tickets: ticketsReducer,
  },
});

export default store; // Экспорт store для использования в приложении
