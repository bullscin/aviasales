import React from "react";
import { Checkbox } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleAll,
  toggleFilter,
} from "../../store/slices/numberOfTransfersSlice"; // Импорт действий из слайса

import cl from "./NumberOfTransfers.module.scss";

export default function NumberOfTransfers() {
  // Получение состояния фильтров из Redux Store
  const filters = useSelector((state) => state.transfers);
  // Получение функции dispatch для отправки действий
  const dispatch = useDispatch();

  // Обработчик для изменения состояния отдельного фильтра
  const handleCheckboxChange = (filter) => {
    // Отправка действия toggleFilter с выбранным фильтром
    // Redux Toolkit автоматически создает объект действия
    // { type: 'filters/toggleFilter', payload: { filter: 'filter' } }
    dispatch(toggleFilter({ filter }));
  };

  return (
    <aside className={cl.aside}>
      <h2 className={cl.aside__title}>Количество пересадок</h2>
      <ul className={cl.checkbox__list}>
        <li className={cl.checkbox__item}>
          <Checkbox
            // Состояние чекбокса "Все"
            checked={filters.all}
            // Обработчик для изменения состояния "Все"
            // Redux Toolkit автоматически создает объект действия
            // { type: 'filters/toggleAll' },
            onChange={() => dispatch(toggleAll())}
          >
            Все
          </Checkbox>
        </li>
        <li className={cl.checkbox__item}>
          <Checkbox
            checked={filters.noTransfers}
            onChange={() => handleCheckboxChange("noTransfers")}
          >
            Без пересадок
          </Checkbox>
        </li>
        <li className={cl.checkbox__item}>
          <Checkbox
            checked={filters.oneTransfer}
            onChange={() => handleCheckboxChange("oneTransfer")}
          >
            1 пересадка
          </Checkbox>
        </li>
        <li className={cl.checkbox__item}>
          <Checkbox
            checked={filters.twoTransfers}
            onChange={() => handleCheckboxChange("twoTransfers")}
          >
            2 пересадки
          </Checkbox>
        </li>
        <li className={cl.checkbox__item}>
          <Checkbox
            checked={filters.threeTransfers}
            onChange={() => handleCheckboxChange("threeTransfers")}
          >
            3 пересадки
          </Checkbox>
        </li>
      </ul>
    </aside>
  );
}
