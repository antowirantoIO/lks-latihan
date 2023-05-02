"use client";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "react-query";
import queryClient from "@/hooks/queryClient";
import { Toaster } from "react-hot-toast";

export default function App({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <Toaster position="bottom-right" reverseOrder={false} />
        {children}
      </SessionProvider>
    </QueryClientProvider>
  );
}
