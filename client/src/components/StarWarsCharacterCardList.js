import { Container, Grid } from "@material-ui/core";
import { gql, useQuery } from "@apollo/client";
import StarWarsCharacterCard from "./StarWarsCharacterCard";
import { Spinner } from "react-bootstrap";

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

function StarWarsCharacterCardList() {
  const { data, error, loading } = useQuery(GET_STAR_WARS_CHARACTERS);

  if (error) return <h1>Error Page</h1>;
  if (loading)
    return (
      <div className="center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );

  const { star_wars_characters } = data;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {star_wars_characters.map((star_wars_character) => {
          return (
            <Grid item xs={12} md={4}>
              <StarWarsCharacterCard character={star_wars_character} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default StarWarsCharacterCardList;
