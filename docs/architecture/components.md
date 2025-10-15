# Components

This section identifies major logical components/services across the fullstack architecture.

## Frontend Components

### Wizard Shell

**Responsibility:** Orchestrates wizard flow, manages navigation, progress tracking, and session state persistence
**Key Interfaces:** `WizardProvider`, `useWizardNavigation()`, `ProgressIndicator`
**Dependencies:** SessionService, WizardStepComponents, StorageService
**Technology:** Next.js App Router, React Context, Zustand

### Question Flow Components

**Responsibility:** Render individual question screens with form controls, validation, adaptive branching
**Key Interfaces:** `QuestionStep<T>`, `IndustrySelector`, `PainPointSelector`, `VolumeMetricsInput`
**Dependencies:** WizardShell, ValidationService, react-hook-form
**Technology:** React Server Components (where possible), shadcn/ui, Tailwind CSS

### Workflow Sketcher

**Responsibility:** Interactive canvas for viewing, adding, removing, and organizing automations
**Key Interfaces:** `WorkflowCanvas`, `AutomationCard`, `AutomationLibrary`
**Dependencies:** AutomationService, PricingService
**Technology:** Client-side React, Framer Motion

### Pricing Panel

**Responsibility:** Real-time display of pricing, time savings, ROI calculations
**Key Interfaces:** `PricingPanel`, `PricingBreakdownModal`, `usePricing()`
**Dependencies:** PricingService, TimeSavingsService
**Technology:** Client components with Zustand, React Query

### Summary & Output Components

**Responsibility:** Professional display of final recommendations, PDF preview, conversion CTAs
**Key Interfaces:** `SummaryScreen`, `BusinessContextSummary`, `ConversionCTAs`
**Dependencies:** DiscoveryDocumentService, PDFService, EmailService
**Technology:** Server Components for initial render, client for CTAs

## Backend Services

### Session Service

**Responsibility:** CRUD operations for session management, auto-save, expiration, cleanup
**Key Interfaces:** `createSession()`, `getSession()`, `updateSession()`, `deleteExpiredSessions()`
**Dependencies:** Supabase PostgreSQL client, Session model
**Technology:** TypeScript, Supabase JS client, Server Actions

### AI Recommendation Engine

**Responsibility:** LLM orchestration for generating personalized automation recommendations
**Key Interfaces:** `generateRecommendations()`, `streamRecommendations()`, `buildPrompt()`
**Dependencies:** Claude API client, Automation repository, Prompt templates
**Technology:** Anthropic SDK, TypeScript, Next.js streaming

### Pricing Service

**Responsibility:** Calculate monthly costs based on automation selections and volume metrics
**Key Interfaces:** `calculatePricing()`, `getPricingBreakdown()`, `estimateTokenUsage()`
**Dependencies:** Automation repository, LLM pricing data
**Technology:** TypeScript business logic, pure functions

### Time Savings Calculator

**Responsibility:** Estimate time savings based on automation baseline and user volume
**Key Interfaces:** `calculateTimeSavings()`, `calculateROI()`, `adjustForVolume()`
**Dependencies:** Automation repository, volume metrics
**Technology:** TypeScript business logic

### PDF Generation Service

**Responsibility:** Generate professional branded PDF reports from discovery documents
**Key Interfaces:** `generatePDF()`, `renderPDFTemplate()`, `uploadToStorage()`
**Dependencies:** React-PDF or Puppeteer, Supabase Storage
**Technology:** React-PDF (preferred), Next.js API route

### Email Service

**Responsibility:** Transactional email delivery for PDF reports and confirmations
**Key Interfaces:** `sendDiscoveryEmail()`, `sendBookingConfirmation()`, `renderEmailTemplate()`
**Dependencies:** Resend API client, Email templates (React Email)
**Technology:** Resend SDK, React Email

### Booking Service

**Responsibility:** Calendar integration for consultation scheduling
**Key Interfaces:** `createBookingIntent()`, `handleBookingWebhook()`, `updateBookingStatus()`
**Dependencies:** Cal.com API, DiscoveryDocument model
**Technology:** Cal.com embed SDK or API

---
