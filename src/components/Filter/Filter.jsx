/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import cl from "./Filter.module.scss";

function Filter() {
  const [checkedValue, setCheckedValue] = useState("cheapest");

  const handleChange = (event) => {
    const newValue = event.target.value;
    // console.log(newValue); // Выведет актуальное значение
    setCheckedValue(newValue);
  };

  return (
    <ul className={cl.filter__list}>
      <li className={cl.filter__item}>
        <button type="button" className={cl["btn-radio"]}>
          <input
            className={cl["btn-radio-input"]}
            type="radio"
            name="filter"
            value="cheapest"
            id="cheapest"
            checked={checkedValue === "cheapest"}
            onChange={handleChange}
          />
          <label className={cl["btn-radio-text"]} htmlFor="cheapest">
            Самый дешёвый
          </label>
        </button>
      </li>

      <li className={cl.filter__item}>
        <button type="button" className={cl["btn-radio"]}>
          <input
            className={cl["btn-radio-input"]}
            type="radio"
            name="filter"
            value="fastest"
            id="fastest"
            checked={checkedValue === "fastest"}
            onChange={handleChange}
          />
          <label className={cl["btn-radio-text"]} htmlFor="fastest">
            Самый быстрый
          </label>
        </button>
      </li>

      <li className={cl.filter__item}>
        <button type="button" className={cl["btn-radio"]}>
          <input
            className={cl["btn-radio-input"]}
            type="radio"
            name="filter"
            value="optimal"
            id="optimal"
            checked={checkedValue === "optimal"}
            onChange={handleChange}
          />
          <label className={cl["btn-radio-text"]} htmlFor="optimal">
            Оптимальный
          </label>
        </button>
      </li>
    </ul>
  );
}

export default Filter;
