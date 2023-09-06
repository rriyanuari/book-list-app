import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Pages
import Login from "./pages/Login/index.jsx";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Books from "./pages/Books";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<Login />} />
        {/* <Route index element={<Login />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/books" element={<Books />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
