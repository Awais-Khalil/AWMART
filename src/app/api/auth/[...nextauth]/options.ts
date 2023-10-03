import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";  // corrected the import

export const options: NextAuthOptions = {
    
    
    
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      // corrected from `credential` to `credentials`
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Enter your Username" },
        password: { label: "Password", type: "password", placeholder: "Enter your Password" },
      },
      async authorize(credentials) {
        const user = { id: "1001", name: "Awais", password: "1234" };
        // added authorization logic
        if (credentials?.username === user.name && credentials?.password === user.password) {
          return user;  // return the user object when credentials match
        }
        return null;  // or null if they don't
      }
    })
  ]
}
