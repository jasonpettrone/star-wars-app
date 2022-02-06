import React from "react";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";

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
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {star_wars_characters.map((star_wars_character) => {
            return (
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {star_wars_character.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Height: {star_wars_character.height}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Mass: {star_wars_character.mass}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Origin: {star_wars_character.homeworld.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Birth year: {star_wars_character.birth_year}
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
