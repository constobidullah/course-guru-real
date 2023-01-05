import React from 'react';
import './Option.css';

const Option = ({ option }) => {
    
    return (
        <div className='option'>
            <div className='option-item'>
                <input type="radio" name="" id="" />
                <p>{option}</p>
            </div>
        </div>
    );
};

export default Option;