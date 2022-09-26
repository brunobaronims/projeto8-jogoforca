export default function Chute({ state, dispatch }) {
  return (
    <form onSubmit={(e) => dispatch({ type: 'submit', payload: e })}>
      <label>
        Já sei a palavra!
        <input type='text' value={state.guess} onChange={(e) => dispatch({ type: 'type', payload: e.target.value })} />
      </label>
      <input type='submit' value='Chutar' />
    </form>
  );
}