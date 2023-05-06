import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>index

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Index