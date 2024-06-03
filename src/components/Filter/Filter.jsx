/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cl from "./Filter.module.scss";
import { setFilter } from "../../store/slices/filterSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.filters.selected);

  // Обработчик изменения выбранного фильтра
  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <ul className={cl.filter__list}>
      {/* Первый фильтр - "Самый дешёвый" */}
      <li className={cl.filter__item}>
        <button type="button" className={cl["btn-radio"]}>
          <input
            className={cl["btn-radio-input"]}
            type="radio"
            name="filter"
            value="cheapest"
            id="cheapest"
            checked={selectedFilter === "cheapest"} // Проверяем, выбран ли этот фильтр
            onChange={() => handleFilterChange("cheapest")} // Вызываем функцию для обработки изменения фильтра
          />
          <label className={cl["btn-radio-text"]} htmlFor="cheapest">
            Самый дешёвый
          </label>
        </button>
      </li>

      {/* Второй фильтр - "Самый быстрый" */}
      <li className={cl.filter__item}>
        <button type="button" className={cl["btn-radio"]}>
          <input
            className={cl["btn-radio-input"]}
            type="radio"
            name="filter"
            value="fastest"
            id="fastest"
            checked={selectedFilter === "fastest"}
            onChange={() => handleFilterChange("fastest")}
          />
          <label className={cl["btn-radio-text"]} htmlFor="fastest">
            Самый быстрый
          </label>
        </button>
      </li>

      {/* Третий фильтр - "Оптимальный" */}
      <li className={cl.filter__item}>
        <button type="button" className={cl["btn-radio"]}>
          <input
            className={cl["btn-radio-input"]}
            type="radio"
            name="filter"
            value="optimal"
            id="optimal"
            checked={selectedFilter === "optimal"}
            onChange={() => handleFilterChange("optimal")}
          />
          <label className={cl["btn-radio-text"]} htmlFor="optimal">
            Оптимальный
          </label>
        </button>
      </li>
    </ul>
  );
}
