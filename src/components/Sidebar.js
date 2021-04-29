import { useContext, useEffect } from 'react';
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

const Sidebar = ({ open, toggleSidebar }) => {
  const { state, dispatch } = useContext(store);

  useEffect(() => {
    orderService
      .getAll()
      .then(({ data }) => {
        dispatch({ type: 'setAllOrders', payload: data });
      })
      .catch(err => alert(`Problem retrieving orders: ${err.message}`));
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
            {state.orders?.map(order => (
              <Order key={order.id} order={order} />
            ))}
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
