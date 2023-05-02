import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const authMiddleware = async () => {
  const { session } = await useSession({
    required: true,
  });
  const router = useRouter();
  if (!session.data) {
    router.push("/login");
  } else {
    return session.data;
  }
};
