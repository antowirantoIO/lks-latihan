import React, { useEffect, useRef, useState } from "react"

import { useDispatch } from "react-redux"
import { setCredentials } from "./authSlice"
import { useLoginMutation } from './authApiSlice'
import { useNavigate } from "react-router-dom"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [credential, setCredential] = useState({
    username: "",
    password: "",
  })
  const [errors, setErrors] = useState({})

  const [login, { isLoading }] = useLoginMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const authResponse = await login(credential).unwrap()
      dispatch(
        setCredentials({
          ...authResponse,
        })
      )
      setCredential({})
      navigate("/dashboard")
    } catch (error) {
      setErrors(error.response?.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setCredential({
              ...credential,
              username: e.target.value,
            })
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setCredential({
              ...credential,
              password: e.target.value,
            })
          }}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
