# Animation & Micro-interactions

## Motion Principles

**Purpose-Driven Motion**: Every animation serves a functional purpose—guide attention, provide feedback, indicate relationships, or smooth transitions. Never animate purely for decoration. Animations should feel snappy and responsive, not slow or overly elaborate.

**Performance First**: All animations must maintain 60fps. Use CSS transforms (translate, scale, rotate) and opacity for GPU acceleration. Avoid animating properties that trigger layout recalculation (width, height, top, left). Test on lower-end mobile devices to ensure smooth performance.

**Respect User Preferences**: Honor `prefers-reduced-motion` media query. Users who enable reduced motion see instant transitions (no animation) or subtle fades only. Never use motion that could trigger vestibular disorders (parallax, excessive rotation).

**Consistent Timing**: Use standardized durations and easing functions across the application for cohesive feel. Fast interactions (<200ms) feel responsive. Medium transitions (200-400ms) smooth state changes. Slow animations (>400ms) only for page-level transitions or complex choreography.

**Subtle and Refined**: Follow Linear's approach—animations are present but understated. Users should feel polish without consciously noticing individual animations. Avoid bouncy, elastic, or exaggerated effects (not appropriate for professional services audience).

## Key Animations

- **Button Click**: Scale down to 0.95 on active state (Duration: 100ms, Easing: ease-out), return to 1.0 on release (Duration: 150ms, Easing: ease-out). Loading state: spinner fades in after 300ms delay.

- **Card Add/Remove**: Card fades in with scale from 0.9 to 1.0 on add (Duration: 200ms, Easing: ease-out). Card fades out to 0.8 opacity while scaling to 0.95 on remove (Duration: 150ms, Easing: ease-in). Surrounding cards shift position smoothly (Duration: 300ms, Easing: ease-in-out).

- **Modal Open/Close**: Backdrop fades in to rgba(0,0,0,0.5) (Duration: 150ms, Easing: ease-out). Modal scales from 0.95 to 1.0 while fading in (Duration: 200ms, Easing: ease-out). Close reverses with modal scaling to 0.95 (Duration: 150ms, Easing: ease-in).

- **Progress Bar Fill**: Animated on forward navigation (Duration: 300ms, Easing: ease-out). No animation on back navigation for instant feedback.

- **Pricing Update**: New number fades in from below while old fades out above (Duration: 250ms, Easing: ease-in-out). Subtle background pulse with highlight color at 0.1 opacity (Duration: 400ms, Easing: ease-out).

- **Page Transition**: Outgoing content fades out (Duration: 150ms, Easing: ease-in). Incoming content fades in with slight upward translate from y: 16px to 0 (Duration: 250ms, Easing: ease-out).

- **Form Focus**: Input border color transitions (Duration: 150ms, Easing: ease-out). Focus ring scales from 0 to full size (Duration: 100ms, Easing: ease-out).

- **Skeleton Loading**: Subtle shimmer effect with gradient moving left-to-right (Duration: 1500ms, Easing: linear, infinite).

- **Toast/Notification**: Slides in from top with fade (Duration: 200ms, Easing: ease-out). Auto-dismiss after 5 seconds with fade out (Duration: 150ms, Easing: ease-in).

- **Hover Effects**: Subtle lift on cards with translateY: -2px and shadow increase (Duration: 200ms, Easing: ease-out). Buttons show slight background color shift (Duration: 150ms, Easing: ease-out).

- **Contextual Insight Display**: Insight cards fade in with slight scale from 0.98 to 1.0 (Duration: 300ms, Easing: ease-out), staggered 100ms delay if multiple cards.
