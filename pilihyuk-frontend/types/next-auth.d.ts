import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      access_token: string;
      token_type: string;
      user: {
        id: number;
        name: string;
        email: string;
        username: string;
      };
    };
  }
}
