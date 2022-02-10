import React from "react";
import "./App.css";
import StarWarsCharacterCardList from "./components/StarWarsCharacterCardList";

function App() {
  
  return (
    <div className="App">
      <h1>Star Wars App</h1>
      <StarWarsCharacterCardList page={3} />
    </div>
  );
}

export default App;
