# Development Workflow

## Local Development Setup

```bash
# Clone and install
git clone <repo>
cd ai-discovery-wizard
pnpm install

# Configure environment
cp apps/web/.env.local.example apps/web/.env.local
# Edit .env.local with API keys

# Generate types and seed data
pnpm generate-types
pnpm seed

# Start development server
pnpm dev
```

## Development Commands

```bash
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm test             # Run tests
pnpm lint             # ESLint
pnpm type-check       # TypeScript check
pnpm format           # Prettier formatting
```

---
