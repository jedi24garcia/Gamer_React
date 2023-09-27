import React from 'react';
import './Result.css';

function Result({item}) {
    const showTheAlert = () => {
        alert("Added to cart!");
    };
    const specAlert = () => {
        alert("We'll get you to it");
    }
    return (
        <div className="result">
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <button onClick={showTheAlert}>Add to Cart</button>
            <button onClick={specAlert}>Show Specs</button>
        </div>
    );
}

export default Result;