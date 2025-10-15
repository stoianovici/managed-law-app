# Wireframes & Mockups

**Primary Design Files:** To be determined - recommend Figma for collaborative design, prototyping, and developer handoff. Alternative: Sketch or Adobe XD.

## Key Screen Layouts

### Landing Page

**Purpose:** Convert visitors into wizard participants by clearly communicating value proposition and time commitment

**Key Elements:**

- Hero section with headline: "Discover what AI can do for your business in 10 minutes—with transparent pricing"
- Time commitment badge (prominently displayed): "⏱️ 10-15 min on desktop, 5 min on mobile"
- Primary CTA button: "Check if AI can be useful for me" (large, high-contrast, centered above fold)
- Social proof elements: "100+ businesses discovered automation opportunities" or testimonial quotes
- Three benefit bullets: "✓ AI suggests relevant automations", "✓ See transparent pricing instantly", "✓ Get shareable PDF report"
- Trust indicators: "No credit card required", "No commitment", privacy badge
- Clean, professional aesthetic: generous whitespace, modern typography, professional services-appropriate imagery (not tech-heavy)

**Interaction Notes:** CTA button has hover state with subtle animation (lift + shadow). Scroll indicator suggests "Learn more" content below fold. Mobile version reduces hero text, maintains large CTA button (44px minimum touch target). Fast load critical: hero image optimized <100KB, above-fold content prioritized.

**Design File Reference:** [To be created in Figma: Landing-Page-Desktop-v1, Landing-Page-Mobile-v1]

### Question Flow (Context Gathering)

**Purpose:** Gather business context through conversational, adaptive questions without feeling like interrogation

**Key Elements:**

- Progress bar at top: "Question 3 of 5 — 60%" with visual fill
- Question title (large, friendly): "What industry are you in?"
- Form control appropriate to question type: Dropdown for industry, radio buttons for team size, checkboxes for multi-select pain points
- Contextual help text below question: Light gray, explains why we're asking
- Back button (subtle, top-left): "← Back"
- Next button (prominent, bottom-right): "Continue →" (disabled until answer selected)
- Auto-save indicator (subtle, top-right): "Saved" with checkmark icon
- Visual breathing room: Single question per screen, minimal distractions

**Interaction Notes:** Next button enables with animation when valid answer selected. Progress bar animates smoothly on forward/back navigation. Form controls have clear focus states (keyboard navigation). Mobile: Larger touch targets, simplified layouts, minimal scrolling per screen. Adaptive branching invisible to user: Progress bar adjusts dynamically without confusion.

**Design File Reference:** [To be created: Question-Flow-Industry, Question-Flow-TeamSize, Question-Flow-PainPoints, Question-Flow-VolumeMetrics]

### AI Analysis Interstitial

**Purpose:** Transform loading time into value demonstration by showing contextual business insights

**Key Elements:**

- Animated icon: Abstract AI visual (not cliché robot/brain), subtle movement
- Primary message: "Analyzing your workflow opportunities..."
- **Contextual insight card** (this is the key differentiator): Shows real calculation based on user input
  - Example: "5 paralegals × 2hrs/day document review = 50hrs/week automation opportunity"
  - Example: "Real estate firms with 50 closings/month typically save 20-25 hours with contract automation"
- Progress indicator: Subtle spinner or animated dots (2-3 seconds typical duration)
- Branded color scheme: Matches overall aesthetic

**Interaction Notes:** Insight changes if analysis takes >3 seconds (show 2-3 rotating insights). No generic "Please wait" messaging—every message is contextually relevant. Smooth transition to recommendations screen (fade/slide animation). Mobile: Simplified visual, same contextual messaging.

**Design File Reference:** [To be created: AI-Analysis-Interstitial-Desktop, AI-Analysis-Interstitial-Mobile]

### Workflow Sketcher (The Signature Experience)

**Purpose:** Enable intuitive automation package customization with real-time pricing feedback—the "next-level familiar" interaction

**Key Elements:**

- **Main Canvas** (left 60-70% desktop):
  - 3-7 automation cards arranged in organized grid (2-3 columns)
  - Each card: Icon, title, 2-sentence description, time savings badge ("Saves ~15hrs/month"), cost contribution ("$450/mo")
  - Remove button (X icon, top-right corner of each card)
  - Visual hierarchy: Title and time savings most prominent
  - Empty state message if all cards removed: "Add automations from library below"

- **Persistent Pricing Panel** (right 30-40% desktop, sticky):
  - Total monthly cost: "$2,450/month" (large, bold)
  - Total time savings: "Saves 42 hours/month"
  - ROI metric: "$58/hour saved — less than hiring"
  - Automations count: "5 automations selected"
  - "View Detailed Breakdown" button (expands to show per-automation costs)
  - "Continue to Summary" CTA button (prominent, primary color)

- **Automation Library** (below sketcher canvas):
  - Section header: "Browse More Automations"
  - Category tabs: All, Document Processing, Communication, Data Analysis, Administrative
  - Library cards (similar to sketcher cards but with "Add +" button instead of remove)
  - Search/filter controls

**Interaction Notes:** Card add/remove has smooth animation (fade in/out, not jarring). Pricing panel updates within 500ms of changes (no full page reload). Hover states on cards show additional detail or dim/brighten. Drag-to-reorder considered but deferred to post-MVP (adds complexity without clear UX benefit). Mobile: Cards display as list (single column), pricing panel becomes bottom sheet (swipe up to expand), library scrollable with category filters.

**Design File Reference:** [To be created: Workflow-Sketcher-Desktop-Full, Workflow-Sketcher-Mobile-Compact, Pricing-Panel-Expanded, Automation-Library]

### Summary Screen

**Purpose:** Professional, boardroom-ready output that user can confidently share with stakeholders

**Key Elements:**

- Document-style layout (centered, max-width ~900px)
- Section 1: "Your Business Context" - Industry, team size, pain points formatted clearly
- Section 2: "Recommended Automations" - List with icons, descriptions, time savings
- Section 3: "Time Savings Analysis" - Visual breakdown (table or simple chart)
- Section 4: "Investment Summary" - Total cost, cost per hour saved, ROI calculation
- Call-out box: Key insights ("Your 5-person legal team could save 42 hours/month...")
- Two prominent CTAs side-by-side:
  - "Download PDF Report" (primary button)
  - "Book a Consultation" (secondary button with calendar icon)
- "Edit Package" link (subtle, top-right): Returns to workflow sketcher
- Timestamp: "Report generated: October 15, 2025"

**Interaction Notes:** Print-friendly CSS: Clean layout when printing or generating PDF. Scroll to top on load (user sees full summary from beginning). CTA buttons have loading states when clicked (PDF generation, calendar loading). Mobile: Same content, single-column layout, CTAs stacked vertically (full-width buttons).

**Design File Reference:** [To be created: Summary-Screen-Desktop, Summary-Screen-Mobile, Summary-Print-View]

### Email Capture Modal

**Purpose:** Value-first email capture that feels like mutual exchange, not data extraction

**Key Elements:**

- Modal overlay (subtle background dim, not jarring black)
- Modal header: "Get Your Personalized Automation Plan"
- Value proposition: "Receive your shareable PDF report via email—perfect for discussing with partners and stakeholders"
- Email input field (large, clear label: "Email address")
- Privacy assurance text: "We'll only use your email to send this report. No spam, unsubscribe anytime."
- Optional checkbox: "Yes, send me occasional automation insights" (opt-in for newsletter)
- Two buttons: "Send Report" (primary) and "Cancel" (secondary/text link)
- Success state (after submission): Checkmark icon, "Sent! Check your inbox in the next few minutes."

**Interaction Notes:** Email validation on blur (real-time feedback for invalid format). Send button disabled until valid email entered. Modal dismisses on "Cancel" or clicking outside (returns to summary). Loading state on "Send Report" (spinner + "Generating PDF..."). Mobile: Modal adapts to full-screen on small viewports (easier input on mobile keyboards).

**Design File Reference:** [To be created: Email-Capture-Modal, Email-Capture-Success]
