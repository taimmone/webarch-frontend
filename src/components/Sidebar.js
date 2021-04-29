import { useContext, useEffect, useState } from 'react';
import orderService from '../services/order';
import { store } from '../store';
import { SidebarButton } from './MenuButtons';

const Order = ({ order }) => {
  return (
    <li>
      <div className="text-xl mt-4">Order {order.id}</div>
      <div>Order status: {order.order_status}</div>
    </li>
  );
};

const PlaceHolder = () => (
  <div className="animate-pulse flex flex-col items-center mt-4">
    <div className="h-7 w-24 bg-gray-200 my-2 rounded" />
    <div className="h-6 w-36 bg-gray-200 rounded" />
  </div>
);

const Sidebar = ({ open, toggleSidebar }) => {
  const { state, dispatch } = useContext(store);
  const [isLoaded, setLoadedStatus] = useState(false);
  const [isConnected, setConnectedStatus] = useState(false);

  useEffect(() => {
    const getOrders = () =>
      orderService
        .getAll()
        .then(({ data }) => {
          dispatch({ type: 'setAllOrders', payload: data });
          setConnectedStatus(true);
          setLoadedStatus(true);
        })
        .catch(_err => setConnectedStatus(false));
    getOrders();
    const update = setInterval(() => getOrders(), 2000);
    return () => clearInterval(update);
  }, [dispatch]);

  return (
    <aside
      className={`flex fixed inset-0 xl:static xl:block xl:max-w-xs w-full h-full ${
        open ? 'w-full z-50' : 'hidden'
      }`}
    >
      <div className="max-w-xs h-full w-full bg-white border-r xl:visible">
        <div className="flex justify-end p-4 xl:hidden">
          <SidebarButton handleClick={toggleSidebar} />
        </div>
        <div className="pt-8 h-full mx-4 border-t xl:border-none overflow-y-auto">
          <div className=" text-center font-semibold text-4xl">Orders</div>
          <ul>
            {isConnected || isLoaded ? (
              state.orders?.map(order => <Order key={order.id} order={order} />)
            ) : (
              <>
                <PlaceHolder />
                <PlaceHolder />
              </>
            )}
          </ul>
        </div>
      </div>
      <div
        className={`flex-grow bg-black bg-opacity-50 xl:bg-transparent ${open ? 'z-50' : ''}`}
      ></div>
    </aside>
  );
};

export default Sidebar;
