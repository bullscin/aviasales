import React, { useEffect } from "react";
import { Alert } from "antd";
import { useSelector, useDispatch } from "react-redux";
import NumberTransfers from "../NumberOfTransfers/NumberOfTransfers";
import Filter from "../Filter/Filter";
import ListTickets from "../ListTickets/ListTickets";
import { fetchSearchId, fetchTickets } from "../../service/service"; // Импортируем fetchTickets

import cl from "./Page.module.scss";

function Page() {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.search.searchId); // Получаем searchId из Redux Store
  const searchError = useSelector((state) => state.search.error); // Получаем ошибку из Redux Store

  useEffect(() => {
    dispatch(fetchSearchId());
  }, [dispatch]);

  useEffect(() => {
    if (searchId) {
      // Проверяем, есть ли searchId
      dispatch(fetchTickets(searchId)); // Если есть, вызываем fetchTickets
    }
  }, [dispatch, searchId]); // Обновляем fetchTickets, если изменяется searchId

  return (
    <main className={cl.main}>
      <NumberTransfers />
      <section>
        <Filter />
        {searchError && (
          <Alert
            style={{ marginBottom: "20px" }}
            type="error"
            description={searchError.message}
          />
        )}
        <ListTickets />
      </section>
    </main>
  );
}

export default Page;
