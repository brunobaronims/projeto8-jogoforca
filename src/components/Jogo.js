import styled from "styled-components";

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

export default function Jogo({ images, state, dispatch }) {
  return (
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
  );
}