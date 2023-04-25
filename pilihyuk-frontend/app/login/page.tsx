import React from "react";
import NextLink from "next/link";
import FormLogin from "./FormLogin";

export default function page() {
  return (
    <div>
      <main className="flex bg-white dark:bg-slate-950 flex-col md:flex-row min-h-screen">
        <div className="w-1/3" />
        <div className="md:border-l dark:border-slate-700/50 relative flex items-center justify-center w-full lg:w-2/5">
          <div className="md:min-h-screen w-full bg-grid-slate-100 dark:bg-grid-slate-800/40 flex items-center md:p-10 justify-center">
            <div className="bg-gradient-to-b from-white dark:from-slate-950 to-white dark:to-slate-950 via-transparent dark:via-transparent absolute w-full h-full" />
            <div className="bg-gradient-to-r from-white dark:from-slate-950 to-white dark:to-slate-950 via-transparent dark:via-transparent absolute w-full h-full" />
            <div className="w-full">
              <div className="justify-center sm:justify-start flex sm:flex-none border-b sm:border-none sm:border-transparent sm:shadow-none relative">
                <NextLink
                  className="flex shrink-0 md:-ml-[5.25rem] mb-6 md:mb-0 pt-6 md:pt-0 items-center focus:outline-none"
                  href="/"
                >
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="w-16 md:w-20 h-auto"
                    alt="Flowbite Logo"
                  />
                  <div className="md:hidden block ml-2 text-xl font-semibold text-slate-800">
                    Pilih Yuk
                  </div>
                </NextLink>
              </div>
              <FormLogin />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
