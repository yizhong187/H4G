import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import { UserProvider } from "./contexts/UserContext";
import { UserNavbar } from "./components/UserNavbar/UserNavbar";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./App.css";

const App: React.FC = () => {
  return (
    <MantineProvider>
      <UserProvider>
      <Router>
      <div className="appContainer">
            <UserNavbar />
          </div>
          <div className="mainContent">
            <Routes>
              {routes.map((route, index) => {
                const Component = route.component;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={<Component />}
                  />
                );
              })}
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </MantineProvider>
  );
};

export default App;
