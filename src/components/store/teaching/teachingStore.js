/* eslint-disable no-console */
import { configureStore } from '@reduxjs/toolkit'; // Импортируем функцию для создания хранилища
import NumberTransfersSlice from './teachingSlice'; // Импортируем наш редьюсер

/*
1) Создаём хранилище с использованием редьюсера exampleReducer
2) Когда хранилище создаётся, оно вызывает редьюсер один раз для инициализации начального состояния:

const initialState = exampleReducer(undefined, { type: '@@INIT' });
state = 0: Начальное состояние.
Действие @@INIT инициализирует состояние.
*/
const store = configureStore({
  reducer: {
    NumberTransfers: NumberTransfersSlice,
  },
});

const { dispatch } = store;

// Action Creators
const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });

// Подписываемся на изменения в хранилище и выводим сообщение при каждом изменении
store.subscribe(() => console.log('update store'));

// Выводим начальное состояние хранилища в консоль
console.log('initial state:', store.getState());

// Отправляем действие 'INC', чтобы увеличить состояние на 10
dispatch(inc());
console.log('dispatch-действие увеличить состояние на 10:', store.getState()); // Выводим новое состояние после первого действия

// Отправляем действие 'DEC' снова, чтобы ещё раз уменьшить состояние на 1
dispatch(dec());
console.log('dispatch-действие уменьшить состояние на 1:', store.getState()); // Выводим новое состояние после второго действия

export default store; // Экспортируем хранилище для использования в приложении
