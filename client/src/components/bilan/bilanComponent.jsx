import React, { useState } from "react";
import StepperComponent from "./stepperComponent";
import QuestionComponent from "./questionComponent";
import WelcomeBilanComponent from "./welcomeBilanComponent";

export default function BilanComponent(props) {
  let userName = props.userName || "";
  let welcomePageContent = props.welcomeContent || {
    title: "",
    description: "",
    image: ""
  };
  let questionsList = props.questionsList || [];

  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(null);
  

  function start() {
    if (currentQuestionIndex) {
      setcurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setcurrentQuestionIndex(0);
    }
  }

  function nextQuestion() {
    if (currentQuestionIndex + 1 < questionsList.length) {
      setcurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Terminer")
    }
  }

  function previousQuestion() {
    if (currentQuestionIndex > 0) {
      setcurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }

  return (
    <div className="flex flex-col bg-slate-100">
      <div className="flex justify-center items-center self-center px-16 py-12 mt-20 w-full bg-white shadow-2xl max-w-[1218px] rounded-[80px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col my-7 max-w-full max-md:mb-10">
          {/* afficher stepper when the review is started */}
          {currentQuestionIndex != null && (
            <StepperComponent
              key="questionStepper"
              nbEtat={questionsList.length}
              currentQuestion={currentQuestionIndex + 1}
            />
          )}

          <div className="px-px mt-2 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow leading-10 max-md:mt-10 max-md:max-w-full text-lg text-zinc-400">
                  {currentQuestionIndex == null ? (
                    <>
                      <span>Bienvenue {userName} !</span>
                      <WelcomeBilanComponent
                        welcomeContent={welcomePageContent}
                      />
                      <button
                        className="justify-center items-center self-center p-4 max-w-full font-medium text-center text-white whitespace-nowrap bg-emerald-500 border border-emerald-500 border-solid leading-[109%] rounded-[30px] w-auto"
                        onClick={start}
                      >
                        Commencer
                      </button>
                    </>
                  ) : (
                    <>
                      <span>
                        Question {currentQuestionIndex + 1}/{" "}
                        {questionsList.length}
                      </span>
                      <QuestionComponent question={questionsList[currentQuestionIndex]}/>
                      <div className="flex flex-row justify-between space-x-2">
                        {
                          currentQuestionIndex > 0 && (
                            <button
                            className=" items-center self-center p-4 max-w-full font-medium text-center text-white whitespace-nowrap bg-cyan-700 border border-cyan-700 border-solid leading-[109%] rounded-[30px] w-auto"
                            onClick={previousQuestion}
                          >
                            Précédent
                          </button>
                          )
                        }
                        <button
                          className="items-center self-center m-auto p-4 max-w-full font-medium text-center text-white whitespace-nowrap bg-emerald-500 border border-emerald-500 border-solid leading-[109%] rounded-[30px] w-auto"
                          onClick={nextQuestion}
                        >
                          { currentQuestionIndex + 1 == questionsList.length ? <span>Terminer</span> : <span>Suivant</span>}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  className="shrink-0 mx-auto max-w-full rounded-3xl bg-zinc-300 h-[483px] w-[428px] max-md:mt-10"
                  src={
                    currentQuestionIndex !== null
                      ? questionsList[currentQuestionIndex].image
                      : welcomePageContent.image
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center px-8 py-12 mt-3 text-base leading-6 text-gray-500 bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
        © 2021 Themesberg, LLC. All rights reserved.
      </div>
    </div>
  );
}