import IconButton from './IconButton';
import CartIcon from './icons/CartIcon';
import MenuIcon from './icons/MenuIcon';

export const SidebarButton = ({ handleClick }) => (
  <IconButton icon={<MenuIcon />} handleClick={handleClick} />
);
export const CheckoutButton = ({ handleClick }) => (
  <IconButton icon={<CartIcon />} handleClick={handleClick} />
);

const menuButtons = { SidebarButton, CheckoutButton };

export default menuButtons;
