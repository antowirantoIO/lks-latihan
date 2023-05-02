import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSessionUser = create(
  persist(
    (set) => ({
      sessionUser: null,
      statusAuth: null,
      setSessionUser: (sessionUser, statusAuth) =>
        set({ sessionUser: sessionUser, statusAuth: statusAuth }),
    }),
    { name: "session-user" }
  )
);

export default useSessionUser;
