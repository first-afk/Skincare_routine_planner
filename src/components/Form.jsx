import { useState } from "react";
import "./../App.css";
import Routine from "./Routine";

function Form({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answeridx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState({ answers: {} });
  const [showResult, setShowResult] = useState(false);

  const { id, question, options } = questions[currentQuestion];

  const onAnswerClick = (option, index) => {
    setAnswerIdx(index);
    if (option.value == options[index].value) {
      setAnswer(option.value);
    }
  };

  const onClickNext = () => {
    setAnswerIdx(null);
    setResult((prev) => {
      const newResult = {
        ...prev,
        answers: {
          ...prev.answers,
          [id]: answer,
        },
      };
      // console.log(newResult);
      return newResult;
    });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };

  const onTryClick = () => {
    setResult({ answers: {} });
    setShowResult(false);
  };
  return (
    <>
      <div className="mx-auto mt-20 pt-20">
        <div className="sm:mx-10 p-5 flex flex-row justify-between items-start">
          <h2 className="text-[1.8em] sm:w-3/5 capitalize mb-5 md:mb-0 font-semibold leading-tight">
            Want to know your skintype? Take the survey!
          </h2>

          <button className="hidden md:block  uppercase w-48 md:w-60 text-2xl border-b-2 border-[#363636] text-center">
            read the journal
          </button>
        </div>
        {!showResult ? (
          <div className="small-formcontainer text-lg p-5">
            <div className="question">
              <h5 className="text-2xl font-bold">{question}</h5>
              <div>
                {options.map((option, index) => {
                  return (
                    <div
                      onClick={() => onAnswerClick(option, index)}
                      key={option.id}
                    >
                      <label className="flex gap-3 items-center font-light capitalize">
                        <input
                          type="radio"
                          name={`question-${id}`}
                          checked={answeridx === index}
                          id={option.id}
                          value={option.value}
                          onChange={() => {}}
                          className="appearance-none h-4 w-4 border border-gray-500 rounded-md checked:bg-[#363636] focus:outline-bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-[#363636]"
                        />
                        {option.value}
                      </label>
                    </div>
                  );
                })}
              </div>
              <div className="footer -mt-8">
                <button
                  className="btn"
                  onClick={onClickNext}
                  disabled={answeridx === null}
                >
                  {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </div>
            <div className="-mt-8">
              <span className="active-queston font-black text-sm ">
                {currentQuestion + 1}
              </span>
              <span className="total-question font-black text-sm text-gray-400">
                /{questions.length}
              </span>
            </div>
          </div>
        ) : (
          <div className="form-container text-center">
            <div className="small-formcontainer text-lg">
              <Routine formAnswers={result.answers} />
              {/* {Object.entries(result.answers).map(([key, value]) => {
              return (
                <p key={key}>
                  {key}: {value}
                </p>
              );
            })} */}
              <button className="btn" onClick={onTryClick}>
                Try again
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Form;
