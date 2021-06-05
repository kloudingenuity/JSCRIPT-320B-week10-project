import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@material-ui/core';
import { useHistory } from 'react-router';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
    cardRoot: {
      maxWidth: 300
    },
    media: {
      height: 140,
      paddingTop: '56.25%', // 16:9
    },
    h2: {
      margin: "inherit"
    },
    details: {
      display: "flex",
      flexDirection: "column",
      width:"100%"
    },
    content: {
      flex: "1 0 auto",
      height: "150px"
    },
    cover: {
      width: 800
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    playIcon: {
      height: 38,
      width: 38
    }
}));

RecipeCard.propTypes = {
  card: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
      }).isRequired
}

export default function RecipeCard(props) {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);


  const onCardClick = (card) => {
      history.push(`/recipelist/${card.query}`);
  }

  return (
      <Card className={classes.cardRoot}> 
          <CardActionArea onClick={() => onCardClick(props.card)}>
            {loading ? (
              <Skeleton animation="wave" width="300px" height="140" variant="rect" className={classes.media} />
            ) : (
              <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={props.card.image}
                  title={props.card.title} />
              )}
                        
              <CardContent>
                {loading ? (
                  <React.Fragment>
                    <Skeleton animation="wave" height={10}/>
                  </React.Fragment>
                  ) : (
                  <Typography gutterBottom variant="h6" component="h6">
                      {props.card.title}
                  </Typography>
                )}
              </CardContent>    
          </CardActionArea>       
      </Card>
  )
}
