import React from 'react';

function PlayerDetails({ player }) {
  if (!player) {
    return <div>No player selected</div>;
  }

  return (
    <div>
      <h2>{player.name} Details</h2>
      <p>Owner: {player.owner}</p>
      <p>Team Name: {player.teamName}</p>
      {/* Additional details can be added here */}
    </div>
  );
}

export default PlayerDetails;