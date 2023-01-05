import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizData from '../QuizData/QuizData';
import './Home.css';

const Home = () => {
    const quizData = useLoaderData();

    return (
        <div className='quiz-data-pass'>
            {
                quizData.data.map(quiz => <QuizData
                    key={quiz.id}
                    quiz={quiz}
                ></QuizData>)
            }
        </div>
    );
};

export default Home;