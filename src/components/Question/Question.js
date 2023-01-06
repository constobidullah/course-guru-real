import Option from '../Option/Option';
import { EyeIcon, ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import './Question.css'
import { useState } from 'react';

const Question = ({ questionProps }) => {
    const { question, options, correctAnswer } = questionProps;
    const [answer, setAnswer] = useState(true)

    return (
        <div className='question'>
            <div className={`question-and-eyeicon`}>
                <div>
                    {
                        answer ? <p>{question}</p> : <p className='flex font-bold'>Correct answer  <ArrowSmallRightIcon  className='h-6 w-6'/> </p>
                    }
                </div>
                <div onClick={() => setAnswer(!answer)}>
                    {
                        answer ? <EyeIcon className="h-6 w-6" /> : <p className='font-bold'>{correctAnswer}</p>
                    }
                </div>
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