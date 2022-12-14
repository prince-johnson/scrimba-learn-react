import React from 'react';
import { nanoid } from 'nanoid';

const Card = (props) => {
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    const { correct_answer, incorrect_answers, question } = props.data
    let options = [];
    options.push(correct_answer);
    for (let i = 0; i < incorrect_answers.length; i++) {
        options.push(incorrect_answers[i]);
    }
    options = shuffleArray(options);

    const displayOptions = options.map((option, index, arr) => {
        return (
            <div className='option'>
                <input className={`input--radio`} type='radio' value={option} name={`options-${props.id}`} />
                <label htmlFor={`options-${props.id}`}>{option}</label>
            </div>);
    })

    return (
        <div className="wrap">
            <h4>{question}</h4>
            <div className='options--container'>
                {displayOptions}
            </div>
        </div>
    )
};

export default Card;