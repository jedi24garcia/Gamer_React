import React from 'react';
import './menu.css'
import Result from './Result';


const results = [
  {id: 1, name: "Playstation 3", price: "$215", category: "Console"},
  {id: 1, name: "Playstation 4", price: "$448", category: "Console"},
  {id: 1, name: "Playstation 5", price: "$898", category: "Console"},
  {id: 1, name: "Xbox(2004)", price: "$299", category: "Console"},
  {id: 1, name: "Xbox360(2005)", price: "$300", category: "Console"},
  {id: 1, name: "Xbox360 S(2010)", price: "$330", category: "Console"},
  {id: 1, name: "Xbox E(2013)", price: "$350", category: "Console"},
  {id: 1, name: "Xbox One(2013)", price: "$350", category: "Console"},
  {id: 1, name: "Xbox One S(2016)", price: "$400", category: "Console"},
  {id: 1, name: "Xbox One X(2017)", price: "$450", category: "Console"},
  {id: 1, name: "Xbox Series X and S(2020)", price: "$899", category: "Console"},
  {id: 1, name: "Nintendo Switch", price: "509.00", category: "Console"},
];

function Menu() {
  return (
    <div className="menu">
      {results.map(result=> (
        <Result key={results.name}item={result}/>
      ))}
    </div>
  );
}

export default Menu;