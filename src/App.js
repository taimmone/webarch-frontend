import { useState } from 'react';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const App = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);
  const toggleSidebar = () => setOpenSidebar(!openSidebar);
  const toggleCheckout = () => setOpenCheckout(!openCheckout);

  return (
    <div className="flex flex-col h-screen w-screen">
      <Header {...{  toggleSidebar, toggleCheckout  }} />
      <div className="flex h-full text-center">
        <Sidebar open={openSidebar} toggleSidebar={toggleSidebar} />
        <Main />
        <Checkout open={openCheckout} toggleCheckout={toggleCheckout} />
      </div>
    </div>
  );
};

export default App;
