import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import { UserProvider } from "./contexts/UserContext";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import UserNavbar from "./components/UserNavbar";
import { Box } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#C2185B",
    },
    secondary: {
      main: "#F8BBD0",
    },
  },
});

const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    console.log("toggled");
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Router>
          <UserNavbar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
              transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: isDrawerOpen
                  ? theme.transitions.duration.enteringScreen
                  : theme.transitions.duration.leavingScreen,
              }),
              marginLeft: isDrawerOpen ? "200px" : 0,
              width: isDrawerOpen ? `calc(100% - 200px)` : "100%",
            }}
          >
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
          </Box>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
