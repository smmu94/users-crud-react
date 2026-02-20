# User CRUD App with React

A user management web application built with Next.js as a technical assessment. It allows full CRUD operations over a REST API with a clean, responsive interface.

🔗 **Live demo:** [https://users-crud-react-three.vercel.app](https://users-crud-react-three.vercel.app)

---

## Features

- **User list** with pagination and column sorting
- **User detail** view with full profile information
- **Create user** with form validation
- **Edit user** with pre-filled form and validation
- Skeleton loading states and error handling
- Responsive design (desktop and mobile)
- Toast notifications for user feedback

---

## Tech stack

| Tool | Purpose |
|------|---------|
| [Next.js 15](https://nextjs.org/) | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [shadcn/ui](https://ui.shadcn.com/) | UI components |
| [TanStack Table](https://tanstack.com/table) | Table with sorting and pagination |
| [Zod](https://zod.dev/) | Form validation |
| [json-server](https://github.com/typicode/json-server) | Mock REST API with real persistence |

---

## Project structure

```
src/
  app/                    # Next.js App Router pages
    users/
      [id]/               # User detail
      [id]/edit/          # Edit user
      create/             # Create user
  components/
    features/             # Feature-specific components
    shared/               # Reusable components
    ui/                   # shadcn/ui components
  lib/
    actions.ts            # Server Actions (create, edit)
    data.ts               # Data fetching functions
    schema.ts             # Zod validation schema
    types.ts              # TypeScript types
```

---

## Getting started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

Clone both repositories:

```bash
# Frontend
git clone https://github.com/smmu94/users-crud-react.git
cd users-crud-react
pnpm install
```

```bash
# API (json-server)
git clone https://github.com/smmu94/user-crud-api-rest.git
cd user-crud-api-rest
npm install
```

### Environment variables

Create a `.env.local` file in the root of the Next.js project:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Running locally

Start the API server first (in a separate terminal):

```bash
cd user-crud-api-rest
node server.js
```

Then start the Next.js dev server:

```bash
cd users-crud-react
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deployment

```bash
pnpm build
pnpm start
```
#### Deployment

The frontend is deployed on Vercel.

On every push to the `main` branch, Vercel automatically:

1. Installs dependencies
2. Runs `pnpm build`
3. Generates the optimized production build
4. Deploys the compiled output

##### No manual build step is required for deployment, as Vercel handles the build pipeline automatically.
---

## API REST

The API is deployed separately and available at:

🔗 [https://user-crud-api-rest.onrender.com](https://user-crud-api-rest.onrender.com)

Source: [https://github.com/smmu94/user-crud-api-rest](https://github.com/smmu94/user-crud-api-rest)

It is a self-hosted [json-server](https://github.com/typicode/json-server) instance deployed on [Render](https://render.com) that provides real CRUD persistence. The original API suggested in the assessment (reqres.in) was used during initial development but does not persist data, which is why json-server was adopted.