import IconButton from './IconButton';
import CartIcon from './icons/CartIcon';
import SidebarButton from './MenuButton';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="h-20 border-b z-10">
      <div className="flex p-4 h-full justify-between items-center text-center">
        <div className="xl:invisible">
          <SidebarButton handleClick={toggleSidebar} />
        </div>
        <h1 className="text-2xl font-black flex-grow">Heading</h1>
        <div className="lg:invisible">
          <IconButton icon={<CartIcon />} />
        </div>
      </div>
    </header>
  );
};

export default Header;
