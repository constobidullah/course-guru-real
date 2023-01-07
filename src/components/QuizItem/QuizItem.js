import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizItem = () => {
    const quizitems = useLoaderData();

    const { name, questions } = quizitems.data;

    return (
        <div>
            <h1 className='text-4xl font-bold mt-28 text-center mb-12'>Quiz of {name} </h1>
            <div className='grid md:lg:grid-cols-2 lg:grid-cols-2 gap-14 md:mx-44 sm:grid-cols-1 gap-14'>
                {
                    questions.map(questionProps => <Question
                        questionProps={questionProps}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default QuizItem;