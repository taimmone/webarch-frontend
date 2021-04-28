import { SidebarButton } from './MenuButtons';

const Sidebar = ({ open, toggleSidebar }) => {
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
        <div className="pt-8 h-full mx-4 border-t xl:border-none text-center font-semibold text-4xl">
          Side
        </div>
      </div>
      <div
        className={`flex-grow bg-black bg-opacity-50 xl:bg-transparent ${open ? 'z-50' : ''}`}
      ></div>
    </aside>
  );
};

export default Sidebar;
