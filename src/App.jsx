import React, { useState, useEffect } from 'react';
import PlayerList from './Components/PlayerList';
import PlayerDetails from './Components/PlayerDetails';
import PlayerForm from './Components/PlayerForm';
import SearchBar from './Components/SearchBar';

function App() {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    // Fetch data from the API when component mounts
    fetch('https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players')
      .then(response => response.json())
      .then(data => {
        setPlayers(data);
        setFilteredPlayers(data); // Ensure filteredPlayers is also initialized
      })
      .catch(error => console.error('Error fetching players:', error));
  }, []); // Empty dependency array ensures effect runs only once on mount

  const handleDelete = (id) => {
    const updatedPlayers = players.filter(player => player.id !== id);
    setPlayers(updatedPlayers);
    setFilteredPlayers(updatedPlayers);
  };

  const handleAddPlayer = (newPlayer) => {
    setPlayers([...players, { ...newPlayer, id: Date.now() }]);
    setFilteredPlayers([...players, { ...newPlayer, id: Date.now() }]);
  };

  const handleSearch = (query) => {
    const filtered = players.filter(player =>
      player.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlayers(filtered);
  };

  const handleViewDetails = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <div>
      <h1>Puppy Bowl Players</h1>
      <SearchBar onSearch={handleSearch} />
      <PlayerList players={filteredPlayers} onDelete={handleDelete} onViewDetails={handleViewDetails} />
      <PlayerDetails player={selectedPlayer} />
      <PlayerForm onSubmit={handleAddPlayer} />
    </div>
  );
}

export default App;