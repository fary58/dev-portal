import React, { useEffect } from 'react';
import Landing from "../src/components/layout/Landing";
import Navbar from "../src/components/layout/Navbar";
import Register from "../src/components/auth/Register";
import Login from "../src/components/auth/Login";
import { Provider } from "react-redux";
import setAuthToken from './utils/setAuthToken';
import store from "./store";
import { loadUser } from './actions/auth';
import Alert from "./components/layout/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import "./App.css";

const App = () => {

  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) { 
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our APIloadUserloadUser
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    // window.addEventListener('storage', () => {
    //   if (!localStorage.token) store.dispatch({ type: LOGOUT });
    // });
  }, []);


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
