# Epic 3: Workflow Sketcher & Pricing System

**Goal**: Build visual workflow sketcher interface (automation cards, add/remove/modify interactions), implement real-time pricing calculation engine (token estimation, cost modeling), create time savings calculator, and design persistent pricing panel. This epic delivers the "next-level familiar" UX and transparent pricing that differentiates the wizard.

## Story 3.1: Workflow Sketcher UI Component

As a **wizard user**,
I want **a visual interface where I can see and interact with my automation package**,
so that **I can easily understand what's included and make modifications intuitively**.

### Acceptance Criteria

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

## Story 3.2: Add/Remove Automation Interactions

As a **wizard user**,
I want **to easily add new automations or remove ones I don't need**,
so that **I can customize my package to match my exact requirements**.

### Acceptance Criteria

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

## Story 3.3: Pricing Calculation Engine

As a **backend developer**,
I want **a pricing engine that accurately estimates monthly costs for automation packages**,
so that **users receive reliable, transparent cost information**.

### Acceptance Criteria

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

## Story 3.4: Time Savings Calculator

As a **wizard user**,
I want **to see how much time each automation will save me**,
so that **I can evaluate ROI and prioritize which automations matter most**.

### Acceptance Criteria

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

## Story 3.5: Persistent Pricing Panel

As a **wizard user**,
I want **continuous visibility into pricing and ROI as I modify my automation package**,
so that **I can make informed decisions without losing context**.

### Acceptance Criteria

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
