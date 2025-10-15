# AI Discovery Wizard

A modern, AI-powered discovery wizard for legal case evaluation and pricing estimation.

## Prerequisites

- **Node.js**: 20 LTS or higher
- **pnpm**: 8.0.0 or higher
- **Supabase Account**: For database and storage

## Project Structure

This project uses a monorepo structure with pnpm workspaces:

```
ai-discovery-wizard/
├── apps/
│   └── web/                      # Next.js application
│       ├── app/                  # App Router (pages & API routes)
│       ├── components/           # React components
│       ├── lib/                  # Services, actions, utilities
│       ├── public/               # Static assets
│       └── tests/                # Tests
├── packages/
│   ├── shared/                   # Shared types & utilities
│   ├── ui/                       # Shared UI components
│   └── database/                 # Database schema & migrations
├── scripts/                      # Build and utility scripts
├── docs/                         # Documentation
└── package.json                  # Root workspace config
```

## Technology Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript 5.7
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL (via Supabase)
- **Deployment**: Vercel (frontend + backend), Supabase (database)
- **Testing**: Vitest, React Testing Library
- **CI/CD**: GitHub Actions

## Getting Started

### 1. Clone the Repository

```bash
git clone <repo-url>
cd managed-law-app
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Configure Environment Variables

Copy the example environment file and add your Supabase credentials:

```bash
cp apps/web/.env.local.example apps/web/.env.local
```

Edit `apps/web/.env.local` and add your Supabase project credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Get these values from your [Supabase Dashboard](https://supabase.com/dashboard) → Project Settings → API.

### 4. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

Run these commands from the project root:

| Script              | Description                                  |
| ------------------- | -------------------------------------------- |
| `pnpm dev`          | Start Next.js development server             |
| `pnpm build`        | Build the application for production         |
| `pnpm test`         | Run tests across all packages                |
| `pnpm lint`         | Run ESLint across all packages               |
| `pnpm type-check`   | Run TypeScript type checking                 |
| `pnpm format`       | Format code with Prettier                    |
| `pnpm format:check` | Check code formatting without making changes |

## Development Workflow

### Creating a New Branch

```bash
git checkout -b feature/your-feature-name
```

### Making Changes

1. Make your code changes
2. Run linting and type checking: `pnpm lint && pnpm type-check`
3. Run tests: `pnpm test`
4. Format code: `pnpm format`

### Committing Changes

The project uses Husky pre-commit hooks to automatically:

- Lint staged files
- Format code with Prettier

Simply commit as usual:

```bash
git add .
git commit -m "Your commit message"
```

If linting fails, the commit will be blocked. Fix the issues and try again.

### Creating a Pull Request

1. Push your branch: `git push origin feature/your-feature-name`
2. Open a pull request on GitHub
3. GitHub Actions will automatically:
   - Run linting and type checking
   - Run tests
   - Create a Vercel preview deployment
4. Request review from team members
5. Once approved and CI passes, merge to `main`

## Deployment

### Automatic Deployments

- **Preview**: Every pull request automatically deploys a preview to Vercel
- **Production**: Merging to `main` automatically deploys to production

### Manual Deployment

To deploy manually via Vercel CLI:

```bash
npx vercel
```

## Architecture Documentation

For detailed architecture documentation, see:

- [PRD (Product Requirements)](docs/prd.md)
- [Architecture Overview](docs/architecture.md)
- [Tech Stack](docs/architecture/tech-stack.md)
- [Coding Standards](docs/architecture/coding-standards.md)
- [API Specification](docs/architecture/api-specification.md)

## Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with coverage
pnpm test --coverage
```

### Test Organization

```
apps/web/tests/
├── unit/             # Unit tests for components, hooks, utilities
├── integration/      # Integration tests for API routes and actions
└── e2e/              # End-to-end test documentation
```

## Troubleshooting

### Port 3000 Already in Use

If port 3000 is already in use, you can change it:

```bash
PORT=3001 pnpm dev
```

### Supabase Connection Issues

1. Verify your environment variables are set correctly in `.env.local`
2. Check that your Supabase project is running
3. Ensure your IP is allowed in Supabase dashboard (if using RLS)

### Build Errors

1. Clear Next.js cache: `rm -rf apps/web/.next`
2. Reinstall dependencies: `rm -rf node_modules && pnpm install`
3. Check for TypeScript errors: `pnpm type-check`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes following the coding standards
4. Write tests for new features
5. Ensure all tests pass
6. Submit a pull request

## License

[Add your license information here]

## Support

For questions or issues, please:

- Check existing GitHub issues
- Create a new issue with details about your problem
- Include error messages and steps to reproduce

## Links

- [Supabase Dashboard](https://supabase.com/dashboard)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
