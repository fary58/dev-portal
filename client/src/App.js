import React, { Fragment } from "react";
import Landing from "../src/components/layout/Landing";
import Navbar from "../src/components/layout/Navbar";
import Register from "../src/components/auth/Register";
import Login from "../src/components/auth/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
