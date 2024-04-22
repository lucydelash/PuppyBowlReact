import React from 'react';
import Player from './Player';

function PlayerList({ players, onDelete, onViewDetails }) {
  return (
    <div>
      {players.map(player => (
        <Player
          key={player.id}
          player={player}
          onDelete={onDelete}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}

export default PlayerList;