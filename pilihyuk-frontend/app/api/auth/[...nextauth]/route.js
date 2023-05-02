import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60, // 1 days
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        try {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            credentials
          );
          return Promise.resolve(res.data);
        } catch (e) {
          const msg = e.response.data.message;
          throw new Error(msg);
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },

  pages: {
    signIn: "/",
  },
  secret: process.env.NEXT_JWT_SECRET,
});

export { handler as GET, handler as POST };
