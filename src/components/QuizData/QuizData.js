import React from 'react';

import './QuizData.css'

const QuizData = ({ quiz }) => {
    const { logo, name } = quiz;
    return (
        <div className='quizdata'>
            <div className='quizdata-show'>
                <img src={logo} alt="" />
                <p>{name}</p>
            </div>
        </div>
    );
};

export default QuizData;