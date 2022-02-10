import { Container, Grid } from "@material-ui/core";
import { gql, useQuery } from "@apollo/client";
import StarWarsCharacterCard from "./StarWarsCharacterCard";
import { Spinner } from "react-bootstrap";

function StarWarsCharacterCardList(props) {

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
  
  const { data, error, loading } = useQuery(GET_STAR_WARS_CHARACTERS, {
    variables: {
      page: props.page
    }
  });

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
  const { results } = star_wars_characters;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {results.map((star_wars_character) => {
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
