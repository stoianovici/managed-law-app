# Responsiveness Strategy

## Breakpoints

| Breakpoint | Min Width | Max Width | Target Devices                                         |
| ---------- | --------- | --------- | ------------------------------------------------------ |
| Mobile     | 0px       | 767px     | iPhone SE (375px), standard smartphones up to phablets |
| Tablet     | 768px     | 1023px    | iPad (768px), iPad Pro (834px), Android tablets        |
| Desktop    | 1024px    | 1439px    | Standard laptops, small desktop monitors               |
| Wide       | 1440px    | -         | Large desktop monitors, ultrawide displays             |

## Adaptation Patterns

**Layout Changes:** Mobile (0-767px) uses single-column layout throughout with stacked workflow sketcher cards and bottom sheet pricing panel. Tablet (768-1023px) employs hybrid layout with 2-column card grid and collapsible pricing sidebar. Desktop (1024px+) features full multi-column layouts with 3-column card grid and persistent pricing sidebar. Wide (1440px+) centers content with max-width constraints (1280px) and slightly scaled typography.

**Navigation Changes:** Mobile displays back button in header (top-left) with next button in fixed bottom bar, sticky progress bar at top, minimal chrome. Tablet similar to mobile with more spacing, centered buttons (max 400px width). Desktop shows inline back/next buttons within content area, persistent progress bar, visible secondary actions without expanding menus.

**Content Priority:** Mobile-first approach never hides critical information, only collapses secondary details (help text behind tap-to-expand). Desktop shows additional context inline with more automations visible in library (12 vs 6 on mobile). Images optimized per breakpoint via srcset: 375px (mobile), 768px (tablet), 1280px (desktop), 1920px (wide). Time savings shown as simple list on mobile, enhanced with charts/graphs on desktop.

**Interaction Changes:** Touch optimization for mobile/tablet uses 44px minimum touch targets, removes non-functional hover states, enables swipe gestures for bottom sheet. Mouse optimization for desktop includes hover states with additional info, cursor changes, and tooltips. Keyboard navigation remains consistent across all breakpoints. Mobile shows simpler loading skeletons while desktop can display richer animations.
