import * as Styled from './index'
import React from 'react';

export default function Jogo({ images, state, dispatch }) {
  return (
    <React.Fragment>
      <Styled.Container>
        <img src={images[state.count][1]} />
      </Styled.Container>
      <Styled.Container>
        <Styled.Button onClick={() => dispatch({ type: 'newWord' })} >Escolher Palavra</Styled.Button>
        <Styled.List>
          {
            state.display.map((letter, index) => {
              return (
                <Styled.Letter status={state.status} key={index} >{letter}</Styled.Letter>
              );
            })
          }
        </Styled.List>
      </Styled.Container>
    </React.Fragment>
  );
}