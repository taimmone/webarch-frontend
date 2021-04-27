import { useState } from 'react';
import CartCheckout from './components/CartCheckout/CartCheckout';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const App = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = () => setOpenSidebar(!openSidebar);

  return (
    <div className="flex flex-col h-screen w-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex h-full text-center">
        <Sidebar open={openSidebar} toggleSidebar={toggleSidebar} />
        <Main />
        <CartCheckout />
      </div>
    </div>
  );
};

export default App;
