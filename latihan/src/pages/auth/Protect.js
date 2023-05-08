import React from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export default function Protect() {
  const token = localStorage.getItem("access_token")
  const location = useLocation()
  return token ? (
    <Outlet />
  ) : (
    <Navigate
      to={"login"}
      state={{
        from: location,
      }}
      replace
    />
  )
}
