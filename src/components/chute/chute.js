import * as Styled from './index'

export default function Chute({ state, dispatch }) {
  return (
    <Styled.Form onSubmit={(e) => dispatch({ type: 'submit', payload: e })}>
      <Styled.Label>
        Já sei a palavra!
        <Styled.Input data-identifier='type-guess' type='text' value={state.guess}
         onChange={(e) => dispatch({ type: 'type', payload: e.target.value })} />
      </Styled.Label>
      <Styled.Guess data-identifier='guess-button' enabled={state.inputEnabled} type='submit' value='Chutar' />
    </Styled.Form>
  );
}