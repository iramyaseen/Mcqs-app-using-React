import React from "react";
import { NavLink } from "react-router-dom";
import End from "./End";
const TestList = () => {
  return (
    <div className="card ">
      <h1>Welcome to Dashboard</h1>
      <div className="card2">
        <div>
          <NavLink
            to="/react"
            style={({ isActive }) => {
              return {
                color: isActive ? "blue" : "black",
              };
            }}
          >
            <p>React</p>
          </NavLink>

          <NavLink to="test-end">
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/Javascrip"
            style={({ isActive }) => {
              return {
                color: isActive ? "blue" : "black",
              };
            }}
          >
            <p>Javascript</p>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/flutter"
            style={({ isActive }) => {
              return {
                color: isActive ? "blue" : "black",
              };
            }}
          >
            <p>Flutter</p>
          </NavLink>

          <NavLink
            to="/js-test"
            style={({ isActive }) => {
              return {
                color: isActive ? "blue" : "black",
              };
            }}
          ></NavLink>

          <NavLink
            to="/remarks"
            style={({ isActive }) => {
              return {
                color: isActive ? "blue" : "black",
              };
            }}
          ></NavLink>
        </div>
      </div>
    </div>
  );
};

export default TestList;
