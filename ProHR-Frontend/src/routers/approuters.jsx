import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import AddEmployee from "../components/Forms/AddEmployee";
import Update from "../components/Forms/Update";
import Attendance from "../components/Forms/Attendance";
import PrivateRoute from "../components/PrivateRoute";

function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Home" element={<PrivateRoute element={<Home />} />} />
        <Route path="Add" element={<PrivateRoute element={<AddEmployee />} />} />
        <Route path="Update" element={<PrivateRoute element={<Update />} />} />
        <Route path="Attendance" element={<PrivateRoute element={<Attendance />} />} />
      </Routes>
    </Router>
  );
}

export default AppRouters;
