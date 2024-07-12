import React, { Fragment } from "react";
import Landing from "../src/components/layout/Landing";
import Navbar from "../src/components/layout/Navbar";
import Register from "../src/components/auth/Register";
import Login from "../src/components/auth/Login";
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/layout/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
