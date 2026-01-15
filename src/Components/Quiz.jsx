import { useState } from "react";
import questions from "./Data";
import Question from "./Question";
import Result from "./Result";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;

    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-[350px]">
        {showResult ? (
          <Result
            score={score}
            total={questions.length}
            onRestart={restartQuiz}
          />
        ) : (
          <Question
            data={questions[current]}
            onAnswer={handleAnswer}
          />
        )}
      </div>
    </div>
  );
}
