import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./image/bg.png";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'LeeSeoyun';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
 html {
   height: 100%;
 }
 body {
   background-image: url(${BGImage});
   background-size: cover;
   margin: 0;
   padding: 0 20px;
   display: flex;
   justify-content: center;
 }

 * {
   box-sizing: border-box;
   font-family: 'LeeSeoyun';
 }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    /* color: #fff; */
    border-radius: 10px;
    /* border: 2px solid #000; */
    padding: 0.5rem;
    /* background: #edf; */
    font-weight: 400;
    color: #121212;
    font-size: 2rem;
    /* margin-top: 20px; */
    box-sizing: border-box;

    background: linear-gradient(180deg, #fff, #f5cea1);
    border: 2px solid #d08e3a;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  }

  h1 {
    /* background-image: linear-gradient(180deg, #fff, #87f1ff); */
    background-image: linear-gradient(180deg, #fff, #ffcc91);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    /* filter: drop-shadow(2px 2px #0085a3); */
    filter: drop-shadow(2px 2px #d38558);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 30px;
  }

  .start,
  .next,
  .kind,
  .main {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
    margin: 80px 0;
  }
  .main {
    margin: 10px 0 30px 0;
  }
`;
