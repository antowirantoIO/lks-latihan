import React, { useState } from 'react'
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../app/actions/auth'

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [credentals, setCredentials] = useState({
    username: "",
    password: ""
  })

  const [errors, setErrors] = useState(null)

  const handleSubmit = async (e) => {
    await axios.post('auth/login', credentals)
      .then((response) => {
        localStorage.setItem("access_token", response?.data?.access_token)
        dispatch(login({
          isLogin: true,
          token: response?.data?.access_token,
          user: response?.data?.user
        }))
        navigate("/")
      }).catch((error) => {
        setErrors(error.response.data.message)
      })
  }

  return (
    <div>
      {
        errors && (
          <>
            <p>{errors}</p>
          </>
        )
      }
        <form>
            <input type='text' onChange={(e) => {
              setCredentials({
                ...credentals,
                username: e.target.value
              })
            }} placeholder='masukan username' />
            <input type='password' onChange={(e) => {
              setCredentials({
                ...credentals,
                password: e.target.value
              })
            }} placeholder='password' />
            <button type='button' onClick={() => handleSubmit()}>Login</button>
        </form>
    </div>
  )
}
