import React, { useState } from 'react';
import './Garena.css';

const Garena = ({ game: { imdbID, Poster, Title, Year, Type, } }) => {
    const [showGameDetails, setShowDetails] = useState(false);
    if (Type.toLowerCase() !== "game") {
        return (
            <div className="game" key={imdbID}></div>
        );
    }

const toggle = () => {
    setShowDetails(!showGameDetails);
};
        
return (
    <div className="game" key={imdbID}>
        <div>
            <button onClick={toggle}>{showGameDetails ? "Hide Details" : "Show Details"}</button>
                {showGameDetails && (
                    <div className="game-details">
                        <p>Name of the game: {Title}</p>
                        <p>Year: {Year}</p>
                    </div>
                )}
        </div>
        <div className="PosterImage">
            <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
        </div>
    </div>
  );
}

export default Garena;
