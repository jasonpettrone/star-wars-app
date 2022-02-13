import { Container, Grid } from "@material-ui/core";
import { Spinner } from "react-bootstrap";
import StarWarsCharacterCard from "./StarWarsCharacterCard";
import { gql } from "@apollo/client";
import useStarWarsCharacters from "../hooks/useStarWarsCharacters";
import { useState } from "react";
import StarWarsErrorPage from "./StarWarsErrorPage";

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

function StarWarsCharacterCardList() {
  const [page, setPage] = useState(1);
  const { pagination_data, star_wars_characters, error, loading } =
    useStarWarsCharacters(GET_STAR_WARS_CHARACTERS, page);

  if (error)
    return <StarWarsErrorPage />
  if (loading)
    return (
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {star_wars_characters.map((star_wars_character) => {
            return (
              <Grid item key={star_wars_character.name} xs={12} md={4}>
                <StarWarsCharacterCard character={star_wars_character} />
              </Grid>
            );
          })}
        </Grid>
        <button
          hidden={page === 1 && star_wars_characters}
          className="btn btn-warning mt-3 mb-3"
          disabled={true}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </button>
        <div className="center-middle">
          <Spinner
            hidden={page !== 1}
            animation="border"
            role="status"
            variant="warning"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </Container>
    );

  const handleLoadMoreClicked = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {star_wars_characters.map((star_wars_character) => {
          return (
            <Grid item key={star_wars_character.name} xs={12} md={4}>
              <StarWarsCharacterCard character={star_wars_character} />
            </Grid>
          );
        })}
      </Grid>
      <button
        hidden={!pagination_data.next}
        onClick={handleLoadMoreClicked}
        className="btn btn-warning mt-3 mb-3"
      >
        Load more
      </button>
    </Container>
  );
}

export default StarWarsCharacterCardList;
