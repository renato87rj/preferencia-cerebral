import React, { useContext, useEffect, useState } from 'react';

import { Grid, makeStyles, Container, Paper, Typography } from '@material-ui/core';

import ResultsCard from '../../components/results-card';
import Tubarao from '../../assets/images/tubarao.jpg';
import Lobo from '../../assets/images/lobo.jpg';
import Aguia from '../../assets/images/aguia.jpg';
import Gato from '../../assets/images/gato.jpg';
import Cerebro from '../../assets/images/cerebro-direito.jpg'
import { ResultsContext } from '../../context/results-context';

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
            background: 'url(' + Cerebro + ') center center',
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
            background: 'url(' + Cerebro + ') center center',
            transform: 'scaleX(-1)',
            backgroundSize: 'cover',
            opacity: '0.1',
        }
    },
}));

export default function Results() {
    const classes = useStyles();
    const resultsContext = useContext(ResultsContext);
    const [escolhaA, setEscolhaA] = useState({valor: 0, resultado: 0})
    const [escolhaB, setEscolhaB] = useState({valor: 0, resultado: 0})
    const [escolhaC, setEscolhaC] = useState({valor: 0, resultado: 0})
    const [escolhaD, setEscolhaD] = useState({valor: 0, resultado: 0})

    useEffect(() => {
        const totalValues = Object.values(resultsContext.values);

        setEscolhaA({
            valor: totalValues.filter(value => {
                return value === 'A'
            }).length,
            resultado: escolhaA['valor'] * 4,
        });

        console.log(totalValues.filter(value => {
            return value === 'A'
        }).length);
    }, [])

    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <Typography variant="h2" className={classes.root}>Resultados</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={6} sm={6}>
                        <Paper className={[classes.paper, classes.cerebroEsquerdo].join(' ')}>
                            <Typography variant="button" paragraph>Lado Esquerdo do Cérebro</Typography>
                            <Typography variant="subtitle2" paragraph>Emocional:</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Paper className={[classes.paper, classes.cerebroDireito].join(' ')}>
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
                            comportamento="Fazer certo"
                            textoComportamento="Detalhista,
                            Organizado,
                            Estrategista,
                            Busca do conhecimento,
                            Pontual,
                            Conservador,
                            Previsível"
                            pontoForte="Organização"
                            textoPontoForte="Passado, presente e futuro,
                            Consistência, conformidade e qualidade,
                            Lealdade e segurança,
                            Regras e responsabilidade"
                            pontosMelhoria="Organização"
                            textoPontosMelhoria="Dificuldades de se adaptar ás mudanças,
                            Pode impedir o progresso,
                            Detalhista, estruturado e demasiadamente sistematizado"
                            textoMotivacoes="Certeza, compreensão exata de quais são as regras,
                            Conhecimento específico do trabalho,
                            Ausência de riscos e erros,
                            Ver produto acabado, meio e fim"
                            textoValores="Ordem e controle"
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <ResultsCard
                            title="Águia"
                            image={Aguia}
                            imageTitle="Águia"
                            comportamento="Fazer diferente"
                            textoComportamento="Criativo, Intuitivo, Foco no futuro, Distraído, Curioso, Informal/Casual, Flexível"
                            pontoForte="Idealização"
                            textoPontoForte="Provoca mudanças, radicais, Antecipar o futuro, Criatividade"
                            pontosMelhoria="Idealização"
                            textoPontosMelhoria="Falta de atenção para o aqui e agora, Impaciência e rebeldia, Defender o novo pelo novo"
                            textoMotivacoes="Liberdade de expressão,
                            Ausência de controles rígidos,
                            Ambiente de trabalho descentralizado,
                            Liberdade para fazer exceções,
                            Oportunidade para delegar tarefas e detalhes."
                            textoValores="Criatividade e Liberdade (inspira idéias)."
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <ResultsCard
                            title="Gato"
                            image={Gato}
                            imageTitle="gato"
                            comportamento="Fazer junto"
                            textoComportamento="Sensível,
                            Relacionamentos,
                            Time,
                            Tradicionalistas,
                            Contribuição,
                            Busca Harmonia,
                            Delega autoridade"
                            pontoForte="Comunicação"
                            textoPontoForte="Manter comunicação
                            harmoniosa,
                            Desenvolver e manter
                            a cultura empresarial,
                            Comunicação aberta"
                            pontosMelhoria="Comunicação"
                            textoPontosMelhoria="Esconder conflitos,
                            Felicidade acima dos
                            resultados,
                            Manipulação através
                            dos sentimentos,"
                            textoMotivacoes="Segurança,
                            Aceitação social,
                            Construir o consenso,
                            Reconhecimento da
                            equipe,
                            Supervisão
                            compreensiva,
                            Ambiente harmônico,
                            Trabalho em grupo"
                            textoValores="Felicidade e igualdade (cultura da empresa – pensa nos outros)."
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}