import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Spin } from "antd";
import TicketCard from "../TicketCard/TicketCard";
import cl from "./ListTickets.module.scss";
import { sortTickets } from "../../store/slices/filterSlice";

export default function ListTickets() {
  const [visibleCount, setVisibleCount] = useState(5);
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  const loading = useSelector((state) => state.tickets.loading);
  const ticketsError = useSelector((state) => state.tickets.error);
  const selectedFilter = useSelector((state) => state.filters.selected);
  const transfers = useSelector((state) => state.transfers);

  const timerRef = useRef(null);

  const filterTickets = (ticket) => {
    const stops1 = ticket.segments[0].stops.length;
    const stops2 = ticket.segments[1].stops.length;

    if (transfers.all) return true;
    if (stops1 === 0 && stops2 === 0 && transfers.no) return true;
    if (
      (stops1 === 0 || stops2 === 0) &&
      (stops1 === 1 || stops2 === 1) &&
      transfers.one
    )
      return true;
    if (
      (stops1 === 0 || stops2 === 0) &&
      (stops1 === 2 || stops2 === 2) &&
      transfers.two
    )
      return true;
    if (
      (stops1 === 0 || stops2 === 0) &&
      (stops1 === 3 || stops2 === 3) &&
      transfers.three
    )
      return true;
    if (stops1 === 1 && stops2 === 1 && transfers.one) return true;
    if (stops1 === 2 && stops2 === 2 && transfers.two) return true;
    if (stops1 === 3 && stops2 === 3 && transfers.three) return true;

    return false;
  };

  useEffect(() => {
    const filteredTickets = tickets.filter(filterTickets);
    dispatch(sortTickets({ tickets: filteredTickets }));

    // Устанавливаем таймер для обновления билетов
    timerRef.current = setTimeout(() => {
      const updatedTickets = tickets.filter(filterTickets); // здесь можно добавить логику обновления билетов
      dispatch(sortTickets({ tickets: updatedTickets }));
    }, 30000); // обновление каждые 30 секунд
    // Очищаем таймер при размонтировании компонента или изменении зависимостей
    return () => clearTimeout(timerRef.current);
  }, [tickets, transfers, selectedFilter, dispatch]);

  const sortedTickets = useSelector((state) => state.filters.sortedTickets);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  if (loading && sortedTickets.length === 0) {
    return (
      <div>
        <Alert
          message="Загрузка билетов..."
          type="info"
          showIcon
          style={{ marginBottom: "20px" }}
        />
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        />
      </div>
    );
  }

  if (ticketsError) {
    return (
      <Alert
        style={{ marginBottom: "20px" }}
        type="error"
        description={ticketsError}
      />
    );
  }

  if (sortedTickets.length === 0 && !loading) {
    return (
      <Alert
        style={{ marginBottom: "20px" }}
        message="Рейсов, подходящих под заданные фильтры, не найдено"
        type="warning"
      />
    );
  }

  return (
    <div>
      <ul className={cl.ListTickets}>
        {sortedTickets.slice(0, visibleCount).map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </ul>
      {visibleCount < sortedTickets.length && (
        <button
          className={cl["btn-show"]}
          type="button"
          onClick={handleShowMore}
        >
          показать ещё 5 билетов!
        </button>
      )}
    </div>
  );
}
