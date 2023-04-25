import React, { useEffect, useState } from "react";
import '../App.css'
import EditPlayer from "./Edit";



function PlayerTable() {
  const [players, setPlayers] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch(" http://localhost:3099/players")
      .then((res) => res.json())
      .then((players) => setPlayers(players));

  }, []);


  function handleDelete(id) {
    fetch(` http://localhost:3099/players/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("Player deleted successfully!");
          setPlayers(players.filter((t) => t.id !== id));
        } else {
          throw new Error("Player could not be deleted.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }


  function handleUpdate(updatedPlayer) {
    const updatedPlayers = players.map((player) =>
    player.id === updatedPlayer.id ? updatedPlayer : player
    );
    setPlayers(updatedPlayers);
    setEditId(null);
    }


  return (
    <table>
      <thead>
        <tr>
        
          <th>Name</th>
          <th>Age</th>
          <th>Position</th>
          
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.id}>
        
            <td>{player.name}</td>
            <td>{player.age}</td>
            <td>{player.position}</td>
            <td>
  {editId === player.id ? (
    <EditPlayer
      player={player}
      onEdit={handleUpdate}
      onCancel={() => setEditId(null)}
    />
  ) : (
    <button className="edit-btn" onClick={() => setEditId(player.id)}>
      Edit
    </button>
  )}
  <button className="delete-btn" onClick={() => handleDelete(player.id)}>
    Delete
  </button>
</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default PlayerTable;