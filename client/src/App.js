import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

const GET_STAR_WARS_CHARACTERS = gql`
  query {
    star_wars_characters {
      name
      height
      mass
      homeworld {
        name
      }
      birth_year
    }
  }
`;

function App() {
  const { data, error, loading } = useQuery(GET_STAR_WARS_CHARACTERS);

  if (error) return <h1>Error Page</h1>;
  if (loading) return <h1>Spinner</h1>;

  const { star_wars_characters } = data;

  return (
    <div className="App">
      {star_wars_characters.map((star_wars_character) => {
        return (
          <ul>
            <li>--------------------------------</li>
            <li>{star_wars_character.name}</li>
            <li>{star_wars_character.height}</li>
            <li>{star_wars_character.mass}</li>
            <li>{star_wars_character.homeworld.name}</li>
            <li>{star_wars_character.birth_year}</li>
            <li>--------------------------------</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
