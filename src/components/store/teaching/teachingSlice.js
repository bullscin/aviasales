/* eslint-disable default-param-last */

// Определяем редьюсер, который управляет состоянием
const NumberOfTransfers = (state = 0, action) => {
  switch (action.type) {
    // Если тип действия 'INC', увеличиваем состояние на 1
    case 'INC':
      return state + 10;
    case 'DEC':
      return state - 1;
    // По умолчанию возвращаем текущее состояние, если действие не распознано
    default:
      return state;
  }
};

export default NumberOfTransfers; // Экспортируем редьюсер для использования в store
