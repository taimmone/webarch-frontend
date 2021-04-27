const Checkout = () => {
  return (
    <aside className="hidden lg:flex flex-col justify-between max-w-xs w-full border-l bg-white">
      <div className="py-8 text-4xl font-semibold">Checkout</div>
      <div className="py-8 flex justify-around">
        <button className="rounded-full w-32 h-8 flex self-center bg-white items-center justify-center text-xl font-bold ring-1 ring-black">
          Cancel
        </button>
        <button className="rounded-full w-32 h-8 flex self-center bg-white items-center justify-center text-xl font-bold ring-2 ring-black">
          Order
        </button>
      </div>
    </aside>
  );
};

export default Checkout;
