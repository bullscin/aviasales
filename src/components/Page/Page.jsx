import React, { useEffect } from "react";
import { Alert } from "antd";
import { useSelector, useDispatch } from "react-redux";
import NumberTransfers from "../NumberOfTransfers/NumberOfTransfers";
import Filter from "../Filter/Filter";
import ListTickets from "../ListTickets/ListTickets";
import { fetchSearchId, fetchTickets } from "../../service/service";

import cl from "./Page.module.scss";

export default function Page() {
  const dispatch = useDispatch();

  // Получение searchId и ошибки из Redux Store
  const searchId = useSelector((state) => state.search.searchId);
  const searchError = useSelector((state) => state.search.error);

  // Запрос searchId при монтировании компонента
  useEffect(() => {
    dispatch(fetchSearchId());
  }, [dispatch]);

  // Запрос билетов при обновлении searchId
  useEffect(() => {
    if (searchId) {
      dispatch(fetchTickets(searchId));
    }
  }, [dispatch, searchId]);

  return (
    <main className={cl.main}>
      {/* Компонент для выбора количества пересадок */}
      <NumberTransfers />

      <section>
        {/* Компонент для фильтрации билетов */}
        <Filter />

        {/* Вывод сообщения об ошибке запроса searchId */}
        {searchError && (
          <Alert
            style={{ marginBottom: "20px" }}
            type="error"
            description={searchError.message}
          />
        )}

        {/* Компонент для отображения списка билетов */}
        <ListTickets />
      </section>
    </main>
  );
}
