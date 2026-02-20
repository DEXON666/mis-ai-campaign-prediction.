import React from 'react';

function Card({ title, content }) {
  return (
    <div className="bg-white shadow-md p-4 rounded mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card;
