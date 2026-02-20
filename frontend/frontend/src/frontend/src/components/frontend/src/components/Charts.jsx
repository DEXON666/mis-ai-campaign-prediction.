import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// Example data
const data = [
  { name: 'Campaign 1', success: 75 },
  { name: 'Campaign 2', success: 60 },
  { name: 'Campaign 3', success: 90 },
];

function Charts() {
  return (
    <div className="bg-white shadow-md p-4 rounded mb-4">
      <h2 className="text-xl font-semibold mb-2">Campaign Success Prediction</h2>
      <LineChart width={400} height={200} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="success" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default Charts;
