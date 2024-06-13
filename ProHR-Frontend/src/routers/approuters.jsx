import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AddEmployee from "../components/Forms/AddEmployee";
import Update from "../components/Forms/Update";

function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Home" element={<Home />} />
        <Route path="Add" element={<AddEmployee />} />
        <Route path="Update" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default AppRouters;
