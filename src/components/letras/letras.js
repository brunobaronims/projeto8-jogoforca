import React from "react";
import * as Styled from "./index"

export default function Letras({ game, click }) {
  const lettersTop = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m"];
  const lettersBottom = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  return (
    <React.Fragment>
      <Styled.Container>
        {
          lettersTop.map((letter, index) => {
            return (
              <Styled.Letter data-identifier='letter' onClick={() => click({ type: 'letter', payload: letter })}
                enabled={game[letter]} key={index}>{letter.toLocaleUpperCase()}</Styled.Letter>
            );
          })
        }
      </Styled.Container>
      <Styled.Container>
        {
          lettersBottom.map((letter, index) => {
            return (
              <Styled.Letter data-identifier='letter' onClick={() => click({ type: 'letter', payload: letter })}
                enabled={game[letter]} key={index}>{letter.toLocaleUpperCase()}</Styled.Letter>
            );
          })
        }
      </Styled.Container>
    </React.Fragment>
  );
}
