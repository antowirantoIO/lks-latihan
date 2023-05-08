import React from 'react'
import { useSelector } from 'react-redux'

const Index = () => {
  const auth = useSelector((state) => state.auth)
  return (
    <div>Index {JSON.stringify(auth)}</div>
  )
}

export default Index