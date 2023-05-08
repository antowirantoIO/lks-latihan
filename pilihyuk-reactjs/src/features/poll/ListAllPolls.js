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
                <div>ListAllPolls</div> 
                {polls.data.map((poll, index) => (
                    <div key={index}>
                        Title: <div>{poll.title}</div>
                        Desc: <div>{poll.description}</div>
                    </div>
                ))}
            </>
        )}
        <Link to="/dashboard">Dashboard</Link>
    </div> 
  )
}

export default ListAllPolls