import React from "react";
import { useNavigate } from "react-router-dom";


const Startpage = (props) => {
  const navigate = useNavigate();
  const someEventHandler = () => {
    navigate("/react-test");
  };
  const jsEventHandler = () => {
    navigate("/javascript-test");
  };
  const fluterrEnvetHandler = () => {
    navigate("/flutter-test");
  };
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Start the quiz</h1>
          <p>Good luck!</p>
          {window.location.pathname === "/react" ? (
            <button
              className="button"
              onClick={someEventHandler}
            >
              Start
            </button>
          ) : (
            console.log("eee")
          )}

          {window.location.pathname === "/Javascrip" ? (
            <button
              className="button"
              onClick={jsEventHandler}
            >
              Start
            </button>
          ) : (
            console.log("eee")
          )}

          {window.location.pathname === "/flutter" ? (
            <button
              className="button"
              onClick={fluterrEnvetHandler}
            >
              Start
            </button>
          ) : (
            console.log("eee")
          )}
        </div>
      </div>
    </div>
  );
};

export default Startpage;
