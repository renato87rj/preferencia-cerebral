import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    questionsGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: '15px 0 15px 15px',
    },
    legend: {
        fontWeight: 'bold',
        color: '#333',
        paddingTop: '15px'
    }
});

export default function RadioForm(props) {
    const classes = useStyles();
    return (
    <div className={classes.questionsGroup}>
        {props.questoes.map(pergunta => (
            <FormControl component="fieldset" key={pergunta.name}>
            <FormLabel component="legend" className={classes.legend}>{pergunta.label}</FormLabel>
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
