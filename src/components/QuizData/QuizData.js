import { Link } from 'react-router-dom';

import './QuizData.css'

const QuizData = ({ quiz }) => {
    const { id, logo, name, total } = quiz;

    return (
        <div className='quizdata'>
            <div className='quiz-show-container'>

                <div className='quizdata-show'>
                    <img src={logo} alt="" />
                </div>

                <div>
                    <p className='text-3xl text-left font-bold text-slate-700'>{name}</p>
                    <p className='text-2xl text-left font-bold text-slate-700'>Total quiz are {total}</p>
                </div>

            </div>
            <div className='practice-button w-full rounded-md'>
                <Link to={`/home${id}`}>
                    <button className='p-1 font-bold text-2xl'>Start practice</button>
                </Link>
            </div>
        </div>
    );
};

export default QuizData;