# Technical Assumptions

## Repository Structure

**Monorepo**: Use a single repository with multiple packages to simplify development at MVP stage. Structure:

- `/frontend` - React/Next.js web application
- `/backend` - API server (Node.js/Python)
- `/shared` - Shared types, utilities, constants
- `/docs` - Documentation and architecture decisions

**Rationale**: Monorepo reduces coordination overhead between frontend and backend during rapid MVP iteration. Easier to maintain consistency, share code, and deploy atomically. Consider Turborepo or Nx for build optimization if complexity grows, but start simple with npm/pnpm workspaces.

**Trade-off**: Monorepo over polyrepo—accepts slightly larger repo size for dramatically simpler development workflow (single clone, single dependency install, single version control).

## Service Architecture

**Monolith with API-First Design**: Simple client-server architecture for MVP. Stateless backend exposing RESTful API endpoints, React frontend consuming them.

**Architecture Principles:**

- Frontend: Single-page application (SPA) or server-side rendered (SSR) if SEO is critical
- Backend: Thin API layer handling authentication, session management, LLM orchestration, PDF generation, email sending
- Database: PostgreSQL for structured data (user sessions, discovery documents), Redis/Upstash for session state caching
- Stateless design: All session state persisted in database/cache, not in-memory (enables serverless deployment)

**Avoid Microservices**: Premature at MVP scale (5-10 concurrent sessions). Microservices add deployment complexity, network latency, and debugging difficulty without meaningful benefits at low volume.

**Serverless-Ready**: Design backend to run as stateless functions (Vercel/Netlify functions, AWS Lambda) to minimize fixed costs. Backend should handle single request lifecycle without relying on persistent processes.

**Rationale**: Monolith architecture is appropriate for MVP scope—reduces operational complexity by 70%, faster to build, easier to debug. Can refactor to microservices post-MVP if specific bottlenecks emerge (e.g., PDF generation needs dedicated service).

## Testing Requirements

**Unit + Integration Testing with Manual E2E**: Pragmatic testing strategy for MVP timeline and budget.

**Testing Strategy:**

- **Unit Tests**: Critical business logic (pricing calculations, time savings estimations, session state management, LLM prompt engineering)—aim for 70%+ coverage of core logic
- **Integration Tests**: API endpoints, database operations, external integrations (LLM API, email service, calendar booking)—validate request/response flows
- **Manual E2E Testing**: User flows (complete wizard session, PDF generation, email delivery, calendar booking)—manual testing by developers and beta users during MVP phase
- **No Automated E2E Initially**: Avoid Playwright/Cypress until post-MVP to conserve development time. Automated E2E adds 20-30% to testing effort with limited ROI at MVP scale.

**Quality Gates:**

- All unit tests must pass before merge
- Integration tests run on CI/CD pipeline
- Manual smoke tests required before production deployment
- Beta user testing with 10-15 target users before public launch

**Rationale**: Manual E2E for MVP balances quality assurance with development velocity. Automated E2E delivers best ROI after product-market fit validated and flows stabilize.

## Additional Technical Assumptions and Requests

**Frontend Framework**: **React** with TypeScript for type safety and better developer experience. Next.js considered if SEO is priority (landing page discoverability), otherwise Create React App or Vite for simplicity.

**Styling Approach**: **Tailwind CSS** for rapid UI development and consistency. Utility-first approach reduces CSS complexity and enables fast iteration. Component library (Radix UI, Headless UI, shadcn/ui) for accessible primitives.

**Backend Language**: **Node.js (TypeScript)** preferred for JavaScript continuity across stack, enabling code sharing between frontend/backend. Alternative: **Python (FastAPI)** if team has stronger Python expertise or if ML/data processing needs emerge.

**Database**:

- **PostgreSQL** for structured data (user sessions, discovery documents, lead tracking)
- **Redis/Upstash** for session state and caching (serverless-friendly Redis alternative)
- **Supabase** strongly considered—provides PostgreSQL + auth + storage + real-time subscriptions in single service, reducing integration overhead

**Hosting & Infrastructure** (Cost-Optimized):

- **Frontend**: Vercel or Netlify (free tier adequate for MVP, auto-scaling, excellent DX)
- **Backend**: Railway, Render, or Fly.io ($5-20/month, simpler than AWS at small scale)
- **Database**: Supabase free tier (500MB), Railway Postgres ($5/month), or Neon (serverless Postgres)
- **CDN**: Cloudflare (free tier for DDoS protection and global caching)
- **Estimated Monthly Cost**: $20-50 at launch volume (5-10 sessions/day)

**LLM Provider**: **Single provider for MVP**—benchmark OpenAI GPT-4o, Anthropic Claude Sonnet, and Google Gemini Pro to select based on cost/quality/latency. Selection criteria:

- **Quality**: Relevant automation recommendations for professional services verticals (test with 10-15 sample conversations)
- **Cost**: Target <$0.50 per session for LLM calls (15-20 interactions per session)
- **Latency**: <3 seconds response time for good UX
- **Reliability**: 99%+ uptime, rate limits sufficient for 5-10 concurrent sessions

**Current Leading Candidate**: Claude Sonnet (strong reasoning, good cost/performance, 200K context window useful for session state).

**Integrations**:

- **Calendar Booking**: Cal.com (open-source, embeddable, free self-hosted option) or Calendly ($10-15/month)
- **Email Delivery**: Resend (modern DX, generous free tier) or SendGrid/Postmark (established, reliable)
- **PDF Generation**: Puppeteer (headless Chrome for HTML→PDF) or React-PDF (generate PDFs directly from React components)—both open-source, no service fees
- **Analytics**: Plausible or Fathom ($9-14/month, privacy-focused, GDPR-compliant, no cookie banners needed)

**Authentication**: Not required for MVP—wizard is anonymous/sessionless. Future: Magic link authentication (passwordless) if users need to return to saved sessions across devices.

**State Management**: React Context + hooks for MVP simplicity. Avoid Redux/MobX unless state complexity becomes unmanageable (unlikely for wizard flow). Consider Zustand if global state needs arise.

**API Design**: RESTful endpoints with JSON payloads. GraphQL deferred to post-MVP (adds complexity without clear benefit for simple CRUD operations).

**Security**:

- HTTPS only (SSL certificates via hosting provider)
- Input sanitization and validation on all user inputs (prevent XSS, SQL injection)
- Rate limiting: 10 requests/minute per IP on API endpoints (prevent abuse, control LLM costs)
- Environment variables for secrets (API keys, database credentials)—never commit to version control
- CORS configuration limiting frontend domain only

**Compliance**:

- GDPR-friendly: Minimal PII storage (email only), clear privacy policy, email opt-in for PDF delivery
- No cookies beyond session management (analytics via privacy-focused tools don't require cookie consent)
- Data retention: Discovery documents retained 90 days for vendor follow-up, then auto-deleted

**Performance Budget**:

- Initial page load: <2 seconds (optimize bundle size, lazy load routes)
- Time to Interactive (TTI): <3 seconds
- LLM response latency: <3 seconds (streaming responses if possible to show progress)
- Pricing calculation: <500ms (client-side calculation, no server round-trip)

**Deployment**:

- CI/CD via GitHub Actions (free for public/small private repos)
- Automatic preview deployments for pull requests (test before merge)
- Production deployment on merge to `main` branch
- Database migrations managed via Prisma or similar ORM

**Monitoring & Observability** (MVP Essentials):

- Error tracking: Sentry (free tier for MVP volume)
- Logging: Structured JSON logs to stdout (captured by hosting platform)
- Uptime monitoring: UptimeRobot or similar (free tier, ping every 5 minutes)
- User analytics: Plausible/Fathom (pageviews, completion funnels, abandonment points)

**Scalability Considerations** (Post-MVP):

- Current architecture supports 5-10 concurrent sessions
- To scale to 100+ sessions/day: upgrade database tier ($20-50/month), add Redis caching layer, optimize LLM prompt efficiency
- Horizontal scaling available via serverless functions (Vercel/Netlify scale automatically)
- Database connection pooling via PgBouncer if concurrent connections become bottleneck

**Development Tools**:

- TypeScript across frontend and backend for type safety
- ESLint + Prettier for code consistency
- Husky for pre-commit hooks (lint, type-check, tests)
- VS Code as recommended IDE with shared workspace settings

**Third-Party Dependencies Philosophy**:

- Prefer well-maintained, popular libraries over custom implementations (DRY principle)
- Evaluate bundle size impact for frontend dependencies (aim for <500KB initial bundle)
- Avoid framework lock-in where possible (e.g., use standard React patterns over Next.js-specific APIs unless necessary)
