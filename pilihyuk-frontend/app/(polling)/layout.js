"use client";
import React, { useEffect } from "react";
import NextLink from "next/link";
import useSessionUser from "@/stores/useSessionAuthStore";
import { signOut, useSession } from "next-auth/react";
import { postData } from "@/hooks/fetch";

export default function layout({ children }) {
  const { setSessionUser, sessionUser, statusAuth } = useSessionUser((state) => state)
  const { data: session, status } = useSession();

  const handleLogout = async () => {
    const res = await postData(
      "auth/logout",
      {},
      false,
      sessionUser?.access_token ?? null
    );
    localStorage.clear();
    await signOut();
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };


  useEffect(() => {
    if (session) setSessionUser(session.user, status);
  }, [session]);

  return (
    <div>
      <nav className="sticky top-0 left-0 z-20 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-600">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <a href="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-800">
              YukPilih
            </span>
          </a>
          <div className="flex md:order-2">
            {sessionUser && statusAuth == "authenticated" ? (
              <div className="flex items-center justify-end flex-1 gap-3">
                <div>Hallo, {sessionUser.user.name}</div>
                <div
                  onClick={handleLogout}
                  role="button"
                  className="px-4 py-2 mr-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Logout
                </div>
              </div>
            ) : (
              <NextLink
                href="/login"
                type="button"
                className="px-4 py-2 mr-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </NextLink>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
