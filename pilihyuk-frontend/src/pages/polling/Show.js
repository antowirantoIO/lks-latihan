import React, {useState, useEffect} from 'react'
import { getData } from '../../hooks/fetch'

export default function Show() {
    const [poll, setPoll] = useState({})
    const [choiceActive, setChoiceActive] = useState(null)

    useEffect(() => {
        const param = window.location.pathname.split('/')[2]
        getData(`poll/${param}`).then((response) => {
            if(response.data.status) setPoll(response.data.data)
        })
    }, [])
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-5 p-4">
        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="block text-3xl font-bold tracking-tight leading-[1.1] text-slate-900 dark:text-white sm:text-4xl">
              {poll.title}
            </div>
            <div className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {poll.description}
            </div>
            <span className="h-px mt-6 mb-5 w-full hidden md:inline-block bg-gradient-to-r from-slate-300 dark:from-slate-700 via-transparent to-transparent"></span>
            <div className="text-slate-500 dark:text-slate-400 flex flex-col gap-y-2 [&_svg]:inline [&_svg]:w-4 [&_svg]:h-4 md:[&_svg]:w-5 md:[&_svg]:h-5 [&_svg]:stroke-1 [&_svg]:mr-2">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-clock-2"
                >
                  <path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"></path>
                  <path d="M12 7v5l3 3"></path>
                  <path d="M4 12h1"></path>
                  <path d="M19 12h1"></path>
                  <path d="M12 19v1"></path>
                </svg>
                {poll.created}
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-calendar"
                >
                  <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                  <path d="M16 3v4"></path>
                  <path d="M8 3v4"></path>
                  <path d="M4 11h16"></path>
                  <path d="M11 15h1"></path>
                  <path d="M12 15v3"></path>
                </svg>
                Deadline on {poll.deadline}
              </p>
            </div>
            <button
              type="button"
              className="mt-10 transition duration-200 bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-50 text-white font-medium  px-5 py-[0.6rem] rounded-lg w-full flex items-center text-sm justify-center sm:w-auto "
            >
              {" "}
              Vote Sekarang
            </button>
          </div>
          <div className="md:col-span-4 flex flex-col gap-5">
            {poll.choices?.map((choice, index) => (
              <>
                <div
                  key={index}
                  onClick={() => setChoiceActive(index)}
                  className={`${
                    choiceActive === index
                      ? "bg-sky-900 bg-opacity-75 text-white  ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                      : "bg-white"
                  } relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`}
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <p
                          className={`font-medium ${
                            choiceActive !== index
                              ? "text-gray-900"
                              : "text-white"
                          }`}
                        >
                          {choice.choise}
                        </p>
                      </div>
                    </div>
                    {choiceActive === index && (
                      <div className="shrink-0 text-white">
                        <CheckIcon className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
