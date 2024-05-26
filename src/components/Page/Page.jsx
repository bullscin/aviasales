import React from "react";
import NumberOfTransfers from "../NumberOfTransfers/NumberOfTransfers";
import Filter from "../Filter/Filter";
import ListTickets from "../ListTickets/ListTickets";

import cl from "./Page.module.scss";

function Page() {
  return (
    <main className={cl.main}>
      <NumberOfTransfers />
      <section>
        <Filter />
        <ListTickets />
      </section>
    </main>
  );
}

export default Page;
