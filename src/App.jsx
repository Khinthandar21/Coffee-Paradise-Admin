import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Login from "./components/Login";

import SignUp from "./components/SignUp";

import Dashboard from "./components/Dashboard";
import User from "./components/User";

import Orders from "./components/Orders";
import Report from "./components/Feedback";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className={toggle ? "col-2 d-none" : "col-2 w-auto"}>
          <Sidebar />
        </div>
        <div className="col">
          {/* <Navbar Toggle={Toggle} /> */}
          <Navbar Toggle={Toggle} />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/" element={<SignUp />} />

            <Route path="/login" element={<Login />} />

            <Route path="/orders" element={<Orders />} />
            <Route path="/feedback" element={<Report />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
