import Jogo from "./jogo/jogo";
import Letras from "./letras/letras";
import Chute from "./chute/chute";
import * as image from '../assets/index';
import { useReducer } from "react";
import * as Styled from './index'
import palavras from "../palavras";

const images = Object.entries(image);
const newGame = {
  a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1, h: 1, i: 1, j: 1, k: 1, l: 1,
  m: 1, n: 1, o: 1, p: 1, q: 1, r: 1, s: 1, t: 1, u: 1, v: 1, w: 1, x: 1,
  y: 1, z: 1, word: '', displayedWord: [], count: 0, currentGuess: '', inputEnabled: 1,
  status: ''
};
const initialState = {
  a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0,
  m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0,
  y: 0, z: 0, word: '', count: 0, displayedWord: [], currentGuess: '', inputEnabled: 0,
  status: '', randInt: getRandomInt(0, palavras.length - 1)
}

function reducer(game, event) {
  switch (event.type) {
    case 'newWord':
      return {
        ...newGame, word: palavras[game.randInt],
        randInt: getRandomInt(0, palavras.length - 1),
        displayedWord: Array(palavras[game.randInt].length).fill('_')
      }
    case 'letterClick':
      if (!game[event.payload] || game.count === 6) { return { ...game } }
      return (checkLetter(game, event.payload));
    case 'type':
      if (game.inputEnabled) { return { ...game, currentGuess: event.payload } }
      return { ...game }
    case 'submit':
      if (game.inputEnabled) { return checkGuess(game, event.payload); }
      else {
        event.payload.preventDefault();
        return { ...game }
      }
    default:
      throw new Error();
  }
}

function checkLetter(state, letter) {
  const normalizedWord = state.word.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  const normalizedArray = Array.from(normalizedWord);
  const newDisplay = state.displayedWord;

  if (normalizedArray.includes(letter)) {
    normalizedArray.forEach((l, index) => {
      if (l === letter) {
        newDisplay[index] = Array.from(state.word)[index];
      }
    })
    if (emptySpaces(state.displayedWord) === 0) {
      return {
        ...initialState, randInt: getRandomInt(0, palavras.length - 1),
        count: state.count, displayedWord: state.displayedWord, status: 'won'
      }
    } return { ...state, displayedWord: newDisplay, [letter]: 0 };
  }
  else if (state.count === 5) {
    return {
      ...initialState, randInt: getRandomInt(0, palavras.length - 1),
      displayedWord: Array.from(state.word), count: 6, status: 'lost'
    }
  } return { ...state, count: state.count + 1, [letter]: 0 }
}

function checkGuess(state, input) {
  input.preventDefault();
  if (input.target[0].value === state.word) {
    return {
      ...initialState, randInt: getRandomInt(0, palavras.length - 1),
      count: state.count, displayedWord: Array.from(state.word),
      inputEnabled: 0, status: 'won'
    }
  } else if (input.target[0].value === '') {
    return { ...state }
  }
  return {
    ...initialState, count: 6, randInt: getRandomInt(0, palavras.length - 1),
    displayedWord: Array.from(state.word), inputEnabled: 0, status: 'lost'
  }
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
      <Styled.Game>
        <Jogo images={images} game={state} eventHandler={dispatch} />
      </Styled.Game>
      <Styled.Letters>
        <Letras game={state} eventHandler={dispatch} />
      </Styled.Letters>
      <Styled.Guess>
        <Chute game={state} eventHandler={dispatch} />
      </Styled.Guess>
    </Styled.Main>
  );
}