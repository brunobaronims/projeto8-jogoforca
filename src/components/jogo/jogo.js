import * as Styled from './index'
import React from 'react';

export default function Jogo({ images, game, eventHandler }) {
  return (
    <React.Fragment>
      <Styled.Container>
        <Styled.Image data-identifier='game-image' src={images[game.count][1]} />
      </Styled.Container>
      <Styled.Container>
        <Styled.Button data-identifier='choose-word' onClick={() => eventHandler({ type: 'newWord' })} >Escolher Palavra</Styled.Button>
        <Styled.List  data-identifier='word'>
          {
            game.displayedWord.map((letter, index) => {
              return (
                <Styled.Letter status={game.status} key={index} >{letter}</Styled.Letter>
              );
            })
          }
        </Styled.List>
      </Styled.Container>
    </React.Fragment>
  );
}