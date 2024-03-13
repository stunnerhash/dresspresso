import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const options: NextAuthOptions = {
  providers:[
    GoogleProvider({
      profile(profile){
        console.log("profile google", profile);
       
        return {
          ...profile,
          id: profile.sub,
          image:profile.picture
        }
      },
      clientId:process.env.GOOGLE_ID || '',
      clientSecret:process.env.GOOGLE_SECRET || '',
    }),
  ],
  pages:{
    signIn:'auth/signin',
    signOut:'auth/signout',
  }
}