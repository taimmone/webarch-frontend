import { createContext, useReducer } from 'react';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'selectSandwich': {
        const { sandwichId } = action.payload;
        const newState = { ...state, sandwichId };
        return newState;
      }
      case 'setOrder':
        const { order } = action.payload;
        return { ...state, order };
      case 'clearOrder': {
        return { ...state, order: null };
      }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
