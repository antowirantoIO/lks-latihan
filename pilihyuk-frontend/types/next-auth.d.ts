import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      access_token: string | unknown;
      token_type: string | unknown;
      user: {
        id: number | unknown;
        name: string;
        email: string;
        username: string;
      };
    };
  }
}
