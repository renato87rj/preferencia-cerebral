import React from 'react';
import {Card, CardContent, Button, Icon, Typography, makeStyles} from '@material-ui/core';
import RadioForm from '../radioform';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: '75%',
    boxShadow: '5px 10px 18px #888888',
    marginTop: 15,
  },
  card: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18
  },
  buttonSend: {
    padding: '8px',
    textAlign: 'end'
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  if (props.redirect) {
    return <Redirect to="/resultados" />
  }
  return (

    <div className={classes.card}>
      <Card className={classes.root}>
      <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
            {props.title}
          </Typography>
          <RadioForm questoes={props.questoes} onChange={props.handleChange}/>
      </CardContent>
      <div className={classes.buttonSend}>
        <Button 
            variant="contained" 
            color="primary"
            endIcon={<Icon>send</Icon>}
            onClick={() => props.onClick()}
        >
            Enviar
        </Button>
      </div>
      </Card>
    </div>
  );
}
