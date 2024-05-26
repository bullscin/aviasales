import React from "react";
import logo from "../img/S7 Logo.svg";
import cl from "./TicketCard.module.scss";

function TicketCard() {
  return (
    <li className={cl.ticket}>
      <div className={cl.ticket__header}>
        <p className={cl.ticket__price}>13 400 Р </p>
        <div>
          <img className={cl.ticket__logo} src={logo} alt="logo-S7" />
        </div>
      </div>{" "}
      <div className={cl.ticket__body}>
        <div>
          <div className={cl.ticket__cell}>
            <h3 className={cl.ticket__title}>MOW – HKT</h3>
            <p className={cl.ticket__text}>10:45 – 08:00</p>
          </div>
          <div className={cl.ticket__cell}>
            <h3 className={cl.ticket__title}>MOW – HKT</h3>
            <p className={cl.ticket__text}>11:20 – 00:50</p>
          </div>
        </div>
        <div>
          <div className={cl.ticket__cell}>
            <h3 className={cl.ticket__title}>В пути</h3>
            <p className={cl.ticket__text}> 21ч 15м </p>
          </div>
          <div className={cl.ticket__cell}>
            <h3 className={cl.ticket__title}>В пути</h3>
            <p className={cl.ticket__text}> 13ч 30м</p>
          </div>
        </div>
        <div>
          <div className={cl.ticket__cell}>
            <h3 className={cl.ticket__title}>1 пересадки</h3>
            <p className={cl.ticket__text}>HKG, JNB</p>
          </div>
          <div className={cl.ticket__cell}>
            <h3 className={cl.ticket__title}>2 пересадки</h3>
            <p className={cl.ticket__text}>HKG</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default TicketCard;
