import React, { useState } from "react";
import '../App.css';


function PlayerForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newPlayer = {
      name,
      age,
      position
    };
    fetch(" http://localhost:3099/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlayer)
    })
      .then(res => res.json())
      .then(() => {
        console.log("New Player added");
        setName("");
        setAge("");
        setPosition("");
      })
      .catch(error => console.error(error));
  }
  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label>
        Position:
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </label>
      <button type="submit">Add Player</button>
    </form>
  );
}
export default PlayerForm;