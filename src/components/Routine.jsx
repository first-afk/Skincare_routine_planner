import React, { useState } from "react";
import { generateRoutine } from "./../js/routinedata";
import { BiSolidToggleLeft, BiSolidToggleRight } from "react-icons/bi";

const Routine = ({ formAnswers }) => {
  const { skinType, routine } = generateRoutine(formAnswers);
  const [setMorning, setEvening] = useState(true);

  const toggle = () => {
    setEvening(!setMorning);
  };

  return (
    <div className="routine-container m-5">
      <div className="justify-evenly p-5 items-center mb-5">
        <h2 className="font-semibold">Your Personalized Skincare Routine</h2>
        <p className="capitalize">Skin Type: {skinType}</p>
      </div>

      <div className="toggle w-full rounded-md h-10 flex justify-center gap-5 items-center font-semibold bg-gray-50">
        <p
          onClick={toggle}
          className={!setMorning ? "cursor-pointer text-gray-400" : null}
        >
          Morning Routine
        </p>
        <span onClick={toggle} className="cursor-pointer ">
          {setMorning ? (
            <BiSolidToggleLeft size="2.5rem" />
          ) : (
            <BiSolidToggleRight size="2.5rem" />
          )}
        </span>
        <p
          onClick={toggle}
          className={setMorning ? "cursor-pointer  text-gray-400" : null}
        >
          Evening Routine
        </p>
      </div>
      {setMorning ? (
        <div className="morning-routine mb-8">
          <table className="min-w-full border-collapse">
            <thead className="bg-slate-50 text-center">
              <tr>
                <th className="py-3 px-4 border-b-2 border-gray-200 w-16">
                  Step
                </th>
                <th className="py-3 px-4 border-b-2 border-gray-200 w-1/3">
                  Product
                </th>
                <th className="py-3 px-4 border-b-2 border-gray-200">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {routine.morning.map((step) => (
                <tr
                  key={step.step}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{step.step}</td>
                  <td className="py-3 px-4 font-medium">{step.product}</td>
                  <td className="py-3 px-4 text-gray-600">
                    {step.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="evening-routine">
          <table className="min-w-full border-collapse">
            <thead className="bg-slate-50 text-center">
              <tr>
                <th className="py-3 px-4 border-b-2 border-gray-200 w-16">
                  Step
                </th>
                <th className="py-3 px-4 border-b-2 border-gray-200 w-1/3">
                  Product
                </th>
                <th className="py-3 px-4 border-b-2 border-gray-200">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {routine.evening.map((step) => (
                <tr
                  key={step.step}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{step.step}</td>
                  <td className="py-3 px-4 font-medium">{step.product}</td>
                  <td className="py-3 px-4 text-gray-600">
                    {step.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Routine;
