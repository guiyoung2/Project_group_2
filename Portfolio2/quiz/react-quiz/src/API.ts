import { shuffleArray } from "./utils";
import axios from "axios";
import { useEffect, useState } from "react";

export type Question = {
  catagory: string;
  correct_answer: string;
  diffidculty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export const geographyQ = async () => {
  // const tt = fetch("/test.json").then(response => response.json());
  // const quiz = await (await fetch("/data/quiz.json")).json();
  const quiz = await (
    await fetch(
      "https://raw.githubusercontent.com/guiyoung2/quiz/main/data/quiz.json"
    )
  ).json();
  // .then(data => console.log(data.지리));
  // console.log(quiz.지리);

  return quiz.지리.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
export const commonQ = async () => {
  const quiz = await (
    await fetch(
      "https://raw.githubusercontent.com/guiyoung2/quiz/main/data/quiz.json"
    )
  ).json();
  return quiz.상식.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
export const idiomQ = async () => {
  const quiz = await (
    await fetch(
      "https://raw.githubusercontent.com/guiyoung2/quiz/main/data/quiz.json"
    )
  ).json();
  return quiz.사자성어.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
export const conversationQ = async () => {
  const quiz = await (
    await fetch(
      "https://raw.githubusercontent.com/guiyoung2/quiz/main/data/quiz.json"
    )
  ).json();
  return quiz.영어회화.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
