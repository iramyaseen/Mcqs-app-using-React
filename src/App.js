import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbars from "./test/Navbars";
import TestList from "./test/TestList";
import data from "./Data/Data";
import Startpage from "./test/Startpage";
import End from "./test/End";
import ReactText from "./test/AllQuizTest";
import Modal from "./test/Modal";
function App() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  console.log("Data", answers, step);
  return (
    <div>
      <Navbars />
      <Routes>
        <Route path="/" element={<TestList />} />
        <Route path="/react" element={<Startpage />} />
        <Route path="/Javascrip" element={<Startpage />} />
        <Route path="/flutter" element={<Startpage />} />
        <Route
          path="/react-test"
          element={<ReactText test={data.react} testName="React" />}
        />
        <Route
          path="/javascript-test"
          element={<ReactText test={data.js} testName="Javascript" />}
        />
        <Route
          path="/flutter-test"
          element={<ReactText test={data.flutter} testName="Flutter" />}
        />
        <Route
          path="/test-end"
          element={
            <End
              totalQuestion={data.react.length}
              onAnswersCheck={() => setShowModal(true)}
            />
          }
        />
      </Routes>
      {step === 3 && <End />}
      {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data='Iram'
      />}
    </div>
  );
}

export default App;
