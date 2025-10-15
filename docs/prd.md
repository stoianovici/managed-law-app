# AI Discovery Wizard Product Requirements Document (PRD)

## Goals and Background Context

### Goals

- Launch a web-based AI Discovery Wizard that generates 100+ qualified completions within the first 3 months, with 15-25% converting to booked consultations
- Reduce sales cycle time by 40% (from 30-90 days to 18-54 days) through automated discovery and pre-qualification
- Lower customer acquisition costs by 30% compared to traditional outbound sales methods
- Demonstrate AI capability through the wizard experience itself, increasing user confidence in AI adoption
- Provide immediate, transparent value to business owners (pricing + insights) while building a qualified sales pipeline
- Establish market position as innovative, transparent AI consultancy in professional services sectors

### Background Context

Small business owners in professional services (legal, healthcare, real estate, consulting) face a critical bottleneck: manual, repetitive workflows consume 15-30% of staff time, limiting their ability to scale operations. While these businesses recognize that AI and LLM technology could automate many workflows, they encounter significant friction in the discovery process—information asymmetry, pricing opacity, time-intensive sales calls, and trust deficits prevent exploration.

The AI Discovery Wizard transforms software discovery from a vendor-gated, time-intensive process into an immediate, self-service experience. Rather than forcing prospects through contact forms and sales calls to learn "what's possible" and "what it costs," the wizard reverses the flow: AI proactively suggests relevant automation opportunities based on contextual questions, displays real-time pricing, and allows interactive refinement—all within 10-15 minutes. The experience itself proves AI's capability, building trust through transparent value delivery while capturing qualified leads for the vendor.

### Change Log

| Date       | Version | Description                                                                    | Author          |
| ---------- | ------- | ------------------------------------------------------------------------------ | --------------- |
| 2025-10-15 | 1.0     | Initial PRD creation - Complete with 5 epics, 25 stories, checklist validation | John (PM Agent) |

## Requirements

### Functional

**FR1:** The system shall provide a clean landing page with "Check if AI can be useful for me" CTA that launches the wizard interface with clear time commitment messaging (10-15 min desktop, 5 min mobile)

**FR2:** The system shall implement an adaptive question flow that progresses from general questions (industry, team size, pain points) to specific questions (task volumes, workflow details) based on user responses

**FR3:** The system shall display visual progress indicators throughout the wizard session showing completion percentage and estimated time remaining

**FR4:** The system shall use AI to analyze gathered context and proactively recommend 3-7 relevant automations tailored to the user's business (reverse discovery approach)

**FR5:** The system shall provide a visual workflow sketcher displaying suggested automations as interactive cards/blocks that users can add, remove, or modify with real-time visual feedback

**FR6:** The system shall calculate and display estimated monthly cost per user based on token consumption with transparent margin, updating dynamically as automations change

**FR7:** The system shall display estimated time savings (hours per week/month) for each suggested automation and aggregate total time savings prominently alongside cost

**FR8:** The system shall show contextual AI insights throughout the wizard (e.g., "5 paralegals × 2hrs/day = 50hrs/week opportunity") rather than generic loading messages

**FR9:** The system shall display a persistent pricing panel once first automation is identified, updating immediately as user adds/removes features

**FR10:** The system shall provide a full-featured 10-15 minute experience on desktop browsers and a streamlined 5-minute lite version on mobile devices

**FR11:** The system shall support seamless session continuation from mobile to desktop, allowing users to save progress and resume on different devices

**FR12:** The system shall auto-save user progress after every interaction and survive browser refresh without data loss

**FR13:** The system shall display a professional, branded summary at wizard completion showing problems identified, solutions proposed, automations list, time savings analysis, and cost estimate

**FR14:** The system shall offer users the option to receive a comprehensive PDF report (shareable with stakeholders) in exchange for providing an email address

**FR15:** The system shall generate professional, branded PDF reports suitable for boardroom presentations within 5 seconds

**FR16:** The system shall capture structured discovery documents containing all user responses, selected automations, business context, and lead quality indicators for vendor follow-up

**FR17:** The system shall provide a "Book a Call" CTA with pre-filled meeting agenda based on discovery answers, linking directly to calendar scheduling

**FR18:** The system shall integrate with calendar booking system (Cal.com or Calendly) requiring no manual vendor intervention

**FR19:** The system shall send transactional emails containing PDF reports to users who provide email addresses

**FR20:** The system shall support browser back/forward navigation without breaking wizard state or losing user data

### Non Functional

**NFR1:** The system shall load the initial page in under 2 seconds on standard broadband connections

**NFR2:** The system shall respond to user interactions with AI-generated content within 3 seconds per interaction

**NFR3:** The system shall update real-time pricing calculations within 500ms of automation changes

**NFR4:** The system shall support 5-10 concurrent wizard sessions initially without performance degradation

**NFR5:** The system shall maintain 95%+ uptime and complete wizard sessions without errors for 95%+ of users

**NFR6:** The system shall support the latest 2 versions of Chrome, Safari, Firefox, and Edge browsers

**NFR7:** The system shall provide responsive design supporting viewports from 375px (iPhone SE) to 1920px+ (desktop monitors)

**NFR8:** The system shall support iOS 14+, Android 10+ on mobile devices via responsive web design

**NFR9:** The system shall encrypt all session data at rest and transmit over HTTPS only

**NFR10:** The system shall implement input sanitization for all user-provided data to prevent security vulnerabilities

**NFR11:** The system shall implement rate limiting on API endpoints to prevent abuse and control costs

**NFR12:** The system shall store minimal PII (email addresses only) in compliance with GDPR and privacy regulations

**NFR13:** The system shall operate within $100/month infrastructure costs during MVP phase (hosting, APIs, services)

**NFR14:** The system shall use a single LLM provider for MVP to minimize complexity and integration overhead

**NFR15:** The system shall provide privacy-focused analytics (Plausible or Fathom) for GDPR compliance

**NFR16:** The system shall track wizard abandonment points to identify UX friction, with no single step exceeding 15% drop-off rate

**NFR17:** The system shall achieve 60%+ completion rate for users who start the wizard (target: industry benchmark 30-50%)

**NFR18:** The system shall support English language only for MVP release

## User Interface Design Goals

### Overall UX Vision

The AI Discovery Wizard pioneers a "next-level familiar" interaction paradigm that pushes beyond traditional web forms while maintaining intuitive usability. The experience combines conversational AI intelligence with familiar form-based interactions, creating a memorable product that demonstrates AI capability through flawless execution. The interface should feel like a knowledgeable consultant guiding the user through discovery—proactive, transparent, and confidence-building—rather than a static questionnaire extracting information.

**Design Philosophy:**

- **Proof Through Experience**: The wizard itself proves AI's value; if the discovery is intelligent and delightful, it reinforces adoption confidence
- **Transparent Intelligence**: Show AI reasoning contextually (business calculations, opportunity analysis) rather than hiding behind loading spinners
- **Progressive Disclosure**: Start simple, reveal complexity gradually based on user engagement
- **Immediate Value**: Provide insights early in the flow to maintain engagement and demonstrate worth
- **Trust Through Clarity**: No dark patterns, no gatekeeping information, radical transparency in pricing and capabilities

### Key Interaction Paradigms

**1. Reverse Discovery Pattern**: AI suggests first (educated recommendations based on context), then user refines. This inverts traditional "blank slate" forms where users must know what to ask for. The system acts as an expert advisor proposing a starting point.

**2. Visual Workflow Sketcher**: Interactive canvas where automation opportunities appear as draggable/modifiable cards or blocks. Users can add, remove, reorder, or configure automations with direct manipulation—similar to Figma/Miro fluidity but optimized for mobile touch and desktop mouse interactions.

**3. Contextual Intelligence Display**: Throughout the wizard, replace generic loading messages with relevant business analysis. Example: Instead of "Analyzing your workflow...", show "5 paralegals × 2hrs/day intake = 50hrs/week automation opportunity." This transforms wait time into educational value.

**4. Persistent Pricing Panel**: Once automations are identified, pricing stays visible in a fixed panel (desktop sidebar or mobile bottom sheet) that updates in real-time (<500ms) as users modify selections. ROI metrics (time saved, cost per hour saved) displayed alongside pricing for immediate cost-benefit analysis.

**5. Adaptive Complexity**: Desktop experience offers full 10-15 minute deep dive with rich interactions. Mobile provides streamlined 5-minute core flow optimized for thumb navigation. Seamless handoff between devices via save/resume functionality.

**6. Conversational Form Hybrid**: Questions feel conversational (natural language, adaptive branching) but use form controls (dropdowns, sliders, multi-select) for efficiency. Avoid pure chat interface (slow, unpredictable) while maintaining human tone.

### Core Screens and Views

**Landing Page**: Hero section with clear value proposition ("Discover what AI can do for your business in 10 minutes—with transparent pricing"), time commitment badge, social proof elements, and prominent "Check if AI can be useful for me" CTA.

**Context Gathering Flow**: Progressive question sequence (3-5 screens) with visual progress bar, back/forward navigation, and auto-save indicators. Questions adapt based on previous answers (industry-specific follow-ups).

**AI Analysis Interstitial**: Brief transition screen (2-3 seconds) showing contextual insights being generated. Display actual business metrics calculations rather than generic loading animation.

**Workflow Sketcher View**: Central workspace displaying 3-7 AI-suggested automation cards arranged visually. Persistent pricing panel on side/bottom. Clear affordances for add/remove/modify actions. Each card shows: automation name, description, time savings estimate, and individual cost contribution.

**Refinement Interface**: Ability to explore additional automations (browsable library organized by category), adjust automation parameters (frequency, complexity), and see immediate pricing/savings impact.

**Summary Screen**: Professional output showing: problems identified (user pain points), proposed solutions (selected automations), time savings breakdown (weekly/monthly hours), cost estimate with transparent margin, and clear CTAs (Download PDF, Book Call).

**Email Capture Modal**: Value-first messaging ("Receive your personalized AI automation plan as a shareable PDF"), single email field, privacy assurance, and immediate PDF delivery confirmation.

**Booking Confirmation**: Calendar integration with pre-filled agenda based on discovery answers (e.g., "Discuss contract review automation for real estate closings, estimated $2,400/month, 35hrs/month saved").

### Accessibility

**WCAG AA Compliance**: Target WCAG 2.1 Level AA standards for MVP to ensure usability for users with disabilities. Key considerations:

- Color contrast ratios of 4.5:1 for normal text, 3:1 for large text
- Keyboard navigation support for all interactive elements
- Screen reader compatible semantic HTML
- Focus indicators on all interactive elements
- Alt text for images and icons
- Form labels and error messages properly associated

**Future Consideration**: Full WCAG AAA compliance post-MVP if enterprise clients require it.

### Branding

**Visual Identity**: Modern, professional, trustworthy aesthetic that appeals to small business owners in professional services. Avoid overly technical/engineer-focused design. Inspiration: Linear's polish + Stripe's clarity + Notion's approachability.

**Tone**: Confident but not arrogant, educational but not condescending, innovative but not alienating. Written content uses plain language, avoids jargon, explains AI concepts through concrete business examples.

**Differentiation**: The "workflow sketcher" visual representation and contextual intelligence displays should be distinctive enough to generate social sharing and word-of-mouth ("Have you tried that AI wizard that shows you exactly how much time you'll save?").

### Target Device and Platforms

**Web Responsive** (desktop-first, mobile-optimized):

- Desktop experience: Full-featured 10-15 minute workflow (1024px+ viewports)
- Tablet experience: Adapted desktop experience with touch-optimized controls (768px-1023px)
- Mobile experience: Streamlined 5-minute lite version with session continuation option (375px-767px)

**Browser Support**:

- Chrome (latest 2 versions)
- Safari (latest 2 versions)
- Firefox (latest 2 versions)
- Edge (latest 2 versions)

**Mobile OS Support**:

- iOS 14+ (Safari mobile)
- Android 10+ (Chrome mobile)

**No Native Apps**: Web-only for MVP to minimize development complexity and deployment overhead. Progressive Web App (PWA) features considered post-MVP if mobile usage exceeds 40%.

## Technical Assumptions

### Repository Structure

**Monorepo**: Use a single repository with multiple packages to simplify development at MVP stage. Structure:

- `/frontend` - React/Next.js web application
- `/backend` - API server (Node.js/Python)
- `/shared` - Shared types, utilities, constants
- `/docs` - Documentation and architecture decisions

**Rationale**: Monorepo reduces coordination overhead between frontend and backend during rapid MVP iteration. Easier to maintain consistency, share code, and deploy atomically. Consider Turborepo or Nx for build optimization if complexity grows, but start simple with npm/pnpm workspaces.

**Trade-off**: Monorepo over polyrepo—accepts slightly larger repo size for dramatically simpler development workflow (single clone, single dependency install, single version control).

### Service Architecture

**Monolith with API-First Design**: Simple client-server architecture for MVP. Stateless backend exposing RESTful API endpoints, React frontend consuming them.

**Architecture Principles:**

- Frontend: Single-page application (SPA) or server-side rendered (SSR) if SEO is critical
- Backend: Thin API layer handling authentication, session management, LLM orchestration, PDF generation, email sending
- Database: PostgreSQL for structured data (user sessions, discovery documents), Redis/Upstash for session state caching
- Stateless design: All session state persisted in database/cache, not in-memory (enables serverless deployment)

**Avoid Microservices**: Premature at MVP scale (5-10 concurrent sessions). Microservices add deployment complexity, network latency, and debugging difficulty without meaningful benefits at low volume.

**Serverless-Ready**: Design backend to run as stateless functions (Vercel/Netlify functions, AWS Lambda) to minimize fixed costs. Backend should handle single request lifecycle without relying on persistent processes.

**Rationale**: Monolith architecture is appropriate for MVP scope—reduces operational complexity by 70%, faster to build, easier to debug. Can refactor to microservices post-MVP if specific bottlenecks emerge (e.g., PDF generation needs dedicated service).

### Testing Requirements

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

### Additional Technical Assumptions and Requests

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

## Epic List

**Epic 1: Foundation & Core Wizard Flow**
Establish project infrastructure (monorepo setup, CI/CD, hosting), implement basic wizard shell (landing page, question flow, progress tracking), and create foundational services (session management, database models). Deliverable: A functional "hello world" wizard that can capture user input and persist sessions, deployable to production environment.

**Epic 2: AI Intelligence & Discovery Engine**
Integrate LLM provider (Claude/GPT-4), implement adaptive questioning logic (context gathering with branching), build AI recommendation engine that analyzes user context and proposes relevant automations. Deliverable: Wizard can conduct intelligent discovery conversations and generate tailored automation suggestions based on business context.

**Epic 3: Workflow Sketcher & Pricing System**
Build visual workflow sketcher interface (automation cards, add/remove/modify interactions), implement real-time pricing calculation engine (token estimation, cost modeling), create time savings calculator, and design persistent pricing panel. Deliverable: Users can interactively refine automation packages with immediate pricing and ROI feedback.

**Epic 4: Output Generation & Conversion**
Implement summary screen with professional output design, build PDF generation system (shareable reports), create email capture and delivery flow, integrate calendar booking (Cal.com/Calendly), and generate structured discovery documents for vendor follow-up. Deliverable: Complete end-to-end wizard experience from entry to conversion (PDF + calendar booking).

**Epic 5: Mobile Experience & Polish**
Create streamlined mobile flow (5-minute lite version), implement session continuation/handoff between devices, add contextual AI insights display throughout wizard, optimize performance (loading times, animations), and conduct beta user testing with refinements. Deliverable: Production-ready wizard with polished desktop and mobile experiences, validated by 10-15 beta users.

## Epic 1: Foundation & Core Wizard Flow

**Goal**: Establish project infrastructure (monorepo setup, CI/CD, hosting), implement basic wizard shell (landing page, question flow, progress tracking), and create foundational services (session management, database models). This epic delivers a functional "hello world" wizard that can capture user input and persist sessions, deployable to production environment.

### Story 1.1: Project Setup & Infrastructure

As a **developer**,
I want **a fully configured monorepo with CI/CD pipeline**,
so that **the team can develop, test, and deploy code efficiently from day one**.

#### Acceptance Criteria

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

### Story 1.2: Database Schema & Session Management

As a **backend developer**,
I want **database models and session management services implemented**,
so that **the wizard can persist user interactions and maintain state across requests**.

#### Acceptance Criteria

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

### Story 1.3: Landing Page & Wizard Entry

As a **prospective user**,
I want **an engaging landing page with clear value proposition**,
so that **I understand what the wizard does and feel motivated to start the discovery process**.

#### Acceptance Criteria

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

### Story 1.4: Question Flow & Progress Tracking

As a **wizard user**,
I want **a structured question flow with clear progress indicators**,
so that **I understand how far through the process I am and can navigate back if needed**.

#### Acceptance Criteria

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

### Story 1.5: Basic Summary Screen

As a **wizard user**,
I want **a summary screen showing my responses**,
so that **I can review what I've shared and confirm the wizard captured my information correctly**.

#### Acceptance Criteria

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

## Epic 2: AI Intelligence & Discovery Engine

**Goal**: Integrate LLM provider (Claude/GPT-4), implement adaptive questioning logic (context gathering with branching), build AI recommendation engine that analyzes user context and proposes relevant automations. This epic transforms the basic wizard into an intelligent discovery tool that provides tailored automation suggestions.

### Story 2.1: LLM Provider Integration & Configuration

As a **backend developer**,
I want **LLM provider integrated with proper error handling and rate limiting**,
so that **the wizard can make AI-powered decisions reliably and cost-effectively**.

#### Acceptance Criteria

1. LLM provider selected based on benchmarking (Claude Sonnet, GPT-4o, or Gemini Pro) with documented rationale
2. API client library integrated (Anthropic SDK, OpenAI SDK, or Google AI SDK)
3. Environment variables configured for API keys with secure storage (never committed to repo)
4. LLM service wrapper created with methods: generateCompletion(), streamCompletion(), estimateTokens()
5. Error handling implemented: API failures return graceful errors, retry logic for transient failures (3 retries with exponential backoff)
6. Rate limiting configured: max 10 requests/minute to prevent abuse and control costs
7. Token usage tracking implemented: log input/output tokens for each request to monitor costs
8. Timeout configured: requests abort after 10 seconds to prevent hanging
9. Unit tests mock LLM responses to validate service behavior without API calls
10. Integration tests verify actual LLM API connectivity and response parsing (using test API keys)
11. Cost monitoring dashboard or log analysis setup to track daily/weekly LLM spending
12. Documentation added explaining LLM configuration, prompt engineering guidelines, and cost management

### Story 2.2: Adaptive Question Engine

As a **wizard user**,
I want **questions that adapt based on my previous answers**,
so that **the wizard feels intelligent and doesn't waste my time with irrelevant questions**.

#### Acceptance Criteria

1. Question configuration system created supporting conditional branching (if industry = "Legal", ask law-specific questions)
2. Industry-specific follow-up questions implemented:
   - Legal: "What types of documents do you process most?" (Contracts, Briefs, Intake forms, Compliance docs)
   - Healthcare: "What administrative tasks consume the most time?" (Scheduling, Patient records, Billing, Insurance claims)
   - Real Estate: "What transaction steps are most manual?" (Listing prep, Contract review, Closing coordination, Client communication)
   - Consulting: "What deliverables do you create regularly?" (Reports, Presentations, Proposals, Analysis)
3. Volume-based follow-up questions implemented based on pain points:
   - If "Document processing" selected: "How many documents per week?" (slider: 10-500)
   - If "Client intake" selected: "How many clients per month?" (slider: 5-200)
   - If "Email management" selected: "Hours per day on email?" (slider: 1-6 hours)
4. Question flow dynamically adjusts: skips irrelevant questions, adds follow-ups based on responses
5. Session state tracks all answers with question_id, answer_value, timestamp for audit trail
6. Wizard progress bar adjusts total steps dynamically (if branching adds questions, progress recalculates)
7. Adaptive logic unit tested: verify correct questions shown for different industry/pain point combinations
8. Analytics tracking: capture which branching paths users take most frequently
9. Questions maintain conversational tone consistent with "next-level familiar" UX vision
10. Mobile-responsive: adaptive questions display cleanly on all viewport sizes

### Story 2.3: Industry Knowledge Base & Automation Templates

As a **product manager**,
I want **a curated library of automation opportunities for each industry**,
so that **the AI can suggest relevant, credible solutions rather than generic recommendations**.

#### Acceptance Criteria

1. Automation templates database table created with fields: id, title, description, industry, category, estimated_time_savings, token_estimate, complexity
2. Minimum 5 automation templates per industry (Legal, Healthcare, Real Estate, Consulting):
   - Legal: Contract review assistant, Client intake automation, Document generation, Legal research assistant, Compliance monitoring
   - Healthcare: Patient intake forms, Appointment scheduling, Insurance pre-authorization, Medical records summarization, Billing automation
   - Real Estate: Listing description generator, Contract analysis, Transaction coordinator, Client communication automation, Market analysis reports
   - Consulting: Proposal generator, Research summarization, Report drafting, Client onboarding, Data analysis assistant
3. Each template includes: clear title, 2-3 sentence description, estimated hours saved per week, estimated token cost per month
4. Automation templates seeded into database via migration script
5. API endpoint created: GET `/api/automations?industry={industry}&category={category}` returns filtered templates
6. Templates categorized by workflow area (Document Processing, Communication, Data Analysis, Administrative, Research)
7. Knowledge base documented in `/docs/automation-templates.md` with rationale for each template's time savings estimates
8. Templates reviewed for accuracy by domain expert or validated against industry research
9. Unit tests verify template filtering logic works correctly
10. Templates support extensibility: new industries/automations can be added without code changes

### Story 2.4: AI Recommendation Engine

As a **wizard user**,
I want **AI to analyze my context and proactively suggest relevant automations**,
so that **I discover opportunities I might not have thought to ask about**.

#### Acceptance Criteria

1. Recommendation engine service created: analyzes session data (industry, team size, pain points, volume metrics) and generates personalized automation suggestions
2. LLM prompt engineered to generate recommendations:
   - Input: user context (industry, team size, pain points, task volumes)
   - Output: 3-7 automation suggestions with rationale, each mapped to automation template IDs
3. Prompt includes instructions to prioritize high-impact automations (highest time savings relative to complexity)
4. Recommendation logic filters automation templates to match user's industry and pain points
5. AI generates contextual rationale for each suggestion (e.g., "Based on your 50 documents/week, contract review automation could save 15 hours/month")
6. Recommendations persisted to `discovery_documents.suggested_automations` (JSONB array of automation IDs + rationales)
7. Analysis interstitial screen displays while AI generates recommendations (2-3 seconds): shows "Analyzing your workflow..." with contextual insight preview
8. If AI generation fails (API error, timeout), fallback to rule-based recommendations using automation templates matching industry/pain points
9. Recommendations limited to 3-7 automations to avoid overwhelming users (prioritize top suggestions)
10. Unit tests validate recommendation logic with mock session data
11. Integration tests verify end-to-end flow: user answers questions → AI generates recommendations → recommendations displayed
12. Token cost per recommendation generation measured and logged (target: <$0.30 per session)
13. Recommendation quality metrics tracked: user acceptance rate (how many suggested automations users keep vs. remove)

### Story 2.5: AI Recommendations Display

As a **wizard user**,
I want **to see AI-generated automation recommendations with clear explanations**,
so that **I understand why each suggestion is relevant to my business and can make informed decisions**.

#### Acceptance Criteria

1. Recommendations screen displays after AI analysis completes (navigation from analysis interstitial to recommendations)
2. Each recommendation shown as card with:
   - Automation title (e.g., "Contract Review Assistant")
   - Description (2-3 sentences explaining what it does)
   - AI rationale (why it's recommended for this user: "Based on your 50 contracts/week and 3-person legal team...")
   - Estimated time savings (hours per week/month)
   - Estimated cost placeholder (will be calculated in Epic 3)
3. Recommendations displayed in priority order (highest impact first)
4. Visual design matches "next-level familiar" aesthetic: cards feel modern, professional, not generic
5. Each card includes icon/visual representing automation category (document, communication, data, etc.)
6. Responsive design: cards stack on mobile, display in grid on desktop (2-3 columns)
7. "Why was this recommended?" tooltip/expandable section explains AI reasoning transparently
8. Call-to-action button: "Refine these recommendations" navigates to workflow sketcher (Epic 3)
9. Session state updated with displayed recommendations (track which automations shown to user)
10. Analytics tracking: recommendation view event, time spent viewing recommendations
11. Accessibility: card content readable by screen readers, keyboard navigation between cards
12. Error handling: if no recommendations generated, show friendly message with manual exploration option

## Epic 3: Workflow Sketcher & Pricing System

**Goal**: Build visual workflow sketcher interface (automation cards, add/remove/modify interactions), implement real-time pricing calculation engine (token estimation, cost modeling), create time savings calculator, and design persistent pricing panel. This epic delivers the "next-level familiar" UX and transparent pricing that differentiates the wizard.

### Story 3.1: Workflow Sketcher UI Component

As a **wizard user**,
I want **a visual interface where I can see and interact with my automation package**,
so that **I can easily understand what's included and make modifications intuitively**.

#### Acceptance Criteria

1. Workflow sketcher canvas component created displaying automation cards in visual layout
2. Each automation card shows: icon, title, brief description, time savings, cost (placeholder for now)
3. Cards arranged in organized grid/flow layout (not random scatter): desktop 2-3 columns, mobile single column
4. Visual hierarchy emphasizes card title and time savings (largest/boldest text)
5. Cards have distinct visual states: default, hover, selected, disabled
6. Smooth animations for card add/remove (fade in/out, not jarring)
7. Responsive design: sketcher works on 375px mobile to 1920px+ desktop
8. Empty state displayed if no automations selected: "Add automations from the library below"
9. Sketcher state persists to session (selected automations saved to database on every change)
10. Accessibility: cards navigable via keyboard (Tab, Enter to interact), screen reader announces card content
11. Visual polish matches "next-level familiar" aesthetic: modern, clean, professional
12. Performance: 60fps animations, no jank when adding/removing cards

### Story 3.2: Add/Remove Automation Interactions

As a **wizard user**,
I want **to easily add new automations or remove ones I don't need**,
so that **I can customize my package to match my exact requirements**.

#### Acceptance Criteria

1. Each automation card includes "Remove" button (X icon or text button) in top-right corner
2. Clicking "Remove" immediately removes card from sketcher with confirmation (optional: "Are you sure?" if >$500/month automation)
3. "Add Automation" section displays browsable library of additional automations organized by category
4. Automation library shows cards for automations not currently in sketcher (filtered out if already added)
5. Library cards include: icon, title, description, estimated time savings, "Add" button
6. Clicking "Add" button immediately adds automation to sketcher with animation
7. Real-time validation: cannot add duplicate automations (Add button disabled/hidden if already in sketcher)
8. Search/filter controls for automation library: filter by category (Document Processing, Communication, etc.)
9. "Reset to AI Recommendations" button restores original AI-suggested automations (undo all changes)
10. Session state updates immediately after add/remove (auto-save to database)
11. Analytics tracking: track which automations added/removed most frequently
12. Mobile-optimized: Add/Remove buttons thumb-accessible, library scrollable

### Story 3.3: Pricing Calculation Engine

As a **backend developer**,
I want **a pricing engine that accurately estimates monthly costs for automation packages**,
so that **users receive reliable, transparent cost information**.

#### Acceptance Criteria

1. Pricing service created with method: calculatePricing(automations[]) returns {totalCost, breakdown[]}
2. Pricing calculation logic:
   - Estimate monthly token usage per automation based on template token_estimate and frequency
   - Apply LLM provider cost per token (e.g., Claude Sonnet: $3/$15 per 1M tokens input/output)
   - Add margin internally (suggest 30-40%) but calculate final all-inclusive price shown to user
   - Calculate per-automation cost and aggregate total
3. Pricing breakdown includes: per-automation costs, total monthly cost (all-inclusive, margin built-in but not disclosed)
4. Token estimation considers: automation complexity, expected monthly usage (derived from user's volume metrics)
5. Pricing stored in `discovery_documents.pricing_data` (JSONB): {automations: [{id, cost, tokens}], total, calculation_date}
6. API endpoint created: POST `/api/pricing/calculate` accepts automation IDs + user context, returns pricing breakdown
7. Pricing calculated in <500ms (fast enough for real-time updates)
8. Unit tests validate pricing calculations across different scenarios (low volume, high volume, different industries)
9. Pricing methodology documented internally (for vendor reference): how tokens estimated, margin applied, cost assumptions
10. Pricing defaults to monthly billing (can add annual discount in future)
11. Currency displayed as USD with proper formatting ($1,234.56)
12. Final price is all-inclusive—user sees single clean number per automation and total, no margin disclosure

### Story 3.4: Time Savings Calculator

As a **wizard user**,
I want **to see how much time each automation will save me**,
so that **I can evaluate ROI and prioritize which automations matter most**.

#### Acceptance Criteria

1. Time savings service created: calculateTimeSavings(automations[], userContext) returns {totalHours, breakdown[]}
2. Time savings calculation logic:
   - Use automation template `estimated_time_savings` as baseline (hours per week)
   - Adjust based on user's volume metrics (e.g., 50 contracts/week saves more time than 10 contracts/week)
   - Aggregate total hours saved per week and per month
3. Time savings displayed per automation card: "Saves ~15 hrs/month" prominently shown
4. Aggregate time savings shown in pricing panel: "Total time saved: 42 hours/month"
5. ROI calculation added: cost per hour saved (total monthly cost / total hours saved = $/hour)
6. ROI displayed in pricing panel: "Cost per hour saved: $35/hr" (compare to hourly rate of staff)
7. Time savings breakdown explains calculation: "Based on 50 contracts/week at 20 min each = 16.7 hrs/week review time"
8. Calculation methodology documented and transparent to user
9. Time savings persisted to session alongside pricing data
10. Unit tests validate time savings across volume scenarios
11. Visual indicators show high-impact automations: "🔥 Highest time savings" badge on top automation

### Story 3.5: Persistent Pricing Panel

As a **wizard user**,
I want **continuous visibility into pricing and ROI as I modify my automation package**,
so that **I can make informed decisions without losing context**.

#### Acceptance Criteria

1. Pricing panel component created: fixed sidebar (desktop) or bottom sheet (mobile) visible once automations loaded
2. Panel displays:
   - Total monthly cost (large, prominent: "$2,450/month")
   - Total time savings ("Saves 42 hours/month")
   - Cost per hour saved ("$58/hr — less than hiring")
   - Number of automations selected ("5 automations")
3. Panel updates in real-time (<500ms) when automations added/removed from sketcher
4. Loading state shown during calculation: subtle spinner, previous values dimmed
5. Panel remains visible while scrolling (sticky positioning)
6. "View Detailed Breakdown" button expands panel to show per-automation costs
7. Detailed breakdown modal/expansion shows: automation name, individual cost, time savings, tokens used (no margin shown, just final per-automation price)
8. CTA button in panel: "Continue to Summary" navigates to next step
9. Responsive design: panel collapses to compact view on mobile (<768px), expands on tap
10. Accessibility: panel content announced by screen readers, keyboard navigable
11. Visual design matches overall aesthetic: clean, professional, not intrusive
12. Analytics: track how often users view detailed breakdown, time spent adjusting package

## Epic 4: Output Generation & Conversion

**Goal**: Implement summary screen with professional output design, build PDF generation system (shareable reports), create email capture and delivery flow, integrate calendar booking (Cal.com/Calendly), and generate structured discovery documents for vendor follow-up. This epic completes the end-to-end wizard experience from entry to conversion.

### Story 4.1: Professional Summary Screen

As a **wizard user**,
I want **a comprehensive summary showing all my selections and recommendations**,
so that **I can review everything before proceeding to download or book a call**.

#### Acceptance Criteria

1. Summary screen displays after user clicks "Continue to Summary" from pricing panel
2. Summary sections organized clearly:
   - "Your Business Context" (industry, team size, pain points, volume metrics)
   - "Recommended Automations" (list of selected automations with descriptions)
   - "Time Savings Analysis" (total hours saved per week/month, breakdown by automation)
   - "Investment Summary" (total monthly cost, cost per hour saved, ROI calculation)
3. Each automation in summary shows: icon, title, description, time savings, individual cost
4. Visual design is professional and boardroom-ready (clean typography, good spacing, minimal clutter)
5. "Problems Identified" section summarizes user's pain points with context (e.g., "50 contracts/week consuming 15 hours of paralegal time")
6. "Proposed Solutions" section explains how each automation addresses specific pain points
7. Summary includes contextual insights generated by AI (carried forward from earlier screens)
8. "Edit Package" button navigates back to workflow sketcher (preserves all selections)
9. Two primary CTAs prominently displayed:
   - "Get PDF Report" (triggers email capture flow)
   - "Book a Consultation" (triggers calendar booking flow)
10. Summary data persisted to `discovery_documents` table with status updated to "completed"
11. Print-friendly CSS applied (optimized for printing or PDF conversion)
12. Responsive design: summary displays cleanly on mobile and desktop
13. Analytics tracking: summary view event, time spent on summary, which CTA clicked
14. Summary includes timestamp: "Report generated: [date/time]"

### Story 4.2: PDF Generation System

As a **wizard user**,
I want **to download a professional PDF report of my automation plan**,
so that **I can share it with partners, stakeholders, or review it later offline**.

#### Acceptance Criteria

1. PDF generation service created using Puppeteer or React-PDF library
2. PDF template designed matching summary screen content with professional branding:
   - Cover page with wizard branding, user's business name, report date
   - Business context section (industry, team, pain points)
   - Automation recommendations with descriptions, time savings, costs
   - Visual charts/graphs showing time savings breakdown (optional for MVP)
   - Investment summary with ROI calculations
   - Next steps section with contact information and booking link
3. PDF generation completes within 5 seconds of user request
4. PDF file size optimized (<2MB for easy email transmission)
5. PDF filename formatted clearly: "AI-Automation-Plan-{Industry}-{Date}.pdf"
6. PDF generation handles edge cases: long descriptions, many automations (pagination works correctly)
7. PDF stored temporarily on server (24 hours) for email delivery, then auto-deleted
8. API endpoint created: POST `/api/pdf/generate` accepts session_id, returns PDF URL or binary
9. Error handling: if PDF generation fails, show user-friendly error with retry option
10. Unit tests mock PDF generation to validate data formatting
11. Integration tests verify actual PDF generation with sample data
12. PDF includes footer with wizard URL and disclaimer: "Estimates are approximate and subject to final scoping"
13. PDF is accessible: proper heading structure, readable fonts, high contrast

### Story 4.3: Email Capture & PDF Delivery

As a **wizard user**,
I want **to receive the PDF report via email**,
so that **I have a permanent copy and can access it from anywhere**.

#### Acceptance Criteria

1. Email capture modal displays when user clicks "Get PDF Report"
2. Modal displays value proposition: "Receive your personalized AI automation plan as a shareable PDF"
3. Email input field with validation (proper email format required)
4. Privacy assurance displayed: "We'll only use your email to send this report and occasional updates. No spam."
5. Checkbox: "Subscribe to automation insights newsletter" (opt-in, not required for PDF)
6. "Send Report" button triggers PDF generation and email delivery
7. Email service integrated (Resend, SendGrid, or Postmark)
8. Transactional email template created:
   - Subject: "Your AI Automation Plan for [Industry]"
   - Body: Personalized greeting, summary of recommendations, PDF attachment, CTA to book consultation
   - Footer: Unsubscribe link, company contact information
9. PDF attached to email (or link to download if attachment too large)
10. Email delivery completes within 30 seconds of user submission
11. Confirmation screen displayed after email sent: "Report sent to {email}! Check your inbox."
12. Email address stored in `discovery_documents` table for follow-up
13. Error handling: if email fails to send, display error and offer retry or direct PDF download
14. Analytics tracking: email capture rate, delivery success rate
15. Email open tracking and link click tracking (optional, privacy-friendly)
16. Unsubscribe mechanism implemented for users who opted into newsletter

### Story 4.4: Calendar Booking Integration

As a **wizard user**,
I want **to easily schedule a consultation with pre-filled context**,
so that **I can discuss my automation plan without repeating information**.

#### Acceptance Criteria

1. Calendar booking integration selected and configured (Cal.com or Calendly)
2. "Book a Consultation" button triggers calendar booking flow
3. Calendar booking opens in modal/iframe or new tab (user preference)
4. Meeting agenda pre-filled based on discovery data:
   - Meeting title: "AI Automation Consultation - [Industry]"
   - Description includes: Business context, selected automations, estimated cost, time savings
   - Example: "Discuss contract review automation for real estate closings. Package: 5 automations, $2,450/month, 42 hours/month saved."
5. Calendar integration passes session metadata to booking system (session_id or discovery_document_id)
6. Booking confirmation creates record in database linking session to scheduled meeting
7. Booking confirmation email includes PDF report attachment (if user provided email earlier)
8. If user hasn't provided email yet, email capture triggered after booking confirmed
9. Calendar displays vendor's available time slots (15-30 min consultation slots)
10. User receives booking confirmation email with calendar invite (handled by calendar service)
11. Vendor receives notification of new booking with discovery document reference
12. Analytics tracking: booking completion rate, booking source (summary screen vs email link)
13. Error handling: if calendar unavailable, show fallback contact form or email CTA
14. Mobile-optimized: calendar booking works smoothly on mobile devices

### Story 4.5: Discovery Document Generation (Vendor View)

As a **vendor/sales team member**,
I want **structured discovery documents for each completed wizard session**,
so that **I can prepare effectively for consultations and follow up with qualified leads**.

#### Acceptance Criteria

1. Discovery document format designed capturing all session data:
   - Contact information (email if provided)
   - Business context (industry, team size, pain points, volume metrics)
   - Full question/answer history with timestamps
   - AI-generated recommendations (original and user-modified)
   - Final automation package with pricing breakdown
   - Time savings analysis and ROI calculations
   - Session metadata (duration, completion date, device type, abandonment points if incomplete)
   - Lead quality indicators (package value, engagement level, booking status)
2. Discovery documents stored in `discovery_documents` table with status: "completed", "booked", "emailed"
3. API endpoint created: GET `/api/discovery-documents` returns list of documents (vendor access only, requires authentication placeholder for MVP)
4. Simple admin view/dashboard displays discovery documents in table:
   - Columns: Date, Industry, Team Size, Automations Count, Total Cost, Status (Completed/Booked/Emailed)
   - Sortable by date, cost, status
   - Click row to view full discovery document details
5. Discovery document detail view displays all captured information in organized sections
6. Export discovery document as JSON or CSV for CRM import (optional for MVP)
7. Discovery documents retained for 90 days, then auto-deleted for privacy compliance
8. Lead quality score calculated based on: package value, time spent in wizard, booking completion
9. Analytics dashboard shows: total completions, conversion rates, average package value, top industries
10. Email notification sent to vendor when high-value lead (>$2,000/month) completes wizard or books call
11. Discovery documents redact sensitive information if user didn't opt in to contact
12. Admin authentication placeholder: basic password protection or IP whitelist for MVP (proper auth post-MVP)

## Epic 5: Mobile Experience & Polish

**Goal**: Create streamlined mobile flow (5-minute lite version), implement session continuation/handoff between devices, add contextual AI insights display throughout wizard, optimize performance (loading times, animations), and conduct beta user testing with refinements. This epic delivers a production-ready wizard with polished desktop and mobile experiences.

### Story 5.1: Mobile-Optimized Flow (5-Minute Lite Version)

As a **mobile user**,
I want **a streamlined wizard experience optimized for mobile devices**,
so that **I can complete discovery quickly on my phone without frustration**.

#### Acceptance Criteria

1. Mobile flow detection: automatically serve lite version for viewports <768px
2. Simplified question sequence for mobile (reduce from ~8-10 questions to ~5-6 core questions):
   - Industry (required)
   - Team size (required)
   - Top 2 pain points (multi-select limited to 2)
   - Volume estimate (single combined question with slider)
   - Contact preference (optional: email or "continue on desktop")
3. Single-page scroll layout option (all questions on one scrollable page) OR wizard stepper (user testing determines best approach)
4. Touch-optimized controls: large tap targets (minimum 44px), thumb-reachable buttons
5. Reduced visual complexity: fewer decorative elements, focus on core content
6. Simplified workflow sketcher: list view instead of grid, swipe-to-remove gestures
7. Persistent bottom bar shows: progress, pricing, "Continue" button (always accessible)
8. Mobile flow completes in target 5 minutes or less (validated via user testing)
9. Mobile session auto-saves progress for desktop continuation
10. Analytics tracking: mobile vs desktop usage, mobile completion rate, time to complete
11. Performance optimized: <3 seconds initial load on 4G connection, minimal JavaScript
12. Mobile-specific error messages: shorter, action-oriented
13. "Continue on Desktop" CTA displayed prominently: generates QR code or sends email link
14. Mobile experience maintains brand consistency with desktop version

### Story 5.2: Session Continuation & Device Handoff

As a **wizard user**,
I want **to start on mobile and seamlessly continue on desktop**,
so that **I can explore quickly on my phone and complete the full experience on my computer**.

#### Acceptance Criteria

1. Session continuation link generation: creates unique URL with session token
2. "Continue on Desktop" button displays QR code and offers email link option
3. QR code generation service creates scannable code linking to session URL
4. Email link option sends message: "Continue your AI automation plan on desktop" with secure session link
5. Session links expire after 7 days for security
6. Desktop session resume: user opens link, wizard loads exactly where they left off (preserves all answers, automations)
7. Visual indicator on desktop: "Continuing from mobile session started [time] ago"
8. Device handoff works bidirectionally: desktop → mobile and mobile → desktop
9. Session state includes device_type tracking for analytics
10. Security: session tokens are single-use or IP-restricted to prevent unauthorized access
11. Graceful handling if session expired: offer to restart with pre-filled industry/basic info
12. Analytics tracking: handoff usage rate, completion rate after handoff vs single-device
13. User education: tooltip or modal explains handoff feature on first mobile session

### Story 5.3: Contextual AI Insights Display

As a **wizard user**,
I want **to see relevant business analysis throughout the wizard**,
so that **I understand the AI is actively analyzing my context and not just showing generic content**.

#### Acceptance Criteria

1. Contextual insights engine created: generates business-relevant statements based on user inputs
2. Insights displayed at key moments:
   - After industry selection: "Legal firms typically save 12-20 hours/week with automation"
   - After volume input: "50 documents/week = ~1,000 hours/year of review time"
   - During AI analysis: "5 paralegals × 2hrs/day intake = 50hrs/week opportunity" (instead of generic loading)
   - After recommendations generated: "Based on your 3-person team, these automations deliver highest ROI"
3. Insights use actual user data (numbers, industry specifics) to feel personalized, not templated
4. Insights appear in designated "insight cards" or highlighted sections, visually distinct from main content
5. Insights are concise (1-2 sentences), easy to scan on mobile and desktop
6. Insights tone matches brand: confident, educational, not salesy
7. AI-generated insights when possible: LLM generates contextual statements based on session data
8. Fallback to rule-based insights if AI generation fails or takes too long
9. Insights logged to session for vendor visibility (understand what resonated with user)
10. Analytics tracking: which insights displayed, user engagement (time spent on screen with insight)
11. Accessibility: insights announced by screen readers, proper semantic markup
12. Insights localized to user's context: references their specific numbers, not generic examples

### Story 5.4: Performance Optimization & Polish

As a **wizard user**,
I want **a fast, smooth, bug-free experience**,
so that **the wizard feels professional and inspires confidence in the AI capabilities**.

#### Acceptance Criteria

1. Initial page load optimized: <2 seconds on desktop, <3 seconds on mobile (4G connection)
2. Time to Interactive (TTI) optimized: <3 seconds (user can interact quickly)
3. Code splitting implemented: only load JavaScript needed for current step
4. Image optimization: compressed images, lazy loading, responsive images (srcset)
5. Bundle size optimization: frontend bundle <500KB gzipped
6. API response caching: Redis/Upstash caches frequent queries (automation templates, pricing calculations)
7. Database query optimization: indexed columns, efficient queries, connection pooling
8. Animation performance: 60fps for all transitions, no jank or stutter
9. Loading states: skeleton screens or meaningful content (not blank screens or generic spinners)
10. Error boundaries implemented: graceful degradation if component fails (show fallback UI, log error)
11. Cross-browser testing: verify functionality on Chrome, Safari, Firefox, Edge (latest 2 versions each)
12. Mobile device testing: verify on iOS Safari, Android Chrome (minimum iOS 14, Android 10)
13. Accessibility audit: WCAG 2.1 AA compliance validated with automated tools (Axe, Lighthouse)
14. Security audit: vulnerability scan, dependency updates, penetration testing (basic)
15. Edge case handling: very long names, unusual characters, large data sets, slow connections
16. Regression testing: ensure all previous epic features still work correctly
17. Performance monitoring: Sentry error tracking configured, analytics dashboards live

### Story 5.5: Beta User Testing & Refinements

As a **product team**,
I want **to validate the wizard with real target users before public launch**,
so that **we identify and fix usability issues, validate value proposition, and ensure quality**.

#### Acceptance Criteria

1. Beta testing plan created: recruit 10-15 users from target segments (legal, healthcare, real estate, consulting business owners)
2. Beta testing script prepared: tasks, scenarios, observation guidelines, post-test survey
3. Beta testing conducted: each user completes full wizard session while observer takes notes
4. Key validation goals:
   - 60%+ completion rate achieved
   - Average session time: 12 minutes desktop, 5 minutes mobile
   - Post-session survey: 75%+ rate experience as "valuable" or "very valuable"
   - AI recommendations relevant in 80%+ of cases
   - Pricing feels transparent and trustworthy (not "too high" or "hiding something")
5. Usability issues documented: categorized by severity (critical, major, minor)
6. Critical issues fixed before launch: any bugs preventing completion, major confusion points
7. Major issues addressed or scheduled: significant UX friction, unclear messaging
8. Minor issues logged for post-MVP: cosmetic issues, nice-to-have improvements
9. A/B test opportunities identified: alternative copy, button placement, flow variations
10. Feedback themes summarized: what users loved, what confused them, what was missing
11. Iteration cycle: fix issues → retest with 2-3 users → validate fixes
12. Launch readiness checklist completed: all MVP acceptance criteria met, no critical bugs, performance targets achieved
13. Go/no-go decision: stakeholder review of beta results determines launch readiness
14. Post-launch monitoring plan: define metrics to track first 100 sessions, set up alerts for errors or drop-offs

## Checklist Results Report

### Executive Summary

**Overall PRD Completeness**: 95% complete

**MVP Scope Appropriateness**: Just Right - Well-balanced scope that delivers core value while maintaining 6-8 week feasibility

**Readiness for Architecture Phase**: **READY** - Comprehensive requirements, clear technical guidance, well-structured epics

**Critical Strengths**:

- Excellent problem definition backed by detailed Project Brief
- Clear differentiation (reverse discovery, transparent pricing, workflow sketcher)
- Strong technical guidance with specific recommendations (React, Node.js, Claude Sonnet, Supabase considerations)
- Comprehensive user stories with detailed acceptance criteria
- 5 sequential epics deliver incremental value from foundation to production-ready

**Minor Gaps Identified**:

- Analytics requirements distributed across stories; centralized tracking plan would help
- A/B testing strategy mentioned in Epic 5 but not detailed
- Post-launch iteration plan implicit but not formalized

### Category Analysis

| Category                         | Status | Critical Issues                                      |
| -------------------------------- | ------ | ---------------------------------------------------- |
| 1. Problem Definition & Context  | PASS   | None - Excellent Project Brief integration           |
| 2. MVP Scope Definition          | PASS   | None - Clear boundaries, well-justified scope        |
| 3. User Experience Requirements  | PASS   | None - Comprehensive UI goals, interaction paradigms |
| 4. Functional Requirements       | PASS   | None - 20 FRs cover all MVP features                 |
| 5. Non-Functional Requirements   | PASS   | None - 18 NFRs include performance, security, cost   |
| 6. Epic & Story Structure        | PASS   | None - 5 epics, 25 stories, logical sequencing       |
| 7. Technical Guidance            | PASS   | None - Detailed stack recommendations with rationale |
| 8. Cross-Functional Requirements | PASS   | None - Data, integrations, operations addressed      |
| 9. Clarity & Communication       | PASS   | None - Clear, well-organized, comprehensive          |

### Top Recommendations (Enhancements, Not Blockers)

**MEDIUM Priority**:

1. **Centralized Analytics Plan**: Create a single reference document listing all tracked events, conversion funnels, and dashboard requirements (currently distributed across 25 stories)
2. **A/B Testing Strategy**: Define specific hypotheses to test (e.g., pricing visibility, CTA copy, mobile flow length) with success criteria
3. **Post-MVP Roadmap**: Formalize phase 2 priorities based on MVP learnings (currently implied but not explicit)

**LOW Priority**: 4. **Wireframes/Mockups**: Visual designs would help align team on "next-level familiar" aesthetic (not required for architecture phase but valuable for development) 5. **Competitive Analysis**: Brief analysis of similar tools (mortgage calculators, configurators, chatbots) to validate differentiation (mentioned in Project Brief but not detailed)

### MVP Scope Assessment

**Appropriate Scope**: ✅

- 5 epics × 5 stories = 25 total stories
- ~1.5-2 weeks per epic = 7.5-10 weeks total (within 6-8 week target with parallelization or scope tuning)
- Each epic delivers deployable value
- Complexity distributed evenly across epics

**No Features to Cut**: Core experience requires all defined features for value proposition

- Cannot cut AI (differentiator), pricing (transparency promise), workflow sketcher (UX innovation), PDF/booking (conversion)
- Mobile experience (Epic 5) could be deferred if timeline pressure, but highly valuable for target market

**Timeline Realism**: Achievable with 2 full-stack developers or 1 FTE + founder contributions

- Epic 1-2: Heavy lift (infrastructure + AI) - 3-4 weeks
- Epic 3-4: Moderate (UX + integrations) - 3-4 weeks
- Epic 5: Polish + testing - 1.5-2 weeks
- **Recommendation**: Prioritize Epic 1-4 for core MVP, Epic 5 as "launch quality" phase (can soft-launch after Epic 4 if needed)

### Technical Readiness

**Technical Clarity**: Excellent - Architect has clear direction

- Stack recommendation: React + TypeScript, Node.js backend, PostgreSQL, Supabase consideration
- Hosting: Vercel/Netlify frontend, Railway/Render backend
- LLM: Claude Sonnet leading candidate (requires benchmarking in Epic 2)
- Integrations: Cal.com/Calendly, Resend/SendGrid, Puppeteer, Plausible

**Identified Technical Risks**:

1. **Workflow Sketcher Complexity**: Most novel UX component, may require iteration (mitigated by Epic 3 focus)
2. **LLM Cost Control**: Token usage could exceed $100/month budget at scale (mitigated by rate limiting, monitoring)
3. **PDF Generation Performance**: 5-second target may be tight with Puppeteer (consider React-PDF alternative)
4. **Mobile-Desktop Handoff**: Session continuation adds complexity (Epic 5, deferrable if needed)

**Areas for Architect Investigation**:

- Next.js (SSR) vs Vite (SPA) decision based on SEO priority
- Supabase (all-in-one) vs separate Postgres+Redis trade-offs
- LLM provider benchmarking methodology and criteria
- Workflow sketcher interaction patterns (Figma/Miro research)

### Final Decision

**✅ READY FOR ARCHITECT**

The PRD is comprehensive, well-structured, and provides excellent guidance for architectural design. The requirements are clear, testable, and appropriately scoped for MVP. Technical guidance balances specificity (recommended stack) with flexibility (alternatives documented). Epic structure delivers incremental value with logical sequencing.

**Next Step**: Proceed to architecture phase with /BMad/agents/architect using this PRD as input.

## Next Steps

### UX Expert Prompt

**Prompt for UX Designer**:

"Review the AI Discovery Wizard PRD (docs/prd.md) focusing on the User Interface Design Goals section. Create detailed UX specifications for the following high-priority screens:

1. **Workflow Sketcher Interface**: Define the visual layout, card design, add/remove interactions, and animation patterns that deliver the 'next-level familiar' experience
2. **Pricing Panel**: Design the persistent sidebar/bottom-sheet with real-time updates, detailed breakdown modal, and ROI visualization
3. **Mobile Flow**: Streamline the question sequence and workflow sketcher for 5-minute completion while maintaining brand consistency

Deliverables: High-fidelity wireframes, interaction specifications, component library requirements (Tailwind + Radix/shadcn/ui), and accessibility guidelines (WCAG AA compliance)."

### Architect Prompt

**Prompt for System Architect**:

"Using the AI Discovery Wizard PRD (docs/prd.md) and Project Brief (docs/brief.md) as input, create a comprehensive system architecture document covering:

1. **System Architecture**: Detailed component diagram, data flow, API design, and integration architecture
2. **Technology Stack**: Finalize framework choices (Next.js vs Vite, Supabase vs separate services, LLM provider) with documented rationale
3. **Database Schema**: Complete data model with tables, relationships, indexes, and migrations strategy
4. **API Specifications**: RESTful endpoints, request/response formats, authentication/authorization approach
5. **Deployment Architecture**: Infrastructure design, CI/CD pipeline, environment configuration, monitoring strategy
6. **Technical Risks & Mitigation**: Address identified risks (workflow sketcher complexity, LLM costs, PDF performance)
7. **Development Roadmap**: Break epics into technical implementation phases with dependency mapping

Focus on cost-optimization (target $20-100/month), serverless-ready design, and 6-8 week MVP timeline feasibility."
