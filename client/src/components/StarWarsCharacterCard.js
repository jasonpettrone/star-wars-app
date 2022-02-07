import { Card, CardActions, CardContent, Typography} from "@material-ui/core";

function StarWarsCharacterCard(props) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.character.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Height: {props.character.height}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Mass: {props.character.mass}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Origin: {props.character.homeworld.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Birth year: {props.character.birth_year}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default StarWarsCharacterCard;
