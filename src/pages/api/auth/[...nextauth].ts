import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions = {
  callbacks: {
    // async jwt({ token, account }: any) {
    //   // Persist the OAuth access_token to the token right after signin
    //   if (account) {
    //     token.accessToken = account.access_token;
    //   }
    //   return token;
    // },

    // async session({ session, token, user }: any) {
    //   // Send properties to the client, like an access_token from a provider.
    //   console.log({ id: process.env.NEXTAUTH_URL });

    //   session.accessToken = token.accessToken;
    //   return session;
    // },

    async signIn({ user, account, profile, email, credentials }: any) {
      console.log({ user, account, profile, email, credentials });

      return true;
    },
    async redirect({ url, baseUrl }: any) {
      return baseUrl;
    },
    async session({ session, user, token }: any) {
      // console.log({ session, user, token });

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }: any) {
      // console.log({ token, user, account, profile, isNewUser });
      console.log("---------------", [process.env.AUTH0_CLIENT_ID]);

      return token;
    },
  },
  // Configure one or more authentication providers

  providers: [
    // ...add more providers here

    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID || "",
      clientSecret: process.env.AUTH0_CLIENT_SECRET || "",
      issuer: process.env.AUTH0_ISSUER || "",
    }),
  ],
};

export default NextAuth(authOptions);
