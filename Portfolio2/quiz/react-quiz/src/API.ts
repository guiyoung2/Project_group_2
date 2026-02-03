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

export type QuizCategories = {
  common: QuestionState[];
  geography: QuestionState[];
  idiom: QuestionState[];
  conversation: QuestionState[];
};

const QUIZ_DATA_URL = "/data/quiz.json";

const mapToQuestionState = (question: Question): QuestionState => ({
  ...question,
  answers: shuffleArray([
    ...question.incorrect_answers,
    question.correct_answer,
  ]),
});

export const getAllCategories = async (): Promise<QuizCategories> => {
  const res = await fetch(QUIZ_DATA_URL);
  const quiz = await res.json();
  return {
    common: quiz.상식?.map(mapToQuestionState) ?? [],
    geography: quiz.지리?.map(mapToQuestionState) ?? [],
    idiom: quiz.사자성어?.map(mapToQuestionState) ?? [],
    conversation: quiz.영어회화?.map(mapToQuestionState) ?? [],
  };
};
