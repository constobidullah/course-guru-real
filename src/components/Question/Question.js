import React, { useState } from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import './Question.css'

const Question = ({ questionProps }) => {
    const { question, options, correctAnswer } = questionProps;
    
    const [correct, setCorrect] = useState(false);

    return (
        <div className='question'>
            <div className='question-and-eyeicon'>
                <p>{question}</p>
                <EyeIcon className="h-6 w-6" />
            </div>
            {
                options.map(option => <Option
                    option={option}
                ></Option>)
            }
        </div>
    );
};

export default Question;