import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({
  nameImg,
  imgUrl,
  titleImg,
  title,
  launcheDay,
  wikiLink,
}) {
  const classes = useStyles();

  const cardStyle = {
    backgroundColor: '#fff',
  };

  return (
    <Card className={classes.root} style={cardStyle}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={nameImg}
          height="140"
          image={imgUrl}
          title={titleImg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {launcheDay}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={wikiLink}>
          <Button size="small" color="primary">
            Learn more
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
