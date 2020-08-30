import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RadioForm from '../RadioForm/RadioForm';
import { Icon } from '@material-ui/core';

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
    textAlign: 'end'
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <div className={classes.card}>
        <Card className={classes.root}>
        <CardContent>
            <Typography variant="h5" component="h2" className={classes.title}>
                Em cada uma das 25 questões a seguir, escolha uma alternativa (A, B, C ou D) e marque-a no espaço correspondente.
            </Typography>
            <RadioForm />
        </CardContent>
        <CardActions className={classes.buttonSend}>
            <Button variant="contained" color="primary" endIcon={<Icon>send</Icon>}>Enviar</Button>
        </CardActions>
        </Card>
    </div>
  );
}