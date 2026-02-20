import React from 'react';
import Card from './components/Card';
import Charts from './components/Charts';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Master 2 MIS Thesis: Marketing Campaign Prediction</h1>
      <Card title="Dataset Overview" content="View the simulated marketing dataset and features." />
      <Charts />
      <Accordion />
    </div>
  );
}

export default App;
