import React from "react";
import Login from "./screens/Login";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./screens/Home";
import Books from "./screens/Books";

const colors = {
  brand: {
    primary: "#D73439",
  },
};

const theme = extendTheme({ colors });

const App = () => {
  return (
    <ChakraBaseProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/books" element={<Books />} />
        </Route>
      </Routes>
    </ChakraBaseProvider>
  );
};

export default App;
