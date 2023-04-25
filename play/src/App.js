import React, { useEffect, useState } from "react";
import PlayerTable from "./components/PlayersTable";
import PlayerForm from "./components/AddForm";

function App() {
        return(
        <div>
          <h1>Manchester United Players</h1>
          <PlayerTable />
          <br />
          <br />
          <PlayerForm />
        </div>
        )
}
export default App;