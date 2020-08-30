import React, {useState, useEffect} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Questoes from '../../models/Questoes';
import { Button } from '@material-ui/core';

import './styles.css';

export default function RadioForm() {
    const [questoes, setQuestoes] = useState([]);
    const [choices, setChoices] = useState({});

    useEffect(() => {
        setQuestoes(Questoes);
    }, []);
  
    function handleChange (event) {
        setChoices({...choices, [event.target.name]: event.target.value});
        
        console.log(choices);
    };

    function printValues(values) {
        console.log(values);
    }

    return (
    <div className="questions-group">
        {questoes.map(pergunta => (
            <FormControl component="fieldset" key={pergunta.name}>
            <FormLabel component="legend">{pergunta.label}</FormLabel>
            <RadioGroup aria-label="gender" name={pergunta.name} onChange={handleChange}>
                {pergunta.questions.map((question, index) => 
                    <FormControlLabel key={index} value={question.value} control={<Radio />} label={question.question} />
                )}
            </RadioGroup>
            </FormControl>
        ))}
        <Button size="small" onClick={() => printValues(choices)}>Ver</Button>
    </div>
  );
}
