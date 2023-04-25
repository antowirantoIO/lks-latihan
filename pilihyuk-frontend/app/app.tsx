"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export default function App({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Toaster position="bottom-right" reverseOrder={false} />
        {children}
      </SessionProvider>
    </QueryClientProvider>
  );
}
