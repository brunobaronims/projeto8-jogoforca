import * as Styled from './index'

export default function Jogo({ images, state, dispatch }) {
  return (
    <Styled.Game>
      <div className='game-left'>
        <img src={images[state.count][1]} />
      </div>
      <div className='game-right'>
        <div>
          <Styled.StartButton onClick={() => dispatch({ type: 'newWord' })} >Escolher Palavra</Styled.StartButton>
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
    </Styled.Game>
  );
}