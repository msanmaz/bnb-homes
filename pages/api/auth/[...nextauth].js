import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from 'lib/prisma'



export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
        name: "Credentials",
        
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            const result = await prisma.User.findUnique({
                where: {
                  username: credentials.username,
                }
      
              });
      
          if (!result) {
            return null
          }

          if(
            credentials.username === result.username &&
            credentials.password === result.password
          ) {
            return result
          }

          return null

        }
      })
  ],

  pages: {
    signIn: "/admin",
  },
  session: {
    strategy:'jwt',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },

  database: process.env.DATABASE_URL,


  callbacks: {
    jwt: async ({ token, user,account }) => {
      if(user){
        user.username = token.username
      }
      return Promise.resolve(token);
    },
    session: async ({ session, token, user }) => {
      if (!session) return null
      session.username = token.username
      session.jti = token.jti
      return Promise.resolve(session)
    }
  },

  debug: true,
  adapter: PrismaAdapter(prisma)
})