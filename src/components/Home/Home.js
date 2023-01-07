import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizData from '../QuizData/QuizData';
import './Home.css';

const Home = () => {
    const quizData = useLoaderData()

    return (
        <div>
            <div className='quiz'>
                <div className='banner-text'>
                    <h2 className='text-2xl font-bold font-serif text-orange-500 text-left'>Course guru actual coding online platform </h2>
                    <div className='text-3xl font-extralight font-serif text-left text-slate-100'>
                        <p>This platform wish</p>
                        <p>all student properly maintain and teaching coding.</p>
                        <p>Our seccess story raiting less then 0. but Hopefully, I believe our dadicated are successfully on day </p>
                    </div>
                </div>
            </div>
            <div className='quiz-data-pass m-24 lg:grid grid-cols-4 gap-7'>
                {
                    quizData.data.map(quiz => <QuizData
                        key={quiz.id}
                        quiz={quiz}
                    ></QuizData>)
                }
            </div>
        </div>
    );
};

export default Home;