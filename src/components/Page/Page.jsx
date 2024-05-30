import React from "react";
import NumberTransfers from "../NumberOfTransfers/NumberOfTransfers";
import Filter from "../Filter/Filter";
import ListTickets from "../ListTickets/ListTickets";

import cl from "./Page.module.scss";

function Page() {
  return (
    <main className={cl.main}>
      <NumberTransfers />
      <section>
        <Filter />
        <ListTickets />
      </section>
    </main>
  );
}

export default Page;
