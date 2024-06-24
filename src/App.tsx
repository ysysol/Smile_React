/*import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopMenu from './TopMenu';
import './App.css';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <TopMenu />
      <div className={`content ${isSidebarOpen ? 'shifted' : 'shifted-closed'}`}>
        <h1>Main Content</h1>
        <p>This is the main content area.</p>
      </div>
    </div>
  );
};

export default App;
*/
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopMenu from './TopMenu';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';
import './App.css';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <TopMenu />
        <div className={`content ${isSidebarOpen ? 'shifted' : 'shifted-closed'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
