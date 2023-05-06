import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { setCredentials, logout } from "../../features/auth/authSlice"

const baseQuery = fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/v1",
    credentials: 'same-origin',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if(token) headers.set("Authorization", `Bearer ${token}`)

        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOption) => {
    let result = await baseQuery(args, api, extraOption)

    if(result?.error?.originalStatus === 403){
        console.log("send a new token")

        const refrestResult = baseQuery('/refresh', api, extraOption)
        if(refrestResult?.data){
            const user = api.getState().auth.user

            api.dispatch(
                setCredentials({
                    ...refrestResult.data, user
                })
            )

            result = await baseQuery(args, api, extraOption)
        } else {
            api.dispatch(logout())
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})