//import Jogo from "./components/Jogo";
//import Letras from "./components/Letras";
//import Chute from "./components/Chute";
import * as image from './assets/index.js';
import { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import palavras from "./components/palavras";

const StartButton = styled.button`
font-size: 0.8rem;
padding: 0.6rem 0.8rem;
background: rgb(50,170,100);
border-radius: 0.3rem;
border: none;
color: #FFF;
font-weight: bold;
`;

const Game = styled.section`
display: flex;
`;

const Main = styled.main`
dispay: flex;
flex-direction: column;
`;

export default function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function startGame() {
    setWord(palavras[getRandomInt(0, palavras.length)]);
  }

  let enabled = new Boolean(false);

  const [word, setWord] = useState('');

  return (
    <Main>
      <Game>
        <div className='game-left'>
          <img src={image.forca0} />
        </div>
        <div className='game-right'>
          <div>
            <StartButton onClick={() => startGame()} >Escolher Palavra</StartButton>
            <ul>
              {
                Array.from(word).map((letter, index) => {
                  return (
                    <li key={index} >_</li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </Game>
      <section className='letras'>
        {
          alfabeto.map((letra, index) => {
            return (
              <button enabled={enabled} key={index}>{letra}</button>
            );
          })
        }
      </section>
      <section className='chute'>
        <p>Já sei a palavra!</p>
        <input enabled={enabled}></input>
        <button enabled={enabled}>Chutar</button>
      </section>
    </Main>
  );
}