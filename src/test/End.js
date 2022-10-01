import React, { useState } from "react";
const End = ({ answerd, tests }) => {
  const result = answerd.length;
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Your results</h3>
          <p>
            {answerd.length} of {tests}
          </p>
          <p>
            <strong>{Math.floor((result / tests) * 100)}%</strong>
          </p>
          <p>
            <strong>Your time:</strong> {localStorage.getItem("time")}
          </p>
          <button
            className="button is-info mr-2"
          >
            Check your answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default End;
