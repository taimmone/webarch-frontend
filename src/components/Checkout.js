import { CheckoutButton } from './MenuButtons';

const Checkout = ({ open, toggleCheckout }) => {
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
        <div className="py-8 text-4xl h-full font-semibold">Checkout</div>
        <div className="py-8 flex justify-around">
          <button className="rounded-full w-32 h-8 flex self-center bg-white items-center justify-center text-xl font-bold ring-1 ring-black">
            Cancel
          </button>
          <button className="rounded-full w-32 h-8 flex self-center bg-white items-center justify-center text-xl font-bold ring-2 ring-black">
            Order
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Checkout;
