import React from "react";
// import { Alert } from "antd";
import TicketCard from "../TicketCard/TicketCard";
import cl from "./ListTickets.module.scss";

function ListTickets() {
  return (
    <>
      <ul className={cl.ListTickets}>
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </ul>
      <button className={cl["btn-show"]} type="button">
        показать ещё 5 билетов!
      </button>
    </>
  );
}

export default ListTickets;
