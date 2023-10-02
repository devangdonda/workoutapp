import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function FitCard(props) {
  const navigate = useNavigate();

  function cardClickHandler() {
    navigate(`/${props.id}`);
  }
  return (
    <Card
    sx={{width: '90%', borderRadius:'15px', height: '224px', boxSizing:'border-box', margin: '20px'}}elevation={3}>
      <CardActionArea sx={{height: 'inherit'}} onClick={cardClickHandler}>
        <CardMedia
        sx={{height: '80%'}}
          component="img"
          image={props.image}
          alt="Chest"
        />
        <CardContent sx={{padding:'5px'}}>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            {props.txt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
