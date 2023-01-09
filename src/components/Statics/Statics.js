import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statics = () => {
    const quizData = useLoaderData();

    return (
        <div>
                <LineChart width={1400} height={500} data={quizData.data}>
                    <Line type="monotone" dataKey="total" stroke='#FD5901'></Line>
                    <YAxis></YAxis>
                    <XAxis dataKey="name" stroke='#0000a0' className='font-semibold'/>
                    <Tooltip></Tooltip>
                    <CartesianGrid></CartesianGrid>
                </LineChart>
        </div>
    );
};

export default Statics;