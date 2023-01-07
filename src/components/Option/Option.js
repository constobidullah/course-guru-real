import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Option.css';

const Option = ({ option }) => {

    const notify = () => toast.success('Wow so easy!', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return (
        <div className='option'>
            <div className='option-item'>
                <input onClick={notify} type="radio" name="" id="" />
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <p>{option}</p>
            </div>
        </div>
    );
};

export default Option;