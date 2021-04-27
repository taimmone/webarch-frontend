import Cart from './Cart';
import Checkout from './Checkout';

const CartOrder = () => {
  return (
    <aside className="hidden lg:flex flex-col justify-between max-w-xs w-full border-l bg-white">
      <Cart />
      <Checkout />
    </aside>
  );
};

export default CartOrder;
