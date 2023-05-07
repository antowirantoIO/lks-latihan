import { apiSlice } from "../../app/api/apiSlice";

const pollApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPolls: builder.query({
            query: () => "/poll",
            keepUnusedDataFor: 4
        }),
        createPoll: builder.mutation({
            query: poll => ({
                url: "/poll",
                method: "POST",
                body: { ...poll }
            })
        })
    })
})

export const {
    useGetPollsQuery,
    useCreatePollMutation
} = pollApiSlice