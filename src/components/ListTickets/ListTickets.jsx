import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Alert, Spin } from "antd";
import TicketCard from "../TicketCard/TicketCard";
import cl from "./ListTickets.module.scss";

function ListTickets() {
  const [visibleCount, setVisibleCount] = useState(5); // Начальное состояние для отображаемых билетов

  const tickets = useSelector((state) => state.tickets.tickets);
  const loading = useSelector((state) => state.tickets.loading);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Увеличиваем количество отображаемых билетов на 5
  };

  return (
    <div>
      {loading && (
        <>
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
        </>
      )}

      <ul className={cl.ListTickets}>
        {tickets.slice(0, visibleCount).map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </ul>
      {visibleCount < tickets.length && (
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

export default ListTickets;
