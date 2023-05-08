import React, { useEffect, useState } from "react"
import axios from "../../api/axios"

export default function Index() {
  const [polls, setPolls] = useState(null)
  const [loading, setLoading] = useState(true)

  const getPolls = async () => {
    setLoading(true)
    await axios
      .get("poll")
      .then((response) => {
        setPolls(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
    setLoading(false)
  }

  useEffect(() => {
    polls === null && getPolls()
  }, [polls])

  return loading ? (
    <>
      <div>Loading Data</div>
    </>
  ) : (
    <>
      <div>Index All Polls {JSON.stringify(polls)}</div>
    </>
  )
}
