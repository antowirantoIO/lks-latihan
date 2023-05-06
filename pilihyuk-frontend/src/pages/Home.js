import React, { useEffect, useState } from 'react'
import Polling from "./../components/Icons/Polling"
import { Link } from 'react-router-dom';
import { getData } from '../hooks/fetch';

export default function Home() {
  const [pollings, setPollings] = useState([])

  useEffect(() => {
    getData('poll').then((response) => {
      if(response.data.status) setPollings(response.data.data);
    })
  }, [])
  return (
    <div>
      <section className="py-20 bg-white dark:bg-gray-900 lg:pt-20 lg:pb-16">
        <div className="px-4 mx-auto max-w-8xl lg:px-4 lg:text-center">
          <a
            className="inline-flex items-center justify-between px-1 py-1 pr-4 mb-5 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200"
            role="alert"
            href="/"
          >
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>
            <span className="mr-2 text-sm font-medium">
              YukPilih sekarang juga!
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 lg:font-extrabold lg:text-6xl lg:leading-none dark:text-white lg:text-center xl:px-36 lg:mb-7">
            Ayo Mulai Voting Sekarang!
          </h1>
          <p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl xl:px-60">
            Yuk Pilih adalah aplikasi yang memudahkan anda untuk melakukan
            polling secara online. dan juga memudahkan anda untuk melihat hasil
            polling yang telah dilakukan.
          </p>
          <div className="flex flex-col mb-8 md:flex-row lg:justify-center">
            <a
              href="/"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center"
            >
              Pilih Sekarang
            </a>
            <Link
              to="/polling/create"
              className="text-gray-600 bg-white-100 hover:bg-gray-100 hover:text-blue-600 border border-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700 font-medium rounded-lg text-base px-6 py-2.5 text-center inline-flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span className="ml-2">Buat Polling</span>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row lg:justify-center">
            <Polling />
          </div>
        </div>
      </section>
      <section className="border-t border-b border-gray-100 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-10 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 lg:text-center dark:text-white md:text-4xl">
            Polling Terbaru
          </h2>

          {/* <p class="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl lg:px-64 lg:mb-16">
           Kamu bisa melihat polling terbaru yang telah dibuat oleh admin.
          </p> */}
          <div className="w-full mb-6">
            <div className="flex flex-col items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-700 sm:flex-row">
              <div className="flex-shrink-0 w-full sm:w-auto sm:flex">
                <div className="relative flex-shrink-0 w-full mb-4 sm:mb-0 sm:mr-4 sm:w-64 lg:w-96">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <label htmlFor="search" className="hidden">
                    Search block sections:
                  </label>
                  <input
                    id="search"
                    type="text"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search block sections"
                    defaultValue=""
                  />
                </div>
                <label htmlFor="category" className="hidden">
                  Select category:
                </label>
                <select
                  id="category"
                  className="bg-white border border-gray-300 text-gray-900 sm:w-40 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="all" selected="">
                    All categories
                  </option>
                  <option value="marketing">Marketing UI</option>
                  <option value="application">Application UI</option>
                  <option value="publisher">Publisher UI</option>
                </select>
              </div>
              <div className="hidden text-sm text-gray-600 dark:text-gray-400 sm:block">
                Showing 52 results.
              </div>
            </div>
          </div>

          <div className="container px-4 mx-auto h-full">
            <div className="flex items-stretch -mx-4">
              {pollings.map((polling, index) => (
                <div className="w-full p-4 lg:w-2/6">
                  <div className="block h-full p-6 overflow-hidden bg-white rounded shadow">
                    <div className="flex justify-between mb-4">
                      <div className="flex items-center">
                        <div>
                          <div className="flex mb-2">
                            <span
                              className="flex items-center justify-center px-2 py-1 mr-2 text-xs text-green-500 rounded bg-green-50"
                              data-config-id="label1"
                            >
                              {new Date(pollings[0].deadline).getTime() >
                              new Date().getTime() ? (
                                <>OPEN</>
                              ) : (
                                <>CLOSED</>
                              )}
                            </span>
                            <h3 className="font-medium" data-config-id="name1">
                              {polling.title}
                            </h3>
                          </div>
                          <p
                            className="text-sm text-gray-500"
                            data-config-id="job1"
                          >
                            {polling.created}
                          </p>
                        </div>
                      </div>
                      <button className="self-start mt-6 focus:outline-none">
                        <svg
                          className="w-3 h-3 text-gray-200"
                          viewBox="0 0 12 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 0.666687C5.26667 0.666687 4.66667 1.26669 4.66667 2.00002C4.66667 2.73335 5.26667 3.33335 6 3.33335C6.73333 3.33335 7.33333 2.73335 7.33333 2.00002C7.33333 1.26669 6.73333 0.666687 6 0.666687ZM1.33333 0.666687C0.6 0.666687 0 1.26669 0 2.00002C0 2.73335 0.6 3.33335 1.33333 3.33335C2.06667 3.33335 2.66667 2.73335 2.66667 2.00002C2.66667 1.26669 2.06667 0.666687 1.33333 0.666687ZM10.6667 0.666687C9.93333 0.666687 9.33333 1.26669 9.33333 2.00002C9.33333 2.73335 9.93333 3.33335 10.6667 3.33335C11.4 3.33335 12 2.73335 12 2.00002C12 1.26669 11.4 0.666687 10.6667 0.666687Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="mb-7">
                      <p className="text-sm" data-config-id="desc1">
                        {polling.description}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <span className="inline-block mr-2">
                            <svg
                              width={14}
                              height={18}
                              viewBox="0 0 14 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.6413 9.65837C10.5396 9.61788 10.4308 9.59783 10.3213 9.59937C10.2118 9.60091 10.1036 9.624 10.003 9.66734C9.90243 9.71067 9.81135 9.7734 9.73499 9.85193C9.65864 9.93046 9.5985 10.0233 9.55801 10.125C9.51752 10.2268 9.49747 10.3356 9.49901 10.4451C9.50054 10.5546 9.52364 10.6628 9.56697 10.7634C9.61031 10.864 9.67303 10.955 9.75156 11.0314C9.8301 11.1077 9.9229 11.1679 10.0247 11.2084C11.2413 11.6917 11.9997 12.4417 11.9997 13.1667C11.9997 14.35 9.94967 15.6667 6.99967 15.6667C4.04967 15.6667 1.99967 14.35 1.99967 13.1667C1.99967 12.4417 2.75801 11.6917 3.97467 11.2084C4.18022 11.1266 4.34486 10.9665 4.43237 10.7634C4.51989 10.5602 4.52312 10.3306 4.44134 10.125C4.35957 9.91949 4.19949 9.75486 3.99632 9.66734C3.79316 9.57982 3.56355 9.5766 3.35801 9.65837C1.46634 10.4084 0.333008 11.7167 0.333008 13.1667C0.333008 15.5 3.25801 17.3334 6.99967 17.3334C10.7413 17.3334 13.6663 15.5 13.6663 13.1667C13.6663 11.7167 12.533 10.4084 10.6413 9.65837ZM6.16634 7.2167V13.1667C6.16634 13.3877 6.25414 13.5997 6.41042 13.756C6.5667 13.9122 6.77866 14 6.99967 14C7.22069 14 7.43265 13.9122 7.58893 13.756C7.74521 13.5997 7.83301 13.3877 7.83301 13.1667V7.2167C8.61856 7.01388 9.30316 6.53151 9.75851 5.86003C10.2139 5.18855 10.4087 4.37405 10.3064 3.5692C10.2042 2.76436 9.81196 2.02443 9.2032 1.4881C8.59445 0.951778 7.81098 0.655884 6.99967 0.655884C6.18836 0.655884 5.4049 0.951778 4.79615 1.4881C4.18739 2.02443 3.79514 2.76436 3.69291 3.5692C3.59068 4.37405 3.7855 5.18855 4.24084 5.86003C4.69618 6.53151 5.38079 7.01388 6.16634 7.2167ZM6.99967 2.33337C7.32931 2.33337 7.65154 2.43112 7.92562 2.61425C8.19971 2.79739 8.41333 3.05769 8.53947 3.36223C8.66562 3.66677 8.69862 4.00189 8.63432 4.32519C8.57001 4.64849 8.41127 4.94546 8.17818 5.17855C7.9451 5.41164 7.64813 5.57037 7.32482 5.63468C7.00152 5.69899 6.66641 5.66598 6.36187 5.53984C6.05732 5.41369 5.79703 5.20007 5.61389 4.92599C5.43076 4.65191 5.33301 4.32967 5.33301 4.00004C5.33301 3.55801 5.5086 3.13409 5.82116 2.82153C6.13372 2.50896 6.55765 2.33337 6.99967 2.33337Z"
                                fill="#C2C9D2"
                              />
                            </svg>
                          </span>
                          <h4
                            className="text-sm text-gray-500"
                            data-config-id="label1-1"
                          >
                            Deadline
                          </h4>
                        </div>
                        <span
                          className="inline-block px-2 py-1 mr-2 text-xs text-blue-500 rounded bg-blue-50"
                          data-config-id="label1"
                        >
                          {polling.deadline}
                        </span>
                      </div>
                      <div className="flex flex-wrap -mx-2">
                        <div className="w-full px-2 mb-2 md:w-1/2 md:mb-0">
                          <Link
                            className="flex justify-center gap-2 py-2 text-sm text-white align-baseline transition duration-200 bg-indigo-500 rounded hover:bg-indigo-600"
                            to={`/polling/${polling.id}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-topology-star-ring"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M14 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                              <path d="M14 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                              <path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                              <path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                              <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                              <path d="M6 12h4" />
                              <path d="M14 12h4" />
                              <path d="M13.5 5.5l5 5" />
                              <path d="M5.5 13.5l5 5" />
                              <path d="M13.5 18.5l5 -5" />
                              <path d="M10.5 5.5l-5 5" />
                              <path d="M12 6v4" />
                              <path d="M12 14v4" />
                            </svg>
                            <div
                              className="flex items-center"
                              data-config-id="primary-action1"
                            >
                              Lakukan Polling
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="w-full p-4 lg:w-2/6">
                <div className="block h-full p-6 overflow-hidden bg-white rounded shadow">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center">
                      <div>
                        <div className="flex mb-2">
                          <span
                            className="flex items-center justify-center px-2 py-1 mr-2 text-xs text-red-500 rounded bg-red-50"
                            data-config-id="label1"
                          >
                            CLOSE
                          </span>
                          <h3 className="font-medium" data-config-id="name1">
                            Lebih memilih kerja secara WFH atau WFO?
                          </h3>
                        </div>
                        <p
                          className="text-sm text-gray-500"
                          data-config-id="job1"
                        >
                          7 hari yang lalu
                        </p>
                      </div>
                    </div>
                    <button className="self-start mt-6 focus:outline-none">
                      <svg
                        className="w-3 h-3 text-gray-200"
                        viewBox="0 0 12 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 0.666687C5.26667 0.666687 4.66667 1.26669 4.66667 2.00002C4.66667 2.73335 5.26667 3.33335 6 3.33335C6.73333 3.33335 7.33333 2.73335 7.33333 2.00002C7.33333 1.26669 6.73333 0.666687 6 0.666687ZM1.33333 0.666687C0.6 0.666687 0 1.26669 0 2.00002C0 2.73335 0.6 3.33335 1.33333 3.33335C2.06667 3.33335 2.66667 2.73335 2.66667 2.00002C2.66667 1.26669 2.06667 0.666687 1.33333 0.666687ZM10.6667 0.666687C9.93333 0.666687 9.33333 1.26669 9.33333 2.00002C9.33333 2.73335 9.93333 3.33335 10.6667 3.33335C11.4 3.33335 12 2.73335 12 2.00002C12 1.26669 11.4 0.666687 10.6667 0.666687Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mb-7">
                    <p className="text-sm" data-config-id="desc1">
                      Ini adalah polling untuk mengetahui pilihan Anda terkait
                      bekerja dari rumah (WFH) atau bekerja dari kantor (WFO).
                      Kami ingin mengetahui preferensi Anda terkait dengan cara
                      kerja yang lebih efektif dan efisien di masa sekarang.
                      Mohon berikan jawaban Anda dan alasan mengapa Anda ...
                    </p>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="inline-block mr-2">
                        <svg
                          width={14}
                          height={18}
                          viewBox="0 0 14 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.6413 9.65837C10.5396 9.61788 10.4308 9.59783 10.3213 9.59937C10.2118 9.60091 10.1036 9.624 10.003 9.66734C9.90243 9.71067 9.81135 9.7734 9.73499 9.85193C9.65864 9.93046 9.5985 10.0233 9.55801 10.125C9.51752 10.2268 9.49747 10.3356 9.49901 10.4451C9.50054 10.5546 9.52364 10.6628 9.56697 10.7634C9.61031 10.864 9.67303 10.955 9.75156 11.0314C9.8301 11.1077 9.9229 11.1679 10.0247 11.2084C11.2413 11.6917 11.9997 12.4417 11.9997 13.1667C11.9997 14.35 9.94967 15.6667 6.99967 15.6667C4.04967 15.6667 1.99967 14.35 1.99967 13.1667C1.99967 12.4417 2.75801 11.6917 3.97467 11.2084C4.18022 11.1266 4.34486 10.9665 4.43237 10.7634C4.51989 10.5602 4.52312 10.3306 4.44134 10.125C4.35957 9.91949 4.19949 9.75486 3.99632 9.66734C3.79316 9.57982 3.56355 9.5766 3.35801 9.65837C1.46634 10.4084 0.333008 11.7167 0.333008 13.1667C0.333008 15.5 3.25801 17.3334 6.99967 17.3334C10.7413 17.3334 13.6663 15.5 13.6663 13.1667C13.6663 11.7167 12.533 10.4084 10.6413 9.65837ZM6.16634 7.2167V13.1667C6.16634 13.3877 6.25414 13.5997 6.41042 13.756C6.5667 13.9122 6.77866 14 6.99967 14C7.22069 14 7.43265 13.9122 7.58893 13.756C7.74521 13.5997 7.83301 13.3877 7.83301 13.1667V7.2167C8.61856 7.01388 9.30316 6.53151 9.75851 5.86003C10.2139 5.18855 10.4087 4.37405 10.3064 3.5692C10.2042 2.76436 9.81196 2.02443 9.2032 1.4881C8.59445 0.951778 7.81098 0.655884 6.99967 0.655884C6.18836 0.655884 5.4049 0.951778 4.79615 1.4881C4.18739 2.02443 3.79514 2.76436 3.69291 3.5692C3.59068 4.37405 3.7855 5.18855 4.24084 5.86003C4.69618 6.53151 5.38079 7.01388 6.16634 7.2167ZM6.99967 2.33337C7.32931 2.33337 7.65154 2.43112 7.92562 2.61425C8.19971 2.79739 8.41333 3.05769 8.53947 3.36223C8.66562 3.66677 8.69862 4.00189 8.63432 4.32519C8.57001 4.64849 8.41127 4.94546 8.17818 5.17855C7.9451 5.41164 7.64813 5.57037 7.32482 5.63468C7.00152 5.69899 6.66641 5.66598 6.36187 5.53984C6.05732 5.41369 5.79703 5.20007 5.61389 4.92599C5.43076 4.65191 5.33301 4.32967 5.33301 4.00004C5.33301 3.55801 5.5086 3.13409 5.82116 2.82153C6.13372 2.50896 6.55765 2.33337 6.99967 2.33337Z"
                            fill="#C2C9D2"
                          />
                        </svg>
                      </span>
                      <h4
                        className="text-sm text-gray-500"
                        data-config-id="label1-1"
                      >
                        Deadline
                      </h4>
                    </div>
                    <span
                      className="inline-block px-2 py-1 mr-2 text-xs text-blue-500 rounded bg-blue-50"
                      data-config-id="label1"
                    >
                      1 Mei 2023
                    </span>
                  </div>
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full px-2 mb-2 md:w-1/2 md:mb-0">
                      <a
                        className="flex justify-center gap-2 py-2 text-sm text-white align-baseline transition duration-200 bg-indigo-500 rounded hover:bg-indigo-600"
                        href="/"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-eye-check"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                          <path d="M11.143 17.961c-3.221 -.295 -5.936 -2.281 -8.143 -5.961c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-.222 .37 -.449 .722 -.68 1.057"></path>
                          <path d="M15 19l2 2l4 -4"></path>
                        </svg>
                        <div
                          className="flex items-center"
                          data-config-id="primary-action1"
                        >
                          Hasil Polling
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
