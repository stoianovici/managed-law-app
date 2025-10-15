# Branding & Style Guide

## Visual Identity

**Brand Guidelines:** To be created. Recommend establishing brand identity that balances professionalism (appeals to business owners) with innovation (demonstrates AI capability). Inspiration sources: Linear (polish, attention to detail), Stripe (clarity, trustworthy), Notion (approachable, not intimidating). Avoid overly technical/engineer-focused aesthetics.

## Color Palette

| Color Type | Hex Code                                                      | Usage                                                            |
| ---------- | ------------------------------------------------------------- | ---------------------------------------------------------------- |
| Primary    | #3B82F6                                                       | Primary buttons, progress bars, links, brand accents             |
| Secondary  | #8B5CF6                                                       | Secondary accents, highlights, AI-related elements               |
| Accent     | #10B981                                                       | Success states, positive metrics (time saved), growth indicators |
| Success    | #22C55E                                                       | Positive feedback, confirmations, completed states               |
| Warning    | #F59E0B                                                       | Cautions, important notices, attention-needed states             |
| Error      | #EF4444                                                       | Errors, destructive actions, validation failures                 |
| Neutral    | #F9FAFB, #F3F4F6, #E5E7EB, #9CA3AF, #6B7280, #374151, #1F2937 | Text hierarchy, borders, backgrounds (light to dark scale)       |

## Typography

### Font Families

- **Primary:** Inter (sans-serif) - Excellent readability at all sizes, modern, professional, optimized for screens
- **Secondary:** System font stack fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
- **Monospace:** JetBrains Mono - For code snippets, technical details, token counts (if displayed)

### Type Scale

| Element | Size            | Weight       | Line Height |
| ------- | --------------- | ------------ | ----------- |
| H1      | 48px / 3rem     | 700 Bold     | 1.2 / 58px  |
| H2      | 36px / 2.25rem  | 700 Bold     | 1.3 / 47px  |
| H3      | 24px / 1.5rem   | 600 Semibold | 1.4 / 34px  |
| Body    | 16px / 1rem     | 400 Regular  | 1.6 / 26px  |
| Small   | 14px / 0.875rem | 400 Regular  | 1.5 / 21px  |

**Additional Specifications:** Body Large (18px, 400 Regular, 1.6 line-height) for hero copy and important callouts. Label (14px, 500 Medium, 1.4 line-height) for form labels and navigation. Caption (12px, 400 Regular, 1.5 line-height) for helper text and metadata. Mobile adjustments: H1 reduces to 36px, H2 to 28px on <768px. Body text maintains 16px minimum for readability.

## Iconography

**Icon Library:** Lucide Icons (https://lucide.dev) - Open source, consistent style, extensive library, React components available

**Usage Guidelines:** Icon sizing: 16px (inline with text), 20px (standard UI), 24px (prominent actions), 32px+ (feature illustrations). Stroke width 2px standard. Color inherits from parent text for consistency. Always include text labels for primary actions. Automation category icons: Document (file-text), Communication (message-square), Data Analysis (bar-chart), Administrative (settings). Action icons: Remove (x), Add (plus), Calendar (calendar), Download (download), Edit (edit-2), Back (arrow-left), Forward (arrow-right). All meaningful icons include aria-label; decorative icons have aria-hidden="true".

## Spacing & Layout

**Grid System:** 12-column grid on desktop (1024px+), 6-column on tablet (768-1023px), single column on mobile (<768px)

**Spacing Scale:** Based on Tailwind's default scale (4px base unit). xs: 4px (tight spacing, icon-text gaps), sm: 8px (related elements), md: 16px (standard component padding), lg: 24px (section spacing), xl: 32px (component gaps), 2xl: 48px (section separators), 3xl: 64px (major section breaks).

**Container Max-Width:** Landing page content: 1280px, Wizard content: 1024px, Summary/document view: 900px (reading-optimized)

**Border Radius:** sm: 4px (badges, tags), md: 8px (buttons, inputs, cards), lg: 12px (modals, panels), xl: 16px (hero sections)

**Shadows:** sm: `0 1px 2px rgba(0, 0, 0, 0.05)` (subtle elevation), md: `0 4px 6px rgba(0, 0, 0, 0.07)` (standard cards), lg: `0 10px 15px rgba(0, 0, 0, 0.1)` (modals, pricing panel), xl: `0 20px 25px rgba(0, 0, 0, 0.15)` (maximum elevation)
