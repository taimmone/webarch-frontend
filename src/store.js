import { createContext, useReducer } from 'react';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'selectSandwich': {
        const { sandwichId } = action.payload;
        return { ...state, sandwich: { id: sandwichId } };
      }
      case 'clearSandwich':
        return { ...state, sandwich: null };
      case 'setOrder':
        return { ...state, order: action.payload };
      case 'clearOrder': {
        return { ...state, order: null };
      }
      case 'setAllOrders': {
        return { ...state, orders: action.payload };
      }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
