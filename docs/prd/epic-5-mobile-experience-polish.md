# Epic 5: Mobile Experience & Polish

**Goal**: Create streamlined mobile flow (5-minute lite version), implement session continuation/handoff between devices, add contextual AI insights display throughout wizard, optimize performance (loading times, animations), and conduct beta user testing with refinements. This epic delivers a production-ready wizard with polished desktop and mobile experiences.

## Story 5.1: Mobile-Optimized Flow (5-Minute Lite Version)

As a **mobile user**,
I want **a streamlined wizard experience optimized for mobile devices**,
so that **I can complete discovery quickly on my phone without frustration**.

### Acceptance Criteria

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

## Story 5.2: Session Continuation & Device Handoff

As a **wizard user**,
I want **to start on mobile and seamlessly continue on desktop**,
so that **I can explore quickly on my phone and complete the full experience on my computer**.

### Acceptance Criteria

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

## Story 5.3: Contextual AI Insights Display

As a **wizard user**,
I want **to see relevant business analysis throughout the wizard**,
so that **I understand the AI is actively analyzing my context and not just showing generic content**.

### Acceptance Criteria

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

## Story 5.4: Performance Optimization & Polish

As a **wizard user**,
I want **a fast, smooth, bug-free experience**,
so that **the wizard feels professional and inspires confidence in the AI capabilities**.

### Acceptance Criteria

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

## Story 5.5: Beta User Testing & Refinements

As a **product team**,
I want **to validate the wizard with real target users before public launch**,
so that **we identify and fix usability issues, validate value proposition, and ensure quality**.

### Acceptance Criteria

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
