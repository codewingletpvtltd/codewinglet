This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Responsive configuration:

- We are using default [tailwind](https://tailwindcss.com/docs/responsive-design#working-mobile-first) breakpoints.
- For responsive we have container and subcontainer classes.
- In figma we don't have the same breakpoints as in the tailwind. so, we need to see closest breakpoints in the tailwind. for example, In the figma we have the 1440px breakpoint so according to tailwind we should use the 1280px

## folder structure

- If we have a common component then we need to create that in components folder.
- We are making all pages JSX inside the module folder.
  - If any case we have a component for that page's module then we create one component folder and make only index.tsx and write JSX inside it. don't need to create another file for the same component name.
    For example,
