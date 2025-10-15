# Tech Stack

This is the **definitive technology selection** for the entire project. All development must use these exact technologies and versions.

## Technology Stack Table

| Category                 | Technology                          | Version              | Purpose                              | Rationale                                                                                              |
| ------------------------ | ----------------------------------- | -------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| **Frontend Language**    | TypeScript                          | 5.3+                 | Type-safe frontend development       | Catch errors at compile time, better IDE support, self-documenting code                                |
| **Frontend Framework**   | Next.js (App Router)                | 14.1+                | Full-stack React framework           | Server components, built-in API routes, optimized bundling, Vercel deployment, SEO support             |
| **UI Component Library** | shadcn/ui + Radix UI                | Latest               | Accessible, customizable components  | Unstyled primitives (Radix), copy-paste components (shadcn), WCAG AA compliant out of box              |
| **State Management**     | React Context + Zustand             | Zustand 4.5+         | Client state management              | Context for simple state, Zustand for complex global state (pricing, session), avoids Redux complexity |
| **Backend Language**     | TypeScript (Node.js)                | Node 20 LTS          | Server-side logic                    | Code sharing with frontend, consistent tooling, strong ecosystem                                       |
| **Backend Framework**    | Next.js API Routes + Server Actions | 14.1+                | Backend API layer                    | Co-located with frontend, zero CORS config, streaming support, edge-ready                              |
| **API Style**            | REST + Server Actions               | Next.js 14           | Client-server communication          | Server Actions for mutations, REST for public APIs, simpler than GraphQL for MVP                       |
| **Database**             | PostgreSQL (via Supabase)           | 15+                  | Primary data store                   | Relational data (sessions, documents), JSONB for flexible fields, proven reliability                   |
| **Cache**                | Supabase Edge Cache + React Cache   | Native               | Response caching, query optimization | Built-in edge caching, React cache() for request deduplication                                         |
| **File Storage**         | Supabase Storage                    | Native               | PDF storage (temporary)              | Integrated with PostgreSQL RLS, automatic cleanup policies                                             |
| **Authentication**       | None (MVP)                          | N/A                  | Anonymous sessions                   | No auth needed for wizard, session-based tracking sufficient                                           |
| **Frontend Testing**     | Vitest + Testing Library            | Vitest 1.2+, RTL 14+ | Component and unit tests             | Fast (Vite-powered), compatible with Jest, better DX than Jest                                         |
| **Backend Testing**      | Vitest                              | 1.2+                 | API and integration tests            | Same test runner as frontend, TypeScript native, fast execution                                        |
| **E2E Testing**          | Manual (MVP)                        | N/A                  | End-to-end user flows                | Defer Playwright until post-MVP, manual testing sufficient for launch                                  |
| **Build Tool**           | Next.js built-in                    | 14.1+                | Application bundling                 | Turbopack (dev), webpack (prod), zero config, optimized for React                                      |
| **Bundler**              | Turbopack / Webpack                 | Next.js default      | Module bundling                      | Next.js handles bundler selection, Turbopack for dev speed                                             |
| **IaC Tool**             | None (MVP)                          | N/A                  | Infrastructure management            | Vercel + Supabase are managed platforms, no IaC needed initially                                       |
| **CI/CD**                | GitHub Actions                      | Latest               | Automated testing and deployment     | Free for public repos, Vercel integration, simple YAML config                                          |
| **Monitoring**           | Sentry                              | Latest               | Error tracking and performance       | Free tier (5K events/month), rich context, source maps support                                         |
| **Logging**              | Vercel Logs + Supabase Logs         | Native               | Application logging                  | Built-in structured logging, no external service needed for MVP                                        |
| **CSS Framework**        | Tailwind CSS                        | 3.4+                 | Utility-first styling                | Rapid UI development, consistent design system, excellent VS Code support                              |

---
