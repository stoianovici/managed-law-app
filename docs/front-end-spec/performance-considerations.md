# Performance Considerations

## Performance Goals

- **Page Load:** Initial landing page load completes in <2 seconds on desktop broadband, <3 seconds on mobile 4G
- **Interaction Response:** User interactions (button clicks, form submissions) respond within 300ms, AI-powered responses within 3 seconds
- **Animation FPS:** All animations maintain 60fps without frame drops on target devices (iPhone 12+, mid-range Android, modern desktop browsers)

## Design Strategies

**Bundle Size Optimization**: Implement code splitting to load only necessary JavaScript for current wizard step. Use dynamic imports for heavy components (PDF generator, calendar widget). Target initial bundle <500KB gzipped. Lazy load images and non-critical assets below fold.

**Image Optimization**: Serve responsive images via srcset with appropriate sizes for each breakpoint. Use modern formats (WebP with JPEG fallback). Compress images to balance quality and file size. Lazy load images below fold and in automation library.

**CSS Strategy**: Use Tailwind's purge/JIT mode to eliminate unused styles. Critical CSS inlined in HTML head for above-fold content. Non-critical CSS loaded asynchronously. Minimize CSS animations complexity to maintain 60fps.

**Font Loading**: Use font-display: swap for Inter font to prevent invisible text during load. Preload critical font weights (400, 600, 700). Consider system font stack fallback for instant text rendering.

**API Optimization**: Implement request debouncing for pricing calculations during rapid user changes. Cache automation templates and static data in browser. Use HTTP/2 multiplexing for parallel resource loading. Implement proper cache headers for static assets.

**Rendering Strategy**: Use skeleton screens instead of blank loading states (perceived performance). Implement progressive rendering—show content as it loads rather than waiting for everything. Avoid layout shifts (reserve space for dynamic content). Use CSS containment for complex components.

**Third-Party Scripts**: Defer non-critical third-party scripts (analytics, chat widgets). Use async loading for scripts that don't block rendering. Minimize third-party dependencies to reduce performance overhead.
