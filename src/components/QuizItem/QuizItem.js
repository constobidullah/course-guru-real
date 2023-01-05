import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizItem = () => {
    const quizitems = useLoaderData();
    
    const {name, questions} = quizitems.data;
    
    return (
        <div>
            <h1 className='text-4xl font-bold mt-28'>Quiz name {name} </h1>
            {
                questions.map(questionProps => <Question
                    questionProps={questionProps}
                ></Question>)
            }
        </div>
    );
};

export default QuizItem;