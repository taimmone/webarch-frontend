import { useContext } from 'react';
import { store } from '../store';

const Sandwich = ({ sandwichId, handleSelect }) => {
  return (
    // TODO: Wrap with clickable area to toggle radio button
    <div className="p-12 border text-2xl col-span-2 sm:col-auto font-semibold flex items-center justify-between">
      <input type="radio" name="sandwich" onClick={() => handleSelect(sandwichId)} />
      <h3>SandwichId: {sandwichId}</h3>
    </div>
  );
};

const Main = () => {
  const sandwiches = [{ sandwichId: 0 }, { sandwichId: 1 }, { sandwichId: 2 }];
  const { state, dispatch } = useContext(store);

  const handleSelect = id => {
    dispatch({ type: 'selectSandwich', payload: { sandwichId: id } });
  };

  return (
    <main className="flex-grow flex flex-col mx-4">
      {console.log(state)}
      <div className="pt-8 text-4xl font-semibold mb-12">Content</div>
      <div className="w-full grid grid-cols-2 gap-3 grid-flow-row">
        {sandwiches.map(({ sandwichId }) => {
          return <Sandwich key={sandwichId} {...{ sandwichId, handleSelect }} />;
        })}
      </div>
      <button className="self-end p-4 px-6 border-2 text-xl" type="button">
        Select sandwich ➤
      </button>
    </main>
  );
};

export default Main;
