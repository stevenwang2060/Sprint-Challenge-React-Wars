import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarCard from "./Card"
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charData, setCharData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results)
        setCharData(response.data.results)
        return (response.data.results)
      })
      .catch(error => {
        console.log("The data was not returned, error");
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <div className="card">
        {charData.map((data, index) => {
          return (<StarCard
            key={index}
            name={data.name}
            age={data.birth_year}
            gender={data.gender}
            height={data.height}
            mass={data.mass}
            hair={data.hair_color}
            eye={data.eye_color}
            skin={data.skin_color} />
          );
        })}
      </div>
    </div>
  );
}

export default App;