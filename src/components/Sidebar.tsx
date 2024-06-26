import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaChevronDown, FaChevronUp, FaBars } from 'react-icons/fa';
import './Sidebar.css';
import routes from '../routes';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);

  const handleMenuClick = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div className="sidebar-content">
      {
      routes
      .filter(route => !route.invisible) // Filter out invisible routes
      .map((route, index) => (
          <div key={index} className="menu_side-item">
            <Link to={route.path} className="menu_side-link">
              {route.icon && <route.icon />}
              {isOpen && <span>{route.link}</span>}
            </Link>
          </div>
        ))}

        <div className="menu_side-item" onClick={() => handleMenuClick('profile')}>
          <FaUser />
          {isOpen && (
            <>
              <span>Profile</span>
              {openMenu === 'profile' ? <FaChevronUp /> : <FaChevronDown />}
            </>
          )}
        </div>
        {openMenu === 'profile' && isOpen && (
          <div className="submenu">
            <Link to="/profile/view" className="submenu-item">View Profile</Link>
            <Link to="/profile/edit" className="submenu-item">Edit Profile</Link>
          </div>
        )}

        <div className="menu_side-item" onClick={() => handleMenuClick('settings')}>
          <FaCog />
          {isOpen && (
            <>
              <span>Settings</span>
              {openMenu === 'settings' ? <FaChevronUp /> : <FaChevronDown />}
            </>
          )}
        </div>
        {openMenu === 'settings' && isOpen && (
          <div className="submenu">
            <Link to="/settings/general" className="submenu-item">General</Link>
            <Link to="/settings/account" className="submenu-item">Account</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
