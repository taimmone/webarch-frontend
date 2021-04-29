import { useContext } from 'react';
import { store } from '../store';
import { CheckoutButton } from './MenuButtons';
import orderService from '../services/order';

const OrderButton = ({ text, handleClick }) => (
  <button
    className="rounded-full w-32 h-8 flex self-center bg-white items-center justify-center text-xl font-bold ring-2 ring-black disabled:opacity-50"
    onClick={handleClick}
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
        console.log(res);
        if (res.status !== 200) return console.log('Error validating order');
        clearOrder();
        alert('Order sent!');
      })
      .catch(reason => console.error(reason));
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
      <div className="flex flex-col h-full justify-between max-w-xs w-full border-l bg-white">
        <div className="flex p-4 md:hidden">
          <CheckoutButton handleClick={toggleCheckout} />
        </div>
        <div className="py-8 h-full">
          <div className="text-4xl font-semibold">Checkout</div>
          <div className="text-xl mt-4">{`SandwichId: ${state.order?.sandwichId}`}</div>
        </div>
        <div className="py-8 flex justify-around">
          <OrderButton text="Cancel" handleClick={clearOrder} />
          <OrderButton text="Order" handleClick={handleOrder} />
        </div>
      </div>
    </aside>
  );
};

export default Checkout;
