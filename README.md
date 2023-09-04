This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev -- http://localhost:3000/
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

Page.js represents the homepage route, when you visit the localhost

Globals.css contain the css for the entire app, imported in the layout

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Project setup

1. created share_prompt folder on desktop
2. open VS Code and click File, open folder, Select share_prompt
3. Terminal type npx create-next-app@latest ./
(./ to create in in the current directory)
4. confirm yes 

![questions](/next-installation.PNG)

// to turn components into client site component: "use client" at top of page (especially for state management) hooks, useState etcotherwise its gonna be server site component 

// Read next.js doc Rendering / server-client
// To implement routing: create a folder 

// Data Fetching: 
// SSR (new rendering and loading )
// SSG ( fetchs and caches data especially for cotent that doesnt change frequesntly)
// ISR : data will be casched after certain timeframe and the reloaded

// Route handlers with file based system for full stack development
// - file based within the app directory in API folder (to keep backend and frontend separare) 

// to improve SEO with metadata

Additionalç

npm install bcrypt mongodb mongoose next auth
(for pass, database, manage database, next authentication)

delete app folder

create a new app folder in route directory 
create a component folder in route directory 
create a models folder in route directory (for database for mondodb. mongoose database)
delete public folder
create a new public folder in route directory 
create a styles folder in route directory 
create a utils folder in route directory 
create a .env file in route directory for pass 

create new file in app folder: page.jsx (to render homepage)

create new file in app folder: layout.jsx (main page, for components to be used in all pages ex: navbar, footer..)
here set language, metadata

In terminal: npm run dev


ERROR: Module not found: Can't resolve 'next-auth/react'

Fix: npm install next-auth

For credentials:
on google search for
console.cloud.google.com
create a new project: Promptopia
select project
on left open nav menu: click API and services
All auth consen screen
create
enter App name
email
Authorized domain
add: http://localhost:3000
add developer contact email information: saeedaimann@gmail.com

click save and continue
go to credentials
creat credentials
OAuth client IDs
app type web application
add Authorized JavaScript origins: http://localhost3000
add Authorized redirect URIS : http://localhost3000
Create

copy the Client IDs and Client secrets to env file:
GOOGLE_ID=112017047084-r3j96qcdqf8v0l5ef8phksgme0kfcqhf.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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


to run the terminal: npm run dev
NEXT AUTH SETUP:
https://next-auth.js.org/getting-started/example

DATABASE MONGODB

sign in mongodb atlas

https://cloud.mongodb.com/v2/64ef66ec7f94f72a923b2987#/overview

Click "Create

Shared/ free

Click create cluster

Click Database access on left
create user with setting up password

click Network access, Add IP address
add access from anywhere 000 to be accessible from anywhere
Click database, connect, Drivers

Copu Mongodb URI
.env: create variable MONGODB_URI
paste the URI and change <password> with actual password
