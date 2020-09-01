import React from 'react';

import { Grid, makeStyles, Container, Paper, Typography } from '@material-ui/core';

import ResultsCard from '../../components/results-card';
import Tubarao from '../../assets/images/tubarao.jpg';
import Lobo from '../../assets/images/lobo.jpg';
import Aguia from '../../assets/images/aguia.jpg';
import Gato from '../../assets/images/gato.jpg';
import Cerebro from '../../assets/images/cerebro-direito.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    cerebroDireito: {
        position: 'relative',
        zIndex: 1,
        '&::before': {
            content: '""',
            position: 'absolute',
            zIndex: '-1',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: 'url('+Cerebro+') center center',
            backgroundSize: 'cover',
            opacity: '0.1',
        }
    },
    
    cerebroEsquerdo: {
        position: 'relative',
        zIndex: 1,
        '&::before': {
            content: '""',
            position: 'absolute',
            zIndex: '-1',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: 'url('+Cerebro+') center center',
            transform: 'scaleX(-1)',
            backgroundSize: 'cover',
            opacity: '0.1',
        }
    },
  }));

export default function Results() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
            <Typography variant="h2" className={classes.root}>Resultados</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={6} sm={6}>
                        <Paper className={[classes.paper, classes.cerebroEsquerdo]}>
                            <Typography variant="button" paragraph>Lado Esquerdo do Cérebro</Typography>
                            <Typography variant="subtitle2" paragraph>Emocional:</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Paper className={[classes.paper, classes.cerebroDireito]}>
                            <Typography variant="button" paragraph>Lado Direito do Cérebro</Typography>
                            <Typography variant="subtitle2" paragraph>Racional:</Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={3}>
                        <ResultsCard 
                            title="Tubarão" 
                            image={Tubarao}
                            imageTitle="tubarão"
                            comportamento="Fazer rápido"
                            textoComportamento="Senso de urgência. Ação iniciativa. Impulsivo, prático. Vencer desafios. Aqui e agora. Auto suficiente. Não gosta de delegar poder"
                            pontoForte="Ação"
                            textoPontoForte="Fazer que ocorra. Parar com burocracia. Motivação"
                            pontosMelhoria="Ação"
                            textoPontosMelhoria="Socialmente um desastre. Faz do modo mais fácil. Relacionamento complicado"
                            textoMotivacoes="Liberdade para agir individualmente. Controle das próprias atividades. Resolver os problemas do seu jeito. Competição individual. Variedade de atividades. Não ter que repetirtarefas"
                            textoValores="Resultados"
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <ResultsCard 
                            title="Lobo"
                            image={Lobo}
                            imageTitle="lobo"
                            comportamento=""
                            textoComportamento=""
                            pontoForte=""
                            textoPontoForte=""
                            pontosMelhoria=""
                            textoPontosMelhoria=""
                            textoMotivacoes=""
                            textoValores=""
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <ResultsCard 
                            title="Águia"
                            image={Aguia}
                            imageTitle="Águia"
                            comportamento=""
                            textoComportamento=""
                            pontoForte=""
                            textoPontoForte=""
                            pontosMelhoria=""
                            textoPontosMelhoria=""
                            textoMotivacoes=""
                            textoValores=""
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <ResultsCard 
                            title="Gato"
                            image={Gato}
                            imageTitle="gato"
                            comportamento=""
                            textoComportamento=""
                            pontoForte=""
                            textoPontoForte=""
                            pontosMelhoria=""
                            textoPontosMelhoria=""
                            textoMotivacoes=""
                            textoValores=""
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}