# Epic 1: Foundation & Core Wizard Flow

**Goal**: Establish project infrastructure (monorepo setup, CI/CD, hosting), implement basic wizard shell (landing page, question flow, progress tracking), and create foundational services (session management, database models). This epic delivers a functional "hello world" wizard that can capture user input and persist sessions, deployable to production environment.

## Story 1.1: Project Setup & Infrastructure

As a **developer**,
I want **a fully configured monorepo with CI/CD pipeline**,
so that **the team can develop, test, and deploy code efficiently from day one**.

### Acceptance Criteria

1. Monorepo structure created with `/frontend`, `/backend`, `/shared`, `/docs` folders using npm/pnpm workspaces
2. TypeScript configured across all packages with shared tsconfig.json
3. ESLint + Prettier configured with consistent rules enforced via pre-commit hooks (Husky)
4. GitHub repository created with main branch protection (require PR reviews, passing tests)
5. GitHub Actions CI/CD pipeline configured: runs linting, type-checking, and tests on every PR
6. Frontend deployed to Vercel or Netlify with automatic preview deployments for PRs
7. Backend deployed to Railway/Render/Fly.io with environment variables configured
8. PostgreSQL database provisioned (Supabase/Railway/Neon) with connection established
9. Redis/Upstash instance provisioned for session caching (or deferred if using Supabase)
10. Basic health check endpoint (`/api/health`) returns 200 OK when backend is running
11. Frontend displays "Hello World" page served from production deployment
12. README.md documents setup instructions, development workflow, and deployment process

## Story 1.2: Database Schema & Session Management

As a **backend developer**,
I want **database models and session management services implemented**,
so that **the wizard can persist user interactions and maintain state across requests**.

### Acceptance Criteria

1. Database schema designed and migrated using Prisma or similar ORM
2. `sessions` table created with fields: id, created_at, updated_at, expires_at, state (JSONB), user_agent, ip_address
3. `discovery_documents` table created with fields: id, session_id, industry, team_size, pain_points, suggested_automations (JSONB), pricing_data (JSONB), status, created_at
4. Session service implemented with methods: createSession(), getSession(), updateSession(), deleteExpiredSessions()
5. Session middleware created to automatically load session from request (cookie or header token)
6. Session auto-save functionality implemented (update database after every user interaction)
7. Session expiration logic implemented (sessions expire after 7 days of inactivity)
8. Automated cleanup job scheduled to delete expired sessions (cron job or scheduled task)
9. Unit tests written for session service covering create, read, update, delete, expiration scenarios
10. Integration tests verify session persistence across multiple requests
11. Session ID generation uses cryptographically secure random values (UUID v4 or nanoid)

## Story 1.3: Landing Page & Wizard Entry

As a **prospective user**,
I want **an engaging landing page with clear value proposition**,
so that **I understand what the wizard does and feel motivated to start the discovery process**.

### Acceptance Criteria

1. Landing page created with hero section containing headline: "Discover what AI can do for your business in 10 minutes—with transparent pricing"
2. Time commitment badge prominently displayed: "10-15 minutes on desktop, 5 minutes on mobile"
3. Primary CTA button: "Check if AI can be useful for me" with clear visual prominence (large, high contrast, centered)
4. Landing page includes 2-3 bullet points highlighting key benefits (transparent pricing, personalized recommendations, immediate insights)
5. Responsive design works on desktop (1024px+), tablet (768-1023px), mobile (375-767px)
6. CTA button click initiates wizard session (creates session in database, navigates to first question)
7. Page loads in <2 seconds (initial page load performance validated)
8. Semantic HTML with proper heading hierarchy (h1, h2) for accessibility
9. Focus indicators visible on CTA button for keyboard navigation
10. Landing page analytics tracking implemented (pageview, CTA click events)
11. Basic error handling: if session creation fails, show friendly error message with retry option

## Story 1.4: Question Flow & Progress Tracking

As a **wizard user**,
I want **a structured question flow with clear progress indicators**,
so that **I understand how far through the process I am and can navigate back if needed**.

### Acceptance Criteria

1. Multi-step wizard UI component created supporting sequential navigation (Next/Back buttons)
2. Progress bar component displays completion percentage based on current step (e.g., "Step 2 of 5 — 40%")
3. First question screen asks: "What industry are you in?" with dropdown/select options (Legal, Healthcare, Real Estate, Consulting, Other)
4. Second question screen asks: "How many people work at your company?" with radio buttons (1-5, 6-10, 11-25, 26-50, 50+)
5. Third question screen asks: "What are your biggest workflow pain points?" with multi-select checkboxes (Document processing, Client intake, Email management, Data entry, Scheduling, Other with text input)
6. Each question screen displays progress bar at top showing completion percentage
7. Back button navigates to previous question without losing data (session state preserved)
8. Next button validates current question (requires answer) before proceeding to next step
9. Session auto-saves after each question answered (database updated with user responses)
10. Browser refresh preserves wizard state (user returns to current step with answers intact)
11. Browser back/forward buttons navigate between wizard steps without breaking state
12. Wizard state includes: current_step, answers (industry, team_size, pain_points), timestamp
13. Mobile-responsive design: questions display single-column layout, buttons thumb-accessible
14. Keyboard navigation supported: Tab through options, Enter to submit, Escape to go back
15. Loading states shown during navigation (prevent double-submission)

## Story 1.5: Basic Summary Screen

As a **wizard user**,
I want **a summary screen showing my responses**,
so that **I can review what I've shared and confirm the wizard captured my information correctly**.

### Acceptance Criteria

1. Summary screen displays after final question is answered (navigation from question flow to summary)
2. Summary shows structured output with sections:
   - "Your Business Context" section displays: Industry, Team Size, Pain Points (formatted as bullets)
   - Placeholder message: "AI recommendations coming soon!" (since AI not integrated yet in this epic)
3. "Edit Responses" button navigates back to question flow (preserves all answers)
4. Summary data persisted to `discovery_documents` table with status: "draft"
5. Responsive design: summary displays cleanly on mobile and desktop
6. Summary includes session timestamp: "Session started: [datetime]"
7. Analytics tracking: summary screen view event captured
8. Basic validation: summary only accessible if question flow completed (redirect to questions if incomplete)
9. Print-friendly CSS applied (clean layout when printing/PDF preview)
10. Next steps placeholder displayed: "Stay tuned for personalized automation recommendations" (sets expectation for future functionality)
