const Checkout = () => {
  return (
    <div className="py-8 flex justify-around">
      <button className="rounded-full w-32 h-8 flex self-center bg-white items-center justify-center text-xl font-bold ring-1 ring-black">
        Cancel
      </button>
      <button className="rounded-full w-32 h-8 flex self-center bg-white items-center justify-center text-xl font-bold ring-2 ring-black">
        Order
      </button>
    </div>
  );
};

export default Checkout;
