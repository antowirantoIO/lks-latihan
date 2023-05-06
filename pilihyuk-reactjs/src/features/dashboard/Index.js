import React from "react"
import { useSelector } from "react-redux"
import { selectCurrentToken, selectCurrentUser } from "../auth/authSlice"
import { Link } from "react-router-dom"

const Index = () => {
  const user = useSelector(selectCurrentUser)
  return (
    <>
    <h1>Welcomr {JSON.stringify(user)}</h1>
    <Link to="/">Home</Link>
    </>
  )
}

export default Index
