import React from "react";
import { useState } from "react";
import "./App.css";
import { gql } from "@apollo/client";
import useStarWarsCharacters from "./hooks/useStarWarsCharacters";
import { Spinner } from "react-bootstrap";
import StarWarsCharacterCardList from "./components/StarWarsCharacterCardList";

const GET_STAR_WARS_CHARACTERS = gql`
  query Query($page: ID) {
    star_wars_characters(page: $page) {
      count
      next
      previous
      results {
        name
        homeworld {
          name
        }
        height
        mass
        birth_year
      }
    }
  }
`;

function App() {
  const [page, setPage] = useState(1);
  const { pagination_data, star_wars_characters, error, loading } = useStarWarsCharacters(
    GET_STAR_WARS_CHARACTERS,
    page
  );

  if (error) return <h1>Error Page</h1>;
  if (loading)
    return (
      <div className="App">
        <h1>Star Wars App</h1>
        <StarWarsCharacterCardList
          star_wars_characters={star_wars_characters}
        />
        <button
          hidden={(page === 1 && star_wars_characters)}
          className="btn btn-primary mt-3 mb-3"
          disabled={true}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </button>
        <div className="center">
          <Spinner hidden={page !== 1}
            animation="border"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </div>
    );

  const handleLoadMoreClicked = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="App">
      <h1>Star Wars App</h1>
      <StarWarsCharacterCardList
        star_wars_characters={star_wars_characters}
      />
      <button
        hidden={!(pagination_data.next)}
        onClick={handleLoadMoreClicked}
        className="btn btn-primary mt-3 mb-3"
      >
        Load more
      </button>
    </div>
  );
}

export default App;
