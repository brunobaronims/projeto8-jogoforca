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
    y: 0, z: 0, word: [], display: [], randInt: getRandomInt(0, palavras.length - 1), count: 0
  };
  const initialState = {
    a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1, h: 1, i: 1, j: 1, k: 1, l: 1,
    m: 1, n: 1, o: 1, p: 1, q: 1, r: 1, s: 1, t: 1, u: 1, v: 1, w: 1, x: 1,
    y: 1, z: 1, word: [], count: 0, display: [], randInt: getRandomInt(0, palavras.length - 1)
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case 'newWord':
        return {
          ...newGame, word: Array.from(palavras[state.randInt]), display: Array(palavras[state.randInt].length).fill('_')
        }
      case 'letter':
        if (state.count !== 6) {
          if (state[action.payload] === 0) {
            if (state.word.includes(action.payload)) {
              return {
                ...state, [action.payload]: 1, display: changeDisplayWord(state.word, action.payload, state.display)
              }
            }
            return {
              ...state, [action.payload]: 1, count: state.count + 1
            }
          } return { ...state }
        } return { ...state }
      default:
        throw new Error();
    }
  }

  function changeDisplayWord(word, letter, display) {
    const newDisplay = display;
    word.forEach((l, index) => {
      if (letter.localeCompare(l, 'pt', { sensitivity: 'base' })) {
        newDisplay[index] = l;
      }
    })
    return newDisplay;
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