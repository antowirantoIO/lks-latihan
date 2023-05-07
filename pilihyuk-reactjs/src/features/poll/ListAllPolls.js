import React from 'react'
import { useGetPollsQuery } from './pollApiSlice'
import { Link } from 'react-router-dom'

const ListAllPolls = () => {
    const {
        data: polls,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPollsQuery()
  return (
    <div>
        {isLoading ? (
            'loading'
        ) : (
            <>
                ListAllPolls {JSON.stringify(polls.data)}
            </>
        )} 
        <Link to="/dashboard">Dashboard</Link>
    </div>
  )
}

export default ListAllPolls