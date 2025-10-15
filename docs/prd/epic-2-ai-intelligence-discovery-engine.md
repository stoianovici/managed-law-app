# Epic 2: AI Intelligence & Discovery Engine

**Goal**: Integrate LLM provider (Claude/GPT-4), implement adaptive questioning logic (context gathering with branching), build AI recommendation engine that analyzes user context and proposes relevant automations. This epic transforms the basic wizard into an intelligent discovery tool that provides tailored automation suggestions.

## Story 2.1: LLM Provider Integration & Configuration

As a **backend developer**,
I want **LLM provider integrated with proper error handling and rate limiting**,
so that **the wizard can make AI-powered decisions reliably and cost-effectively**.

### Acceptance Criteria

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

## Story 2.2: Adaptive Question Engine

As a **wizard user**,
I want **questions that adapt based on my previous answers**,
so that **the wizard feels intelligent and doesn't waste my time with irrelevant questions**.

### Acceptance Criteria

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

## Story 2.3: Industry Knowledge Base & Automation Templates

As a **product manager**,
I want **a curated library of automation opportunities for each industry**,
so that **the AI can suggest relevant, credible solutions rather than generic recommendations**.

### Acceptance Criteria

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

## Story 2.4: AI Recommendation Engine

As a **wizard user**,
I want **AI to analyze my context and proactively suggest relevant automations**,
so that **I discover opportunities I might not have thought to ask about**.

### Acceptance Criteria

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

## Story 2.5: AI Recommendations Display

As a **wizard user**,
I want **to see AI-generated automation recommendations with clear explanations**,
so that **I understand why each suggestion is relevant to my business and can make informed decisions**.

### Acceptance Criteria

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
