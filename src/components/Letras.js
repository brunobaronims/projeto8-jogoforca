import styled from "styled-components";

const Letter = styled.button`
background: ${props => props.enabled ? 'grey' : 'lightblue'};
color: ${props => props.enabled ? 'darkgrey' : 'white'};
border: none;
border-radius: 0.2rem;
`;

export default function Letras({ game, click }) {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  return (
    alfabeto.map((letra, index) => {
      return (
        <Letter onClick={() => click({type: 'letter', payload: letra})} enabled={game[letra]} key={index}>{letra}</Letter>
      );
    })
  );
}