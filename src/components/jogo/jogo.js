import * as Styled from './index'
import React from 'react';

export default function Jogo({ images, state, dispatch }) {
  return (
    <React.Fragment>
      <Styled.Container>
        <Styled.Image data-identifier='game-image' src={images[state.count][1]} />
      </Styled.Container>
      <Styled.Container>
        <Styled.Button data-identifier='choose-word' onClick={() => dispatch({ type: 'newWord' })} >Escolher Palavra</Styled.Button>
        <Styled.List  data-identifier='word'>
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