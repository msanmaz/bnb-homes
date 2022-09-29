This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


There is an admin panel on the /admin route, it allows adding new house, also adding images in  asc order. I've used GCP/Firestore to store images and then upload it to the PostgreSQL server in an async way, the website is still on development 
