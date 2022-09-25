import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute";
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
  const images = Object.entries(image);
  const newGame = {
    a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0,
    m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0,
    y: 0, z: 0, word: '', display: [], randInt: getRandomInt(0, palavras.length - 1),
    count: 0
  };
  const initialState = {
    a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1, h: 1, i: 1, j: 1, k: 1, l: 1,
    m: 1, n: 1, o: 1, p: 1, q: 1, r: 1, s: 1, t: 1, u: 1, v: 1, w: 1, x: 1,
    y: 1, z: 1, word: '', count: 0, display: [], randInt: getRandomInt(0, palavras.length - 1)
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case 'newWord':
        return {
          ...newGame, word: palavras[state.randInt], display: Array(palavras[state.randInt].length).fill('_')
        }
      case 'letter':
        if (state[action.payload] || state.count === 6) {
          return { ...state }
        } return (checkLetter(state, action.payload));
      default:
        throw new Error();
    }
  }

  function checkLetter(state, letter) {
    const normalizedWord = state.word.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    const normalizedArray = Array.from(normalizedWord);
    const newDisplay = state.display;

    if (normalizedArray.includes(letter)) {
      normalizedArray.forEach((l, index) => {
        if (l === letter) {
          newDisplay[index] = Array.from(state.word)[index];
        }
      })
      if (emptySpaces(state.display) === 0) {
        return { ...initialState, count: state.count, display: state.display }
      } return { ...state, display: newDisplay, [letter]: 1 };
    }
    else if (state.count === 5) {
      return { ...initialState, count: 6 }
    } return { ...state, count: state.count + 1, [letter]: 1 }
  }

  function emptySpaces(display) {
    return display.filter((l) => (l === '_')).length;
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    console.log(state);
  })

  return (
    <Main>
      <Game>
        <div className='game-left'>
          <img src={images[state.count][1]} />
        </div>
        <div className='game-right'>
          <div>
            <StartButton onClick={() => dispatch({ type: 'newWord' })} >Escolher Palavra</StartButton>
            <ul>
              {
                state.display.map((letter, index) => {
                  return (
                    <li key={index} >{letter}</li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </Game>
      <section className='letras'>
        <Letras game={state} click={dispatch} />
      </section>
      <section className='chute'>
        <p>Já sei a palavra!</p>
        <input></input>
        <button>Chutar</button>
      </section>
    </Main>
  );
}