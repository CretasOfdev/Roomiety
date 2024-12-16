'use client';

import React, { useState } from 'react';

interface ButtonProps {
  buttonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Home({ buttonClick = () => {} }: ButtonProps) {
  const [clicked, setClicked] = useState(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    buttonClick(event)
    setClicked(true);
  }

  return (
    <div className="p-10">
      <button className="btn btn-primary" onClick={handleClick}>Press Me!</button>
      {clicked && <div role="alert" className="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>The button has been Clicked!</span>
      </div>}

      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
}
