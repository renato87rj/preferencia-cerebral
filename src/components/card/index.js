import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import RadioForm from '../radioform';

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
                href="/resultados"
            >
                Enviar
            </Button>
        </div>
        </Card>
    </div>
  );
}
