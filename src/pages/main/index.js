import React, { useEffect, useState } from 'react';

import SimpleCard from '../../components/card';
import Questoes from '../../models/Questoes';

export default function Main() {
    const [questoes, setQuestoes] = useState([]);
    const [choices, setChoices] = useState({});

    useEffect(() => {
        setQuestoes(Questoes);
    }, []);

    function handleChange (event) {
        setChoices({...choices, [event.target.name]: event.target.value});
    };

    function printValues (values) {
      console.log(values);
    }

    return (
        <div>
            <SimpleCard 
                title="Em cada uma das 25 questões a seguir, escolha uma alternativa (A, B, C ou D) e marque-a no espaço correspondente."
                handleChange={handleChange}
                questoes={questoes}
                onClick={() => printValues(choices)}
            />
        </div>
    );
}