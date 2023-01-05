import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ quiz }) => {
    console.log(quiz)
    return (
        <div>
            <LineChart width={500} height={500} data={quiz}>
                <Line type="monotone" dataKey={`${quiz.total}`} stroke="#82ca9d" />
                <XAxis dataKey={quiz.name} />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Chart;