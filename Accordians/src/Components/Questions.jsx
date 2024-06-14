import React, { useState } from 'react';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
const Question = ({ title, info }) => { 
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <FaArrowDown /> : <FaArrowUp />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </div>
  );
}

export default Question;
