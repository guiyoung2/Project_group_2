import React, { useState } from "react";
import { getAllCategories, QuestionState } from "./API";
import QuestionCard from "./components/QuestionCard";
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

type CategoryKey = "common" | "geography" | "idiom" | "conversation";

const TOTAL_QUESTIONS = 7;

const App = () => {
  const [start, setStart] = useState(true);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<{
    common: QuestionState[];
    geography: QuestionState[];
    idiom: QuestionState[];
    conversation: QuestionState[];
  } | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryKey | null>(
    null
  );
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const questions =
    activeCategory && categories ? categories[activeCategory] : [];
  const currentQuestion = questions[number];

  const loadCategories = async () => {
    setLoading(true);
    try {
      const data = await getAllCategories();
      setCategories(data);
      setStart(false);
    } finally {
      setLoading(false);
    }
  };

  const resetGame = () => {
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setGameOver(false);
  };

  const goMain = () => {
    setStart(true);
    setActiveCategory(null);
    setLoading(false);
    resetGame();
    setGameOver(true);
  };

  const startGame = (category: CategoryKey) => {
    setActiveCategory(category);
    resetGame();
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (gameOver || !currentQuestion) return;
    const answer = e.currentTarget.value;
    const correct = currentQuestion.correct_answer === answer;
    if (correct) setScore((prev) => prev + 1);
    setUserAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        answer,
        correct,
        correctAnswer: currentQuestion.correct_answer,
      },
    ]);
  };

  const nextQuestion = () => {
    const next = number + 1;
    if (next === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(next);
    }
  };

  const showCategorySelect =
    !start && !activeCategory && categories && !loading;
  const showQuiz = !loading && !gameOver && activeCategory && currentQuestion;
  const showNextButton =
    !gameOver &&
    !loading &&
    userAnswers.length === number + 1 &&
    number < TOTAL_QUESTIONS - 1;
  const showResult = userAnswers.length === TOTAL_QUESTIONS;

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>사지선다 퀴즈</h1>

        {start && (
          <button type="button" className="start" onClick={loadCategories}>
            퀴즈 장르 선택
          </button>
        )}

        {loading && <p>Loading Question ...</p>}

        {showCategorySelect && (
          <>
            <button
              type="button"
              className="kind"
              onClick={() => startGame("common")}
            >
              상식
            </button>
            <button
              type="button"
              className="kind"
              onClick={() => startGame("geography")}
            >
              지리
            </button>
            <button
              type="button"
              className="kind"
              onClick={() => startGame("idiom")}
            >
              사자성어
            </button>
            <button
              type="button"
              className="kind"
              onClick={() => startGame("conversation")}
            >
              기초 영어회화
            </button>
          </>
        )}

        {showQuiz && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={currentQuestion.question}
            answers={currentQuestion.answers}
            userAnswer={userAnswers[number]}
            callback={checkAnswer}
          />
        )}

        {showNextButton && (
          <button type="button" className="next" onClick={nextQuestion}>
            Next Question
          </button>
        )}

        {showResult && (
          <>
            <p className="score">Score: {score}</p>
            <button type="button" className="main" onClick={goMain}>
              메인으로 돌아가기
            </button>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default App;
