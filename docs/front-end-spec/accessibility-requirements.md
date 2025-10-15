# Accessibility Requirements

## Compliance Target

**Standard:** WCAG 2.1 Level AA - Target standard for MVP to ensure usability for users with disabilities and meet common legal/enterprise requirements. Full AAA compliance deferred to post-MVP unless specific client needs emerge.

## Key Requirements

**Visual:**

- Color contrast ratios: 4.5:1 minimum for normal text (16px and below), 3:1 for large text (18px+ or 14px+ bold). All text/background combinations tested using contrast checker tools. Error states never rely on color alone (include icons + text).
- Focus indicators: All interactive elements (buttons, links, form inputs, cards) have visible focus rings with 3:1 contrast against background. Focus order follows logical reading order (top to bottom, left to right).
- Text sizing: Base font size 16px minimum (never below 14px). User can zoom to 200% without loss of content or functionality (responsive design supports zoom). No fixed height containers that truncate text.

**Interaction:**

- Keyboard navigation: All functionality accessible via keyboard alone (Tab, Enter, Space, Escape, Arrow keys). No keyboard traps (user can always escape modals/components). Skip links allow bypassing repetitive navigation. Focus visible at all times during keyboard navigation.
- Screen reader support: Semantic HTML structure (nav, main, section, article elements). ARIA labels for icon-only buttons and dynamic content. ARIA live regions announce dynamic changes (pricing updates, loading states). Proper heading hierarchy (single h1, sequential h2-h6).
- Touch targets: Minimum 44×44px touch target size on mobile for all interactive elements (buttons, links, checkboxes). Adequate spacing between adjacent touch targets (8px minimum).

**Content:**

- Alternative text: All informational images include descriptive alt text. Decorative images have empty alt attribute (alt="") or aria-hidden="true". Icons conveying meaning include accessible labels.
- Heading structure: Proper semantic heading hierarchy for page structure. Headings describe section content. No skipped heading levels (h2 doesn't jump to h4).
- Form labels: Every form input has associated label element (for/id relationship or aria-labelledby). Error messages associated with fields via aria-describedby. Required fields indicated with both visual (\*) and aria-required="true".

## Testing Strategy

**Automated Testing:** Integrate Axe DevTools or Lighthouse accessibility audits in CI/CD pipeline. Run automated tests on every build to catch regressions. Target: Zero critical/serious violations before deployment.

**Manual Testing:** Keyboard-only navigation through full wizard flow (no mouse). Screen reader testing with NVDA (Windows), VoiceOver (Mac/iOS), TalkBack (Android) on key flows. Verify usability at 200% browser zoom. Test with color blindness simulation tools (Deuteranopia, Protanopia, Tritanopia).

**Beta Testing:** Include users with disabilities in beta testing cohort. Gather feedback on assistive technology compatibility. Prioritize fixes for barriers identified by real users.

**Testing Frequency:** Automated tests run on every PR/deployment. Manual keyboard/screen reader testing weekly during development with full audit before launch. User testing during beta phase (Epic 5).
