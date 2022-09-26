import styled from "styled-components";

export const Main = styled.main`
dispay: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Game = styled.section`
margin: 0;
display: flex;
justify-content: center;

@media (max-width: 928px) {
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
`;

export const Letters = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media (max-width: 928px) {
  width: 100%;
}
`;

export const Guess = styled.section`
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 928px) {
  width: 100%;
}
`;