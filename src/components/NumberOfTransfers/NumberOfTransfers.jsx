import React from "react";
import { Checkbox } from "antd";

import cl from "./NumberOfTransfers.module.scss";

function NumberOfTransfers() {
  return (
    <aside className={cl.aside}>
      <h2 className={cl.aside__title}>Количество пересадок</h2>
      <ul className={cl.checkbox__list}>
        <li className={cl.checkbox__item}>
          <Checkbox>Все</Checkbox>
        </li>
        <li className={cl.checkbox__item}>
          <Checkbox>Без пересадок</Checkbox>
        </li>
        <li className={cl.checkbox__item}>
          <Checkbox>1 пересадка</Checkbox>
        </li>
        <li className={cl.checkbox__item}>
          <Checkbox>2 пересадки</Checkbox>
        </li>
        <li className={cl.checkbox__item}>
          <Checkbox>3 пересадки</Checkbox>
        </li>
      </ul>
    </aside>
  );
}

export default NumberOfTransfers;
