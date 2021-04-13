import MenuIcon from '../icons/MenuIcon';
import IconButton from './IconButton';

const SidebarButton = ({ handleClick }) => {
  return <IconButton icon={<MenuIcon />} handleClick={handleClick} />;
};

export default SidebarButton;
