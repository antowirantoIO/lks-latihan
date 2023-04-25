import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  session: {
    strategy: "jwt",
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
            "http://127.0.0.1:8000/api/v1/auth/login",
            credentials
          );
          return Promise.resolve(res.data);
        } catch (e: any) {
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
      // session.user = token;
      session.user.access_token = token.access_token;
      session.user.token_type = token.token_type;
      session.user.user.id = token?.user;
      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
  },
  secret: "A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z",
});

export { handler as GET, handler as POST };
