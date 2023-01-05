import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizItem = () => {
    const quizitems = useLoaderData();
    console.log(quizitems)
    return (
        <div>
            <h2>Quiz item </h2>
        </div>
    );
};

export default QuizItem;