import { useContext } from 'react';
import { store } from '../store';

const Sandwich = ({ sandwichId, handleSelect, state }) => {
  return (
    <div
      className="p-12 border text-2xl col-span-2 sm:col-auto md:col-span-2 lg:col-auto font-semibold flex items-center justify-between hover:border-black"
      onClick={() => handleSelect(sandwichId)}
    >
      <input type="radio" name="sandwich" readOnly checked={sandwichId === state.sandwich?.id} />
      <h3>SandwichId: {sandwichId}</h3>
    </div>
  );
};

const Main = () => {
  const sandwiches = [{ sandwichId: 0 }, { sandwichId: 1 }, { sandwichId: 2 }];
  const { state, dispatch } = useContext(store);

  const handleSelect = sandwichId => {
    dispatch({ type: 'selectSandwich', payload: { sandwichId } });
  };

  const addToOrder = () => {
    const { sandwich } = state;
    if (!sandwich) return alert('No sandwich selected!');
    dispatch({ type: 'setOrder', payload: { sandwichId: sandwich.id, status: 'checkout' } });
    dispatch({ type: 'clearSandwich' });
  };

  return (
    <main className="flex-grow flex flex-col mx-auto px-4 max-w-2xl">
      {console.log(state)}
      <div className="pt-8 text-4xl font-semibold mb-12">Content</div>
      <div className="w-full grid grid-cols-2 gap-3 grid-flow-row">
        {sandwiches.map(({ sandwichId }) => (
          <Sandwich key={sandwichId} {...{ sandwichId, handleSelect, state }} />
        ))}
      </div>
      <button className="self-end p-4 px-6 border-2 text-xl" onClick={addToOrder} type="button">
        Select sandwich ➤
      </button>
    </main>
  );
};

export default Main;
