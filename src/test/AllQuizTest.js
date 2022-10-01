import { useState } from "react";
import Timer from "./Timer";
import End from "./End";

import useCountdown from "./USecontactdown";
const AllQuizTest = ({ test, testName }) => {
  const totalQuestion = test.length;
  const [answersSelected, setAnswersSelected] = useState([]);
  const onChange = (index) => (e) => {
    console.log(index);
    let array = [...answersSelected];
    array[index] = e.target.value;
    setAnswersSelected(array);
  };
  const [step, setStep] = useState(0);
  const [answersCorrect, setAnswersCorrect] = useState([]);
  const endTime = new Date().getTime() + 60000 * 3; // 2 minutes
  const [timeLeft, setEndTime] = useCountdown(endTime);
  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;
  const mint = 2 - minutes;
  const sec = 59 - seconds;
  return (
    <>
      {step === 0 ? (
        <div className="main">
          <div className="heading">
            <h1>Traditional {testName} Test</h1>
            <p>
              <span>
                Click on Flags option to pin the question to UNSOLVE chaet
              </span>
            </p>
          </div>
          <div className="timer_and_question">
            <div className="question">
              <>
                {test.map((name, index) => (
                  <div className="first_quest" key={index}>
                    <div className="quest_div">
                      <div className="one">
                        <span>{name.id + "."}</span>
                      </div>
                      <div className="quest_one">{name.question}</div>
                    </div>

                    <div className="options">
                      {name.choices.map((option) => (
                        <div key={option}>
                          <div className="form-box">
                            <label key={name.id}>
                              <input
                                name={name.answer}
                                type="radio"
                                value={option}
                                onChange={onChange(index)}
                              />
                              <span className="circle"></span>

                              <p>{option}</p>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </>
              <button
                className="endBtn"
                onClick={() => {
                  setStep(step + 1);
                  let correct = [];
                  answersSelected.map((answer, index) => {
                    let filtered = test.filter(
                      (question) => question.id === index + 1
                    );

                    if (filtered[0].answer === answer) {
                      correct.push(answer);
                    } else {
                      console.log("");
                    }
                  });
                  localStorage.setItem("myData", [...correct]);
                  localStorage.setItem("time", [
                    mint + "m" + " ",
                    " " + sec + "s",
                  ]);
                  setAnswersCorrect(correct);
                }}
              >
                End
              </button>
            </div>
            <Timer />
          </div>
        </div>
      ) : null}
      {step === 1 ? (
        <End answerd={answersCorrect} tests={totalQuestion} />
      ) : null}
    </>
  );
};

export default AllQuizTest;
