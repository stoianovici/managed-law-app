# Requirements

## Functional

**FR1:** The system shall provide a clean landing page with "Check if AI can be useful for me" CTA that launches the wizard interface with clear time commitment messaging (10-15 min desktop, 5 min mobile)

**FR2:** The system shall implement an adaptive question flow that progresses from general questions (industry, team size, pain points) to specific questions (task volumes, workflow details) based on user responses

**FR3:** The system shall display visual progress indicators throughout the wizard session showing completion percentage and estimated time remaining

**FR4:** The system shall use AI to analyze gathered context and proactively recommend 3-7 relevant automations tailored to the user's business (reverse discovery approach)

**FR5:** The system shall provide a visual workflow sketcher displaying suggested automations as interactive cards/blocks that users can add, remove, or modify with real-time visual feedback

**FR6:** The system shall calculate and display estimated monthly cost per user based on token consumption with transparent margin, updating dynamically as automations change

**FR7:** The system shall display estimated time savings (hours per week/month) for each suggested automation and aggregate total time savings prominently alongside cost

**FR8:** The system shall show contextual AI insights throughout the wizard (e.g., "5 paralegals × 2hrs/day = 50hrs/week opportunity") rather than generic loading messages

**FR9:** The system shall display a persistent pricing panel once first automation is identified, updating immediately as user adds/removes features

**FR10:** The system shall provide a full-featured 10-15 minute experience on desktop browsers and a streamlined 5-minute lite version on mobile devices

**FR11:** The system shall support seamless session continuation from mobile to desktop, allowing users to save progress and resume on different devices

**FR12:** The system shall auto-save user progress after every interaction and survive browser refresh without data loss

**FR13:** The system shall display a professional, branded summary at wizard completion showing problems identified, solutions proposed, automations list, time savings analysis, and cost estimate

**FR14:** The system shall offer users the option to receive a comprehensive PDF report (shareable with stakeholders) in exchange for providing an email address

**FR15:** The system shall generate professional, branded PDF reports suitable for boardroom presentations within 5 seconds

**FR16:** The system shall capture structured discovery documents containing all user responses, selected automations, business context, and lead quality indicators for vendor follow-up

**FR17:** The system shall provide a "Book a Call" CTA with pre-filled meeting agenda based on discovery answers, linking directly to calendar scheduling

**FR18:** The system shall integrate with calendar booking system (Cal.com or Calendly) requiring no manual vendor intervention

**FR19:** The system shall send transactional emails containing PDF reports to users who provide email addresses

**FR20:** The system shall support browser back/forward navigation without breaking wizard state or losing user data

## Non Functional

**NFR1:** The system shall load the initial page in under 2 seconds on standard broadband connections

**NFR2:** The system shall respond to user interactions with AI-generated content within 3 seconds per interaction

**NFR3:** The system shall update real-time pricing calculations within 500ms of automation changes

**NFR4:** The system shall support 5-10 concurrent wizard sessions initially without performance degradation

**NFR5:** The system shall maintain 95%+ uptime and complete wizard sessions without errors for 95%+ of users

**NFR6:** The system shall support the latest 2 versions of Chrome, Safari, Firefox, and Edge browsers

**NFR7:** The system shall provide responsive design supporting viewports from 375px (iPhone SE) to 1920px+ (desktop monitors)

**NFR8:** The system shall support iOS 14+, Android 10+ on mobile devices via responsive web design

**NFR9:** The system shall encrypt all session data at rest and transmit over HTTPS only

**NFR10:** The system shall implement input sanitization for all user-provided data to prevent security vulnerabilities

**NFR11:** The system shall implement rate limiting on API endpoints to prevent abuse and control costs

**NFR12:** The system shall store minimal PII (email addresses only) in compliance with GDPR and privacy regulations

**NFR13:** The system shall operate within $100/month infrastructure costs during MVP phase (hosting, APIs, services)

**NFR14:** The system shall use a single LLM provider for MVP to minimize complexity and integration overhead

**NFR15:** The system shall provide privacy-focused analytics (Plausible or Fathom) for GDPR compliance

**NFR16:** The system shall track wizard abandonment points to identify UX friction, with no single step exceeding 15% drop-off rate

**NFR17:** The system shall achieve 60%+ completion rate for users who start the wizard (target: industry benchmark 30-50%)

**NFR18:** The system shall support English language only for MVP release
