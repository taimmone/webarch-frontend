import { useContext } from 'react';
import { store } from '../store';
import { CheckoutButton } from './MenuButtons';
import orderService from '../services/order';

const OrderButton = ({ text, handleClick, isDisabled }) => (
  <button
    className="rounded-full w-32 h-8 flex self-center bg-white items-center justify-center text-xl font-bold ring-2 ring-black disabled:opacity-50"
    onClick={handleClick}
    disabled={isDisabled}
  >
    {text}
  </button>
);

const Checkout = ({ open, toggleCheckout }) => {
  const { state, dispatch } = useContext(store);

  const handleOrder = () => {
    orderService
      .create({ ...state.order, status: 'ordered' })
      .then(res => {
        if (res.status !== 200) return alert('Error validating order');
        dispatch({ type: 'setAllOrders', payload: [...state.orders, res.data] });
        clearOrder();
        alert('Order sent!');
      })
      .catch(err => alert(`Problem making order: ${err.message}`));
  };

  const clearOrder = () => {
    dispatch({ type: 'clearOrder' });
  };

  return (
    <aside
      className={`flex fixed top-0 md:static md:block md:max-w-xs w-full h-full ${
        open ? ' z-50' : 'hidden'
      }`}
    >
      <div className={`flex-grow bg-black bg-opacity-50 md:bg-transparent ${open ? 'z-50' : ''}`} />
      <div className="flex flex-col justify-between max-w-xs w-full border-l bg-white">
        <div className="flex p-4 md:hidden">
          <CheckoutButton handleClick={toggleCheckout} />
        </div>
        <div className="py-8 h-full">
          <div className="text-4xl font-semibold">Checkout</div>
          <div className="text-xl mt-4">
            {state.order ? `SandwichId: ${state.order.sandwichId}` : 'Please select a sandwich'}
          </div>
        </div>
        <div className="py-8 flex justify-around">
          <OrderButton text="Cancel" handleClick={clearOrder} isDisabled={!state.order} />
          <OrderButton text="Order" handleClick={handleOrder} isDisabled={!state.order} />
        </div>
      </div>
    </aside>
  );
};

export default Checkout;
