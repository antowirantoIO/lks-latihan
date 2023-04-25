"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import Email from "@/components/Icons/Email";

type FormData = {
  username: string;
  password: string;
};

export default function FormLogin() {
  const { data: session, status } = useSession();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const {
    handleSubmit,
    register,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>();

  const submitData = async (form: FormData) => {
    setLoading(true);
    const creadentials = {
      ...form,
      redirect: false,
      callbackUrl: "/",
    };

    const result = await signIn("credentials", creadentials);

    if (result?.error) {
      setError(result.error);
      toast.error(result.error);
    } else {
      window.location.href = "/";
      clearErrors();
      reset();
    }
    setLoading(false);
  };
  return (
    <div className="p-6">
      <div className="relative w-full sm:mx-auto sm:max-w-lg md:max-w-xl">
        <div className="relative">
          <div className="mb-3 lg:mb-6">
            <h1 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white lg:text-xl">
              Masuk ke akun Anda
            </h1>
          </div>
          <form onSubmit={handleSubmit(submitData)}>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm capitalize text-slate-600 dark:text-slate-300"
              >
                Username
              </label>
              <div className="focus-within:ring-primary-500 dark:focus-within:ring-primary-500 focus-within:ring-2 focus-within:border-transparent ring-slate-300 ring-1 dark:bg-slate-900 dark:ring-slate-700 flex items-stretch h-10 divide-x divide-slate-300 dark:divide-slate-800 overflow-hidden group bg-white rounded-lg pr-4">
                <span className="text-slate-500 dark:text-slate-400 items-center flex justify-center bg-slate-100 dark:bg-slate-950 h-full px-4 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-1">
                  <Email />
                </span>
                <input
                  className="placeholder-slate-400 dark:placeholder-slate-500 text-tiny w-full text-slate-600 border-0 bg-transparent focus:outline-none focus:ring-0 p-3"
                  placeholder="Masukkan username Anda"
                  {...register("username", {
                    required: "Username harus diisi",
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
                className="mb-1 block text-sm capitalize text-slate-600 dark:text-slate-300"
              >
                Kata sandi
              </label>
              <div className="focus-within:ring-primary-500 dark:focus-within:ring-primary-500 focus-within:ring-2 focus-within:border-transparent ring-slate-300 ring-1 dark:bg-slate-900 dark:ring-slate-700 flex items-stretch h-10 divide-x divide-slate-300 dark:divide-slate-800 overflow-hidden group bg-white rounded-lg pr-4">
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
                  placeholder="Masukkan kata sandi Anda"
                  className="placeholder-slate-400 dark:placeholder-slate-500 text-tiny w-full text-slate-600 border-0 bg-transparent focus:outline-none focus:ring-0"
                  {...register("password", {
                    required: "Password tidak boleh kosong",
                  })}
                />
              </div>
              {errors?.password?.message && (
                <p className="text-sm text-red-600 mt-2 [&:first-letter]:uppercase">
                  {errors?.password?.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              
              className="my-5 transition duration-200 bg-slate-900 dark:text-slate-800 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-primary-500/20 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900 text-white font-medium  px-4 py-2 rounded-lg w-full flex items-center text-sm justify-center sm:w-auto dark:bg-slate-100 dark:hover:bg-white"
            >
              {loading ? "loading..." : "Masuk"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
