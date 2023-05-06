import React from "react"
import { useSelector } from "react-redux"
import { selectCurrentToken, selectCurrentUser } from "../auth/authSlice"

const Index = () => {
  const user = useSelector(selectCurrentToken)
  return <h1>Welcomr {JSON.stringify(user)}</h1>
}

export default Index
