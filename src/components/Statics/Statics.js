import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';


const Statics = () => {
    const quizData = useLoaderData();

    return (
        <div>
            {
                quizData.data.map(quiz => <Chart
                    key={quiz.id}
                    quiz={quiz}
                ></Chart>)
            }
        </div>
    );
};

export default Statics;