import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import { UserProvider } from "./contexts/UserContext";

import UserNavbar from "./components/UserNavbar";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <UserNavbar />
        <Routes>
          {routes.map((route, index) => {
            const Component = route.component;
            return (
              <Route key={index} path={route.path} element={<Component />} />
            );
          })}
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
