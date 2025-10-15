# Component Library / Design System

**Design System Approach:** Leverage existing design system primitives rather than building from scratch. Recommend **shadcn/ui** as the foundation—provides accessible, customizable React components built on Radix UI primitives, fully compatible with Tailwind CSS. This approach balances customization needs with development velocity for MVP timeline.

## Core Components

### Button

**Purpose:** Primary interaction element for CTAs, form submissions, and navigation

**Variants:** Primary (high-contrast, bold for CTA actions), Secondary (lower contrast, outlined for alternative actions), Ghost (minimal styling for tertiary actions), Destructive (red/warning color for removal actions)

**States:** Default, Hover, Active, Disabled, Loading (with spinner)

**Usage Guidelines:** Maximum one primary button per screen/section. Large touch targets: 44px minimum height on mobile, 40px desktop. Loading state disables button and shows spinner while maintaining width. Icons: leading for clear metaphors (calendar, download), trailing for forward navigation. Accessible with clear focus ring and aria-label when icon-only.

### Card (Automation Card)

**Purpose:** Display automation options in workflow sketcher and library

**Variants:** Sketcher Card (includes remove button, selected state), Library Card (includes add button, browsable state), Recommendation Card (initial AI suggestions, highlighted state)

**States:** Default, Hover (subtle lift/shadow), Selected (border highlight), Disabled

**Usage Guidelines:** Consistent card anatomy: Icon top-left, title, description, time savings badge bottom-left, cost bottom-right, action button top-right. Visual hierarchy: Title 18px bold, description 14px regular, badges 12px semibold. Hover animation: Subtle scale (1.02x) + shadow increase, 200ms ease-out. Mobile: Remove hover states, increase padding for thumb targets. Empty state shows dashed border card with "Browse library" message.

### Modal / Dialog

**Purpose:** Email capture, confirmations, detailed breakdowns

**Variants:** Standard Modal (center-aligned, max-width 500px for email capture), Large Modal (max-width 800px for pricing breakdown), Full-screen Mobile (slides up from bottom on <768px)

**States:** Open, Closing (fade-out animation), Focus-trapped (keyboard navigation contained)

**Usage Guidelines:** Semi-transparent backdrop (rgba(0,0,0,0.5)), dismissible by clicking outside or ESC key. Auto-focus first input field on open, trap tab navigation within modal. Close button always visible top-right (X icon). Animations: Fade in backdrop (150ms), scale up modal (200ms ease-out). Accessibility: aria-modal="true", role="dialog", focus restoration on close.

### Progress Bar

**Purpose:** Show wizard completion percentage

**Variants:** Linear (horizontal bar with fill percentage), Stepped (show discrete steps like "Step 3 of 5")

**States:** Active (current step), Completed (previous steps), Upcoming (future steps)

**Usage Guidelines:** Always visible with sticky top position during wizard flow. Smooth transition animation when progress changes (300ms ease). Text label shows both step count and percentage ("Question 3 of 5 — 60%"). Use primary brand color for fill, light gray for unfilled. Mobile: Reduce text size while maintaining visual prominence.

### Form Controls

**Purpose:** Capture user input in question flow

**Variants:** Select/Dropdown (industry selection, searchable for long lists), Radio Button Group (team size, mutually exclusive options), Checkbox Group (pain points, multi-select), Slider (volume metrics, numerical range input), Text Input (email capture, open-ended questions)

**States:** Default, Focus, Filled, Error (with validation message), Disabled

**Usage Guidelines:** Clear labels always above/beside input, not placeholder-only. Prominent focus indicators with high contrast border/ring. Validation on blur for performance with inline error messages below field. Error states include red border, error icon, and clear message. Mobile: Large touch targets, appropriate input types (email keyboard, number pad).

### Pricing Panel

**Purpose:** Persistent sidebar/bottom-sheet showing real-time pricing

**Variants:** Desktop Sidebar (fixed right column, 30-40% width), Mobile Bottom Sheet (collapsible, swipe-up to expand), Expanded View (modal showing detailed per-automation breakdown)

**States:** Collapsed (mobile), Expanded, Loading (during calculation)

**Usage Guidelines:** Sticky positioning remains visible during scroll on desktop. Update animation provides subtle pulse or highlight when values change. Hierarchy: Total cost most prominent (32px bold), secondary metrics 16-18px. CTA button always visible at bottom of panel ("Continue to Summary"). Loading state dims previous values and shows subtle spinner (<500ms typically).
