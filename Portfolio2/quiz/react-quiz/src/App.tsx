import React, { useEffect, useState } from "react";
import { geographyQ, commonQ, idiomQ, conversationQ } from "./API";
// components
import QuestionCard from "./components/QuestionCard";
// types
import { QuestionState } from "./API";
import axios from "axios";
// styles
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

// }
const TOTAL_QUESTIONS = 7;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [geography, setGeography] = useState<QuestionState[]>([]);
  const [common, setCommon] = useState<QuestionState[]>([]);
  const [idiom, setIdiom] = useState<QuestionState[]>([]);
  const [conversation, setConversation] = useState<QuestionState[]>([]);
  const [gameGeography, setGameGeopraphy] = useState(false);
  const [gameCommon, setGameCommon] = useState(false);
  const [gameIdiom, setGameIdiom] = useState(false);
  const [gameConversation, setGameConversation] = useState(false);
  const [start, setStart] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("/test.json")
  //     .then(data => setFile(data.data.quiz1))
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);
  // console.log(questions);

  // const startTrivia = async () => {
  //   setLoading(true);
  //   setGameOver(false);

  //   // const newQuestions = await fetchQuizQuestions(
  //   //   TOTAL_QUESTIONS,
  //   //   Difficulty.HARD
  //   // );
  //   // setQuestions(newQuestions);
  //   //
  //   setScore(0);
  //   setUserAnswers([]);
  //   setNumber(0);
  //   setLoading(false);
  // };
  const choose = async () => {
    const geographyWrap = await geographyQ();
    setGeography(geographyWrap);

    const commonWrap = await commonQ();
    setCommon(commonWrap);

    const idiomWrap = await idiomQ();
    setIdiom(idiomWrap);

    const conversationWrap = await conversationQ();
    setConversation(conversationWrap);

    setStart(false);
  };
  const goMain = () => {
    setStart(true);
    setLoading(true);
    setGameOver(false);
    setGameCommon(false);
    setGameGeopraphy(false);
    setGameIdiom(false);
    setGameConversation(false);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const startCommon = async () => {
    setLoading(true);
    setGameOver(false);
    setGameCommon(true);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const startGeography = async () => {
    setLoading(true);
    setGameOver(false);
    setGameGeopraphy(true);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const startIdiom = async () => {
    setLoading(true);
    setGameOver(false);
    setGameIdiom(true);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const startConversation = async () => {
    setLoading(true);
    setGameOver(false);
    setGameConversation(true);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswerGeography = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = geography[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1);
      const answerObject = {
        question: geography[number].question,
        answer,
        correct,
        correctAnswer: geography[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObject]);
    }
  };
  const checkAnswerCommon = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = common[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1);
      const answerObject = {
        question: common[number].question,
        answer,
        correct,
        correctAnswer: common[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObject]);
    }
  };
  const checkAnswerIdiom = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = idiom[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1);
      const answerObject = {
        question: idiom[number].question,
        answer,
        correct,
        correctAnswer: idiom[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObject]);
    }
  };
  const checkAnswerConversation = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = conversation[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1);
      const answerObject = {
        question: conversation[number].question,
        answer,
        correct,
        correctAnswer: conversation[number].correct_answer,
      };
      setUserAnswers(prev => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>사지선다 퀴즈</h1>
        {start && (
          <button className="start" onClick={choose}>
            퀴즈 장르 선택
          </button>
        )}
        {!start &&
          !gameCommon &&
          !gameGeography &&
          !gameIdiom &&
          !gameConversation && (
            <>
              <button className="kind" onClick={startCommon}>
                상식
              </button>
              <button className="kind" onClick={startGeography}>
                지리
              </button>
              <button className="kind" onClick={startIdiom}>
                사자성어
              </button>
              <button className="kind" onClick={startConversation}>
                기초 영어회화
              </button>
            </>
          )}
        {loading && <p>Loading Question ...</p>}
        {!loading && !gameOver && gameCommon && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={common[number].question}
            answers={common[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswerCommon}
          />
        )}
        {!loading && !gameOver && gameGeography && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={geography[number].question}
            answers={geography[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswerGeography}
          />
        )}
        {!loading && !gameOver && gameIdiom && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={idiom[number].question}
            answers={idiom[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswerIdiom}
          />
        )}
        {!loading && !gameOver && gameConversation && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={conversation[number].question}
            answers={conversation[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswerConversation}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
        {userAnswers.length === TOTAL_QUESTIONS ? (
          <>
            <p className="score">Score: {score}</p>
            <button className="main" onClick={goMain}>
              메인으로 돌아가기
            </button>
          </>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
