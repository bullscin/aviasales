/* eslint-disable react/prop-types */
import React from "react";
import { format, addMinutes } from "date-fns";
import logo from "../../img/S7 Logo.svg";
import cl from "./TicketCard.module.scss";

export default function TicketCard({ ticket }) {
  const formattedPrice = new Intl.NumberFormat("ru-RU").format(ticket.price);

  // Функция для форматирования времени
  const formatTime = ({ date, duration }) => {
    const startTime = new Date(date);
    const endTime = addMinutes(startTime, duration);

    return `${format(startTime, "HH:mm")} – ${format(endTime, "HH:mm")}`;
  };

  // Функция для определения окончания слов
  const getEndings = (count) => {
    if (count === 0) return "прямой рейс";
    if (count === 1) return "1 пересадка";
    if (count >= 2 && count <= 4) return `${count} пересадки`;
    return `${count} пересадок`;
  };

  return (
    <li className={cl.ticket}>
      <div className={cl.ticket__header}>
        <p className={cl.ticket__price}>{formattedPrice} Р</p>
        <div>
          <img className={cl.ticket__logo} src={logo} alt="logo-S7" />
        </div>
      </div>{" "}
      <div className={cl.ticket__body}>
        <div>
          <div className={cl.ticket__cell}>
            <h3 className={cl.ticket__title}>
              {ticket.segments[0].origin} – {ticket.segments[0].destination}
            </h3>
            <p className={cl.ticket__text}>{formatTime(ticket.segments[0])}</p>
          </div>
          <div className={cl.ticket__cell}>
            <h3 className={cl.ticket__title}>
              {ticket.segments[1].origin} – {ticket.segments[1].destination}
            </h3>
            <p className={cl.ticket__text}>{formatTime(ticket.segments[1])}</p>
          </div>
        </div>
        <div>
          <div className={cl.ticket__cell}>
            <h3 className={cl.ticket__title}>В пути</h3>
            <p className={cl.ticket__text}>
              {Math.floor(ticket.segments[0].duration / 60)}ч{" "}
              {ticket.segments[0].duration % 60}м
            </p>
          </div>
          <div className={cl.ticket__cell}>
            <h3 className={cl.ticket__title}>В пути</h3>
            <p className={cl.ticket__text}>
              {Math.floor(ticket.segments[1].duration / 60)}ч{" "}
              {ticket.segments[1].duration % 60}м
            </p>
          </div>
        </div>
        <div>
          <div className={cl.ticket__cell}>
            <h3 className={cl.ticket__title}>
              {getEndings(ticket.segments[0].stops.length)}
            </h3>
            <p className={cl.ticket__text}>
              {ticket.segments[0].stops.join(", ")}
            </p>
          </div>
          <div className={cl.ticket__cell}>
            <h3 className={cl.ticket__title}>
              {getEndings(ticket.segments[1].stops.length)}
            </h3>
            <p className={cl.ticket__text}>
              {ticket.segments[1].stops.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
