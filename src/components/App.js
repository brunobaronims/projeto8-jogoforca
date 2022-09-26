import Jogo from "./jogo/jogo";
import Letras from "./letras/letras";
import Chute from "./chute/chute";
import * as image from '../assets/index';
import { useReducer } from "react";
import * as Styled from './index'
import palavras from "./palavras";

const images = Object.entries(image);
const newGame = {
  a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1, h: 1, i: 1, j: 1, k: 1, l: 1,
  m: 1, n: 1, o: 1, p: 1, q: 1, r: 1, s: 1, t: 1, u: 1, v: 1, w: 1, x: 1,
  y: 1, z: 1, word: '', display: [], randInt: getRandomInt(0, palavras.length - 1),
  count: 0, guess: '', inputEnabled: 1, status: ''
};
const initialState = {
  a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0,
  m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0,
  y: 0, z: 0, word: '', count: 0, display: [], randInt: getRandomInt(0, palavras.length - 1),
  guess: '', inputEnabled: 0, status: ''
}

function reducer(state, action) {
  switch (action.type) {
    case 'newWord':
      return {
        ...newGame, word: palavras[state.randInt], display: Array(palavras[state.randInt].length).fill('_')
      }
    case 'letter':
      if (!state[action.payload] || state.count === 6) { return { ...state } }
      return (checkLetter(state, action.payload));
    case 'type':
      if (state.inputEnabled) { return { ...state, guess: action.payload } }
      return { ...state }
    case 'submit':
      if (state.inputEnabled) { return checkGuess(state, action.payload); }
      else {
        action.payload.preventDefault();
        return { ...state }
      }
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
      return { ...initialState, count: state.count, display: state.display, status: 'won' }
    } return { ...state, display: newDisplay, [letter]: 0 };
  }
  else if (state.count === 5) {
    return { ...initialState, display: Array.from(state.word), count: 6, status: 'lost' }
  } return { ...state, count: state.count + 1, [letter]: 0 }
}

function checkGuess(state, input) {
  input.preventDefault();
  if (input.target[0].value === state.word) {
    return { ...initialState, count: state.count, display: state.display, inputEnabled: 0, status: 'won' }
  } else if (input.target[0].value === '') {
    return { ...state }
  }
  return { ...initialState, count: 6, display: Array.from(state.word), inputEnabled: 0, status: 'lost' }
}

function emptySpaces(display) {
  return display.filter((l) => (l === '_')).length;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Styled.Main>
      <Jogo images={images} state={state} dispatch={dispatch} />
      <section className='letras'>
        <Letras game={state} click={dispatch} />
      </section>
      <section className='chute'>
        <Chute state={state} dispatch={dispatch} />
      </section>
    </Styled.Main>
  );
}