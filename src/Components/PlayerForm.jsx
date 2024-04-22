import React, { useState } from 'react';

function PlayerForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [teamName, setTeamName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, owner, teamName });
    setName('');
    setOwner('');
    setTeamName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Owner"
        value={owner}
        onChange={e => setOwner(e.target.value)}
      />
      <input
        type="text"
        placeholder="Team Name"
        value={teamName}
        onChange={e => setTeamName(e.target.value)}
      />
      <button type="submit">Add Player</button>
    </form>
  );
}

export default PlayerForm;