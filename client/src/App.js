import React from "react";
import "./App.css";
import StarWarsCharacterCardList from "./components/StarWarsCharacterCardList";
import header from "./images/StarWarsAppHeader.png";

function App() {

  return (
    <div className="App">
      <img
        className="center-image mb-5 mt-5"
        src={header}
        alt="Star Wars App"
      />
      <StarWarsCharacterCardList />
    </div>
  );
}

export default App;
