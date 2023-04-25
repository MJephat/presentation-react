import React, { useState } from "react";


function EditPlayer({ player, onEdit }) {
  const [name, setName] = useState(player.name);
  const [age, setAge] = useState(player.age);
  const [position, setPosition] = useState(player.position);
  function handleSubmit(e) {
    e.preventDefault();
    const updatedPlayer= {
      ...player,
      name,
      age,
      position
    };
    onEdit(updatedPlayer);
  }
  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Save</button>
    </form>
  );
}
export default EditPlayer;