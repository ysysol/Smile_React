/*import React from 'react';
import { FaHome, FaUser, FaCog, FaChevronDown, FaChevronUp, FaBars } from 'react-icons/fa';
import './Sidebar.css';

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
        <div className="menu_side-item" onClick={() => handleMenuClick('home')}>
          <FaHome className="menu_side-icon" />
          {isOpen && <span>Home</span>}
        </div>
        <div className="menu_side-item" onClick={() => handleMenuClick('profile')}>
          <FaUser className="menu_side-icon" />
          {isOpen && (
            <>
              <span>Profile</span>
              {openMenu === 'profile' ? <FaChevronUp /> : <FaChevronDown />}
            </>
          )}
        </div>
        {openMenu === 'profile' && isOpen && (
          <div className="submenu">
            <div className="submenu-item">View Profile</div>
            <div className="submenu-item">Edit Profile</div>
          </div>
        )}
        <div className="menu_side-item" onClick={() => handleMenuClick('settings')}>
          <FaCog className="menu_side-icon" />
          {isOpen && (
            <>
              <span>Settings</span>
              {openMenu === 'settings' ? <FaChevronUp /> : <FaChevronDown />}
            </>
          )}
        </div>
        {openMenu === 'settings' && isOpen && (
          <div className="submenu">
            <div className="submenu-item">General</div>
            <div className="submenu-item">Account</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
*/
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaChevronDown, FaChevronUp, FaBars } from 'react-icons/fa';
import './Sidebar.css';

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
        <div className="menu_side-item">
          <Link to="/" className="menu_side-link">
            <FaHome className="menu_side-icon" />
            {isOpen && <span>Home</span>}
          </Link>
        </div>
        <div className="menu_side-item" onClick={() => handleMenuClick('profile')}>
          <FaUser className="menu_side-icon" />
          {isOpen && (
            <>
              <span>Profile</span>
              {openMenu === 'profile' ? <FaChevronUp /> : <FaChevronDown />}
            </>
          )}
        </div>
        {openMenu === 'profile' && isOpen && (
          <div className="submenu">
            <div className='menu_side-item'> <Link to="/profile/view" className="submenu-item">View Profile</Link></div>
            <div className='menu_side-item'><Link to="/profile/edit" className="submenu-item">Edit Profile</Link></div>
          </div>
        )}
        <div className="menu_side-item" onClick={() => handleMenuClick('settings')}>
          <FaCog className="menu_side-icon" />
          {isOpen && (
            <>
              <span>Settings</span>
              {openMenu === 'settings' ? <FaChevronUp /> : <FaChevronDown />}
            </>
          )}
        </div>
        {openMenu === 'settings' && isOpen && (
          <div className="submenu">
            <div className='menu_side-item' ><Link to="/settings/general" className="submenu-item">General</Link></div>
            <div className='menu_side-item'><Link to="/settings/account" className="submenu-item">Account</Link></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
