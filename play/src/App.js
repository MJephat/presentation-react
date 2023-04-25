import React, { useEffect, useState } from "react";
import TransactionTable from "./components/PlayersTable";
import TransactionForm from "./components/AddForm";

function App() {
        return(
        <div>
          <h1>Manchester United Players</h1>
          <TransactionTable />
          <br />
          <br />
          <TransactionForm />
        </div>
        )
}
export default App;