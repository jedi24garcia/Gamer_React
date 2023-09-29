import React from 'react';
import { useState, useEffect } from 'react';
import './Home-Page.css';
import Garena from './gamecomponents/Garena'; 

// api key number = bc50c245
const API_URL = "https://www.omdbapi.com/?apikey=bc50c245";

function Home() { 
  // variables to manage search term game data
   const [searchGameTerm, setSearchGameTerm] = useState(""); 
   const [games, setGames] = useState([]);
   
   //initial search e.g God of War 
   useEffect(() => {
    fetchGames("God of War");
 }, []);

   //fetch the games
   const fetchGames = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`); // fetches the API 
      const data = await response.json(); // gets the data
      setGames(data.Search);
   };
   
   //handles the enter key press for searching
   const pressEnter = (event) => {
    if (event.key === "Enter") {
      fetchGames(searchGameTerm);
    }
  };

  return (
    <div className="app">
      <div className="central">
      <h1>Search Game</h1>

      {/* This is the container in which the search and input button are located. The input element is where the user
      can enter a search term where the value is controlled by the setSearchGameTerm variable. The input value
      changes through onChange event and it updates the searchGameTerm state using the setSearchGameTerm function. */}
      <div className="search">
        <input
          value={searchGameTerm} onChange={(e) => setSearchGameTerm(e.target.value)} onKeyDown={pressEnter} placeholder="Search games"/>
        <button onClick={() => fetchGames(searchGameTerm)}>Search</button>
      </div>

      {/* displays different content based on length of the 'games' array */}
      {games?.length > 0 ? (
        <div className="container">
          {games.map((game) => (
            <Garena game={game} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No games found</h2>
        </div>
      )}
      </div>
    </div>
  );
};

export default Home;
