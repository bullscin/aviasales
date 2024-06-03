import { configureStore } from '@reduxjs/toolkit';
import numberOfTransfersReducer from './slices/numberOfTransfersSlice';
import searchIdReducer from './slices/searchIdSlice';
import ticketsReducer from './slices/ticketsSlice';
import filterReducer from './slices/filterSlice';

// Создание Redux Store и добавление редюсера для управления состоянием
const store = configureStore({
  reducer: {
    transfers: numberOfTransfersReducer,
    search: searchIdReducer,
    tickets: ticketsReducer,
    filters: filterReducer,
  },
});

export default store; // Экспорт store для использования в приложении
