import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import './styles.css';

export default function RadioForm(props) {
    return (
    <div className="questions-group">
        {props.questoes.map(pergunta => (
            <FormControl component="fieldset" key={pergunta.name}>
            <FormLabel component="legend">{pergunta.label}</FormLabel>
            <RadioGroup aria-label="gender" name={pergunta.name} onChange={props.onChange}>
                {pergunta.questions.map((question, index) => 
                    <FormControlLabel key={index} value={question.value} control={<Radio />} label={question.question} />
                )}
            </RadioGroup>
            </FormControl>
        ))}
    </div>
  );
}
