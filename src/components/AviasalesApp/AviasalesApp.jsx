import React from "react";
import logo from "../img/Logo.svg";
import Page from "../Page/Page";

import "../default-style/style.module.scss";
import cl from "./AviasalesApp.module.scss";

function AviasalesApp() {
  return (
    <div className={cl.container}>
      <header className={cl.header}>
        <img className={cl.header__img} src={logo} alt="logo Aviasails" />
      </header>
      <Page />
    </div>
  );
}

export default AviasalesApp;
