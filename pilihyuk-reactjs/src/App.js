import { Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"

import Homepage from "./features/homepage/Index"

import Login from "./features/auth/Login"
import ProtectAuth from "./features/auth/ProtectAuth"

import Dashboard from "./features/dashboard/Index"

import ListAllPolls from "./features/poll/ListAllPolls"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />} />

        <Route element={<ProtectAuth />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="polls" element={<ListAllPolls />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App