import React, { useState } from 'react';
import { 
    makeStyles, 
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Avatar,
    IconButton,
    Typography, 
} from '@material-ui/core';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#333',
    color: '#fff'
  },
  title: {
    fontSize: 22
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 14
  }
}));

export default function ResultsCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              0%
            </Avatar>
        }
        title={
            <span className={classes.title}>{props.title}</span>
        }
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.imageTitle}
      />
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        Ver descrição
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Comportamentos: <span className={classes.textBold}>{props.comportamento}</span></Typography>
          <Typography paragraph>
            {props.textoComportamento}
          </Typography>
          <Typography paragraph>Ponto Forte: <span className={classes.textBold}>{props.pontoForte}</span></Typography>
          <Typography paragraph>
            {props.textoPontoForte}
          </Typography>
          <Typography paragraph>Pontos de Melhoria: <span className={classes.textBold}>{props.pontosMelhoria}</span></Typography>
          <Typography paragraph>
            {props.textoPontosMelhoria}
          </Typography>
          <Typography paragraph>Motivações:</Typography>
          <Typography paragraph>
            {props.textoMotivacoes}
          </Typography>
          <Typography paragraph>Valores que movem:</Typography>
          <Typography paragraph>
            {props.textoValores}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
