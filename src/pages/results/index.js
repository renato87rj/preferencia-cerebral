import React from 'react';

import ResultsCard from '../../components/results-card';
import { Grid, makeStyles, Container } from '@material-ui/core';

import Tubarao from '../../assets/images/tubarao.jpg';
import Lobo from '../../assets/images/lobo.jpg';
import Aguia from '../../assets/images/aguia.jpg';
import Gato from '../../assets/images/gato.jpg';

const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
  }));

export default function Results() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={3}>
                        <ResultsCard 
                            title="Tubarão" 
                            image={Tubarao}
                            imageTitle="tubarão"
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <ResultsCard 
                            title="Lobo"
                            image={Lobo}
                            imageTitle="lobo"
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <ResultsCard 
                            title="Águia"
                            image={Aguia}
                            imageTitle="Águia"
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <ResultsCard 
                            title="Gato"
                            image={Gato}
                            imageTitle="gato"
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}