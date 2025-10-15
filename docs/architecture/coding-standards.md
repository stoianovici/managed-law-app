# Coding Standards

## Critical Fullstack Rules

- **Type Sharing:** Always define shared types in `packages/shared/src/types` and import from `@repo/shared`
- **API Calls:** Never make direct HTTP calls—use Server Actions for mutations, service layer for queries
- **Environment Variables:** Access only through config objects, never `process.env` directly
- **Error Handling:** All API routes and Server Actions must use standard error handler with structured responses
- **State Updates:** Never mutate state directly—use immutable update patterns
- **Server vs Client Components:** Use Server Components by default, only add `'use client'` when needed

## Naming Conventions

| Element          | Convention           | Example                                   |
| ---------------- | -------------------- | ----------------------------------------- |
| Components       | PascalCase           | `UserProfile.tsx`, `WizardShell.tsx`      |
| Hooks            | camelCase with 'use' | `useAuth.ts`, `useWizardNavigation.ts`    |
| API Routes       | kebab-case           | `/api/user-profile`, `/api/sessions/[id]` |
| Database Tables  | snake_case           | `user_profiles`, `discovery_documents`    |
| Types/Interfaces | PascalCase           | `Session`, `PricingBreakdown`             |

---
