import React, { useEffect, useState, useContext } from 'react';

import SimpleCard from '../../components/card';
import Questoes from '../../models/Questoes';
import { ResultsContext } from '../../context/results-context';

export default function Main() {
    const [questoes, setQuestoes] = useState([]);
    const [choices, setChoices] = useState({});
    const [redirect, setRedirect] = useState(false);
    const resultContext = useContext(ResultsContext);

    useEffect(() => {
        setQuestoes(Questoes);

        return () => {
            
        }
    }, []);

    function handleChange (event) {
        setChoices({...choices, [event.target.name]: event.target.value});
    };

    function redirectToResults () {
        resultContext.setValues(choices);
        setRedirect(true);
    }

    return (
        <SimpleCard 
            title="Em cada uma das 25 questões a seguir, escolha uma alternativa (A, B, C ou D) e marque-a no espaço correspondente."
            handleChange={handleChange}
            questoes={questoes}
            onClick={() => redirectToResults()}
            redirect={redirect}
        />
    );
}