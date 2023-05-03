import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/login/Index";
import Layout from "../components/Layouts/Index";

import PollingCreate from "../pages/polling/Create";
import PollingShow from "../pages/polling/Show";

export default function AppRouter() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route path="polling/create" element={<PollingCreate />} />
          <Route path="polling/:id" element={<PollingShow />} />

          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    );
}
