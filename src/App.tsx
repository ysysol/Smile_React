// App.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./screens/Login/login"; // Assuming you have a Login component
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <Sidebar />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
