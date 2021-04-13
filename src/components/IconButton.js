const IconButton = ({ icon, handleClick }) => {
  return (
    <button className="p-2 focus:outline-none" onClick={handleClick}>
      {icon}
    </button>
  );
};

export default IconButton;
