import React from "react";
import { useState } from "react";
import "./App.css";
import { gql } from "@apollo/client";
import useStarWarsCharacters from "./hooks/useStarWarsCharacters";
import { Spinner } from "react-bootstrap";
import StarWarsCharacterCardList from "./components/StarWarsCharacterCardList";
import header from "./images/StarWarsAppHeader.png";

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
  const { pagination_data, star_wars_characters, error, loading } =
    useStarWarsCharacters(GET_STAR_WARS_CHARACTERS, page);

  if (error) return <h1>Error Page</h1>;
  if (loading)
    return (
        <div className="App">
          <img className="center-image mb-5 mt-5" src={header} alt="Star Wars App" />

          <StarWarsCharacterCardList
            star_wars_characters={star_wars_characters}
          />
          <button
            hidden={page === 1 && star_wars_characters}
            className="btn btn-warning mt-3 mb-3"
            disabled={true}
          >
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </button>
          <div className="center-spinner">
            <Spinner hidden={page !== 1} animation="border" role="status" variant="warning">
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
      <img className="center-image mb-5 mt-5" src={header} alt="Star Wars App" />
      <StarWarsCharacterCardList star_wars_characters={star_wars_characters} />
      <button
        hidden={!pagination_data.next}
        onClick={handleLoadMoreClicked}
        className="btn btn-warning mt-3 mb-3"
      >
        Load more
      </button>
    </div>
  );
}

export default App;
