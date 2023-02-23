import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const res = await axios({
          method: "post",
          url: "http://localhost:5000/api/auth/employee/login",
          data: {
            email: email,
            password: password,
          },
        });
        return res.data.result;
      },
    }),
  ],
};

export default NextAuth(authOptions);
