# Current Status

This repository has been archived due to no longer having relevant use in the current state of Connie.

# Prisma Day 2021 Workshop

This is the sample app built for Jed's Prisma Day 2021 Workshop Woot!gt

It's both the front and back-end for a Blog built with Prisma, KeystoneJS, GraphQL, Next.js and Tailwind.

The App includes public auth and signup, role-based access control, and custom design-system based components in the Content field. Content authors can embed Polls in post content, and authenticated visitors can vote on responses.

## About KeystoneJS

**Keystone 6** is the next-gen CMS for Node.js built with Prisma, Apollo Server, and Next.js.

Fully open source, it's not just a great headless CMS, it's also a powerful API server and app back-end.

Learn more at [keystonejs.com](https://keystonejs.com)

## Running this app

Make sure you have:

- Node v12 or v14
- Yarn
- Postgres

Then, clone this repo and run `yarn` to install the dependencies.

### Starting the API

Start the API Server first by running `yarn api:dev`. This will start Keystone's GraphQL API and Admin UI on `localhost:3000`

The first time you open that link you will be prompted to create a new user.

### Starting the Site

With the API running, in a separate terminal run `yarn site:dev`. This will start the front-end Next.js app on `localhost:8000`

## About the codebase

The Keystone and Next.js app are colocated in the same repo for ease of demonstration, but you'd often separate them into different packages in a monorepo or even separate repositories.

The back-end files include:

```
keystone.ts
schema.graphql (generated)
schema.prisma (generated)
schema.ts
schema/*
```

The front-end files include:

```
components/*
pages/*
next-env.d.ts
next.config.js
postcss.config.js
tailwind.config.js
utils.js
```

## License

Copyright (c) 2021 Thinkmill Labs Pty Ltd. Licensed under the MIT License.
