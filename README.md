## Getting Started
This is a [Next.js](https://nextjs.org/) app. First to start this project run `npm install` to install all the libreries.
Then, create a file in the root folder with the name `.env.local` to set the variables:

```
KEYCLOAK_ID= Your id from keycloak
KEYCLOAK_SECRET= Your secret Keycloak
KEYCLOAK_ISSUER= Your issuer keycloak
GITHUB_ID= Your github id
GITHUB_SECRET= Your github ud
```
And last run the app with:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages. The page `http://localhost:3000/public` not required to signIn. The oter page like `http://localhost:3000/groups` and `http://localhost:3000/user` require signIn 


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## NextAuth.js

This project use [NextAuth.js](https://next-auth.js.org/getting-started/introduction) for mor information put in the link.
To agregate a new signin put the provider in the file `src/page/api/auth/[...nextauth].js` as shown in provider on the page from [NextAuth.js](https://next-auth.js.org/providers/)
