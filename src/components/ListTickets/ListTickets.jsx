/* eslint-disable consistent-return */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Spin } from "antd";
import TicketCard from "../TicketCard/TicketCard";
import cl from "./ListTickets.module.scss";
import { sortTickets } from "../../store/slices/filterSlice";
// Это импорт для вашего async экшена
import { fetchTickets } from "../../service/service";

export default function ListTickets() {
  const [visibleCount, setVisibleCount] = useState(5);
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  const loading = useSelector((state) => state.tickets.loading);
  const ticketsError = useSelector((state) => state.tickets.error);
  const selectedFilter = useSelector((state) => state.filters.selected);
  const transfers = useSelector((state) => state.transfers);
  const stopSearch = useSelector((state) => state.tickets.stop);

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
    if (!stopSearch) {
      const timeout = setInterval(() => {
        dispatch(fetchTickets());
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [stopSearch]);

  useEffect(() => {
    const filteredTickets = tickets.filter(filterTickets);
    dispatch(sortTickets({ tickets: filteredTickets }));
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
