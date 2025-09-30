Next.js Rendering Playground (SSR / SSG / ISR / CSR)

A compact demo app that showcases four rendering strategies in Next.js App Router. It also includes a typed modal form with file upload, Zod validation, and a simple API route.

✨ Features

SSR — server-rendered users page (/ssr)

SSG — statically pre-rendered posts page (/ssg)

ISR — incremental revalidation todos page (/isr)

CSR — client-side fetched posts (/csr)

Modal form with text + file inputs, validated by Zod, POSTs to /api/feedback

UI: shadcn/ui components, Tailwind (semantic, responsive, a11y-first)

Types centralized in src/types

Named exports for components (no default export)

🧰 Tech Stack

Next.js (App Router)

TypeScript

Tailwind CSS 

shadcn/ui (Radix under the hood)

Zod (form validation)

ESLint + Prettier

🚀 Getting Started

# 1) Install deps

npm install

# 2) Start dev server

npm run dev

# http://localhost:3000

Node 18+ recommended.
