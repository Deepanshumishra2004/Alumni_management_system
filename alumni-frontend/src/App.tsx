import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<PrivateRoutes />} />
    </Routes>
  );
};

export default App;
