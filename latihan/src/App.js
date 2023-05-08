import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Layout from './components/Layout'

import HomepageIndex from './pages/homepage/Index'
import Protect from './pages/auth/Protect'

import PollIndex from './pages/poll/Index'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomepageIndex />} />

        <Route path="/login" element={<Login />} />

        <Route element={<Protect />}>
            <Route path='/polls' element={<PollIndex />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App