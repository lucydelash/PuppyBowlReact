import React from 'react';

function Player({ player, onDelete, onViewDetails }) {
  return (
    <div>
      <h3>{player.name}</h3>
      <button onClick={() => onDelete(player.id)}>Delete</button>
      <button onClick={() => onViewDetails(player)}>See Details</button>
    </div>
  );
}

export default Player;