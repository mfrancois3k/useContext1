import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import Home from "./Components/Home";
import Blue from "./Components/Blue";

export const AppContext = createContext("dark");

const App = () => {
  return (
    <AppContext.Provider value={"light"}>
      <BrowserRouter>
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
