"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import useSessionUser from "@/stores/useSessionAuthStore";
import { toast } from "react-hot-toast";

export default function FormLogin() {
    const { sessionUser, statusAuth } = useSessionUser();
    
    const router = useRouter();
    if (statusAuth || statusAuth == "authenticated") {
      router.push("/dashboard");
    }
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [hidePassword, setHidePassword] = useState();

    const showPassword = (value) => {
      setHidePassword(value);
      let inpuPassword = document.getElementById("inputPassword");
      if (inpuPassword.type === "password") inpuPassword.type = "text";
      else inpuPassword.type = "password";
    };


    const {
      handleSubmit,
      register,
      reset,
      clearErrors,
      formState: { errors },
    } = useForm();

    const submitData = async (form) => {
      setLoading(true);
      const creadentials = {
        ...form,
        redirect: false,
        callbackUrl: "/",
      };
      const result = await signIn("credentials", creadentials);
      if (result.error) {
        setError(result.error);
        toast.error(result.error);
      } else {
        if (typeof window !== "undefined") window.location.href = "/dashboard";
        clearErrors();
        reset();
      }
      setLoading(false);
    };


  return (
    <div>
      <form onSubmit={handleSubmit(submitData)}>
        <div>
          <label
            htmlFor="username"
            className="block mb-1 text-sm capitalize text-slate-600 dark:text-slate-200"
          >
            Username
          </label>
          <div className="flex items-stretch h-10 pr-4 overflow-hidden bg-white divide-x rounded-lg focus-within:ring-primary-500 dark:focus-within:ring-primary-500 focus-within:ring-2 focus-within:border-transparent ring-slate-300 ring-1 dark:bg-slate-900 dark:ring-slate-700 divide-slate-300 dark:divide-slate-800 group">
            <span className="text-slate-500 dark:text-slate-400 items-center flex justify-center bg-slate-100 dark:bg-slate-950 h-full px-4 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-at"
              >
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
              </svg>
            </span>
            <input
              type="text"
              className="w-full px-4 bg-transparent border-0 placeholder-slate-400 dark:placeholder-slate-500 text-tiny dark:text-white focus:outline-none focus:ring-0"
              placeholder="Username Kamu"
              {...register("username", {
                required: "Username tidak boleh kosong",
              })}
            />
          </div>
          {errors?.username?.message && (
            <p className="text-sm text-red-600 mt-2 [&:first-letter]:uppercase">
              {errors?.username?.message}
            </p>
          )}
        </div>
        <div className="mt-5">
          <label
            htmlFor="password"
            className="block mb-1 text-sm capitalize text-slate-600 dark:text-slate-200"
          >
            Kata sandi
          </label>
          <div className="flex items-stretch h-10 pr-4 overflow-hidden bg-white divide-x rounded-lg focus-within:ring-primary-500 dark:focus-within:ring-primary-500 focus-within:ring-2 focus-within:border-transparent ring-slate-300 ring-1 dark:bg-slate-900 dark:ring-slate-700 divide-slate-300 dark:divide-slate-800 group">
            <span className="text-slate-500 items-center flex justify-center bg-slate-100 h-full px-4 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-password"
              >
                <path d="M12 10v4" />
                <path d="M10 13l4 -2" />
                <path d="M10 11l4 2" />
                <path d="M5 10v4" />
                <path d="M3 13l4 -2" />
                <path d="M3 11l4 2" />
                <path d="M19 10v4" />
                <path d="M17 13l4 -2" />
                <path d="M17 11l4 2" />
              </svg>
            </span>
            <input
              type="password"
              id="inputPassword"
              className="w-full px-4 bg-transparent border-0 placeholder-slate-400 dark:placeholder-slate-500 text-tiny dark:text-white focus:outline-none focus:ring-0"
              placeholder="Password Kamu"
              {...register("password", {
                required: "Password tidak boleh kosong",
              })}
            />
            {hidePassword == true ? (
              <div
                role="button"
                onClick={() => showPassword(false)}
                className="text-slate-500 dark:text-slate-400 items-center flex justify-center bg-slate-100 dark:bg-slate-950 h-full px-4 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-1 cursor-pointer -mr-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-eye-off"
                >
                  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                  <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                  <path d="M3 3l18 18" />
                </svg>
              </div>
            ) : (
              <div
                role="button"
                onClick={() => showPassword(true)}
                className="text-slate-500 dark:text-slate-400 items-center flex justify-center bg-slate-100 dark:bg-slate-950 h-full px-4 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-1 cursor-pointer -mr-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-eye"
                >
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                </svg>
              </div>
            )}
          </div>
          {errors?.password?.message && (
            <p className="text-sm text-red-600 mt-2 [&:first-letter]:uppercase">
              {errors?.password?.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={loading ? true : false}
          className="flex items-center justify-center w-full px-4 py-2 my-5 text-sm font-medium text-white transition duration-200 rounded-lg bg-slate-900 dark:text-slate-800 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-primary-500/20 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900 sm:w-auto dark:bg-slate-100 dark:hover:bg-white"
        >
          {loading ? "loading..." : "Masuk"}
        </button>
      </form>
    </div>
  );
}
