# Information Architecture (IA)

## Site Map / Screen Inventory

```mermaid
graph TD
    A[Landing Page] --> B[Wizard Entry]
    B --> C[Context Gathering Flow]
    C --> C1[Industry Selection]
    C --> C2[Team Size]
    C --> C3[Pain Points]
    C --> C4[Industry-Specific Questions]
    C --> C5[Volume Metrics]
    C4 --> D[AI Analysis Interstitial]
    C5 --> D
    D --> E[Recommendations Display]
    E --> F[Workflow Sketcher]
    F --> F1[Add/Remove Automations]
    F --> F2[Browse Library]
    F --> F3[Pricing Panel - Persistent]
    F --> G[Summary Screen]
    G --> H1[Email Capture Modal]
    G --> H2[Calendar Booking]
    H1 --> I[Confirmation Screen]
    H2 --> I

    J[Admin Dashboard] --> J1[Discovery Documents List]
    J1 --> J2[Document Detail View]

    K[Mobile Flow] --> K1[Simplified Questions]
    K1 --> K2[QR Code / Email Link]
    K2 --> K3[Desktop Continuation]
```

## Navigation Structure

**Primary Navigation:** The wizard uses a linear, sequential flow with no traditional navigation menu during the core experience. Progress bar serves as primary orientation (shows step X of Y with percentage). "Back" button always visible (except on landing page) for step-by-step navigation. No skip-ahead functionality—users must progress sequentially through required steps.

**Secondary Navigation:** During Context Gathering: Back button only. During Workflow Sketcher: Back to recommendations, Edit selections, Continue to summary. Summary Screen: Edit package (returns to sketcher), Download PDF, Book Call. Mobile-specific: "Continue on Desktop" button available throughout flow.

**Breadcrumb Strategy:** Not implemented in traditional sense due to linear wizard flow. Progress indicator acts as implicit breadcrumb: "Question 3 of 5 — 60%" or "Refining Your Package". Screen titles provide context: "Tell us about your business" → "Your AI recommendations" → "Build your package" → "Your automation plan". Mobile uses simplified labels: "Context" → "Recommendations" → "Package" → "Summary".
