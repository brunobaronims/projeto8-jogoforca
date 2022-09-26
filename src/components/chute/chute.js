import * as Styled from './index'

export default function Chute({ game, eventHandler }) {
  return (
    <Styled.Form onSubmit={(e) => eventHandler({ type: 'submit', payload: e })}>
      <Styled.Label>
        <Styled.Text>Já sei a palavra!</Styled.Text>
        <Styled.Input enabled={game.inputEnabled} data-identifier='type-guess' type='text' value={game.currentGuess}
         onChange={(e) => eventHandler({ type: 'type', payload: e.target.value })} />
      </Styled.Label>
      <Styled.Button data-identifier='guess-button' enabled={game.inputEnabled} type='submit' value='Chutar' />
    </Styled.Form>
  );
}