import { shuffleArray } from "./utils";

export type Question = {
  catagory: string;
  correct_answer: string;
  diffidculty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

const QUIZ_DATA_URL = "/data/quiz.json";

const fetchQuizData = async () => {
  const res = await fetch(QUIZ_DATA_URL);
  return res.json();
};

export const geographyQ = async () => {
  const quiz = await fetchQuizData();
  return quiz.지리.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
export const commonQ = async () => {
  const quiz = await fetchQuizData();
  return quiz.상식.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
export const idiomQ = async () => {
  const quiz = await fetchQuizData();
  return quiz.사자성어.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
export const conversationQ = async () => {
  const quiz = await fetchQuizData();
  return quiz.영어회화.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
