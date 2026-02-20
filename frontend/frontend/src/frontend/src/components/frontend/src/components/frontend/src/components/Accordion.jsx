import React, { useState } from 'react';

function Accordion() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white shadow-md p-4 rounded mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-semibold"
      >
        Toggle Thesis Chapters
      </button>
      {open && (
        <div className="mt-2">
          <ul className="list-disc ml-5">
            <li>Chapter 1 – Introduction</li>
            <li>Chapter 2 – Literature Review</li>
            <li>Chapter 3 – Methodology</li>
            <li>Chapter 4 – System Design</li>
            <li>Chapter 5 – Implementation</li>
            <li>Chapter 6 – Results & Analysis</li>
            <li>Chapter 7 – Discussion & Impact</li>
            <li>Chapter 8 – Conclusion & Future Work</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Accordion;
