import { useState } from 'react';
import CartCheckout from './components/CartCheckout/CartCheckout';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = () => setOpenSidebar(!openSidebar);

  return (
    <div className="flex flex-col h-screen w-screen">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex h-full text-center">
        <Sidebar open={openSidebar} toggleSidebar={toggleSidebar} />
        <main className="flex-grow">
          <div className="pt-8 text-4xl font-semibold">Content</div>
        </main>
        <CartCheckout />
      </div>
    </div>
  );
};

export default App;
