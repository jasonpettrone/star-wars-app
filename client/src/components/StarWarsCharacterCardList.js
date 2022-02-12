import { Container, Grid } from "@material-ui/core";
import StarWarsCharacterCard from "./StarWarsCharacterCard";

function StarWarsCharacterCardList(props) {

  return (
    <Container hidden={props.hidden} maxWidth="lg">
      <Grid container spacing={2}>
        {(props.star_wars_characters).map((star_wars_character) => {
          return (
            <Grid item key={star_wars_character.name} xs={12} md={4}>
              <StarWarsCharacterCard character={star_wars_character} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default StarWarsCharacterCardList;
