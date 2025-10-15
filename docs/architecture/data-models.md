# Data Models

Based on the PRD requirements, the following are the core business entities shared between frontend and backend.

## Session

**Purpose:** Tracks user wizard sessions, enables auto-save, browser refresh recovery, and device handoff

**Key Attributes:**

- `id`: string (UUID v4) - Unique session identifier
- `createdAt`: Date - Session creation timestamp
- `updatedAt`: Date - Last activity timestamp
- `expiresAt`: Date - Session expiration (7 days from last activity)
- `currentStep`: string - Current wizard step identifier
- `answers`: Record<string, any> - User responses to questions
- `selectedAutomations`: string[] - Array of automation IDs selected by user
- `pricingData`: PricingBreakdown | null - Calculated pricing information
- `deviceType`: 'mobile' | 'tablet' | 'desktop' - Original device type
- `userAgent`: string - Browser user agent
- `ipAddress`: string | null - User IP (for rate limiting, anonymized)
- `status`: 'active' | 'completed' | 'abandoned' - Session lifecycle status

### TypeScript Interface

```typescript
interface Session {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date;
  currentStep: WizardStep;
  answers: WizardAnswers;
  selectedAutomations: string[];
  pricingData: PricingBreakdown | null;
  deviceType: DeviceType;
  userAgent: string;
  ipAddress: string | null;
  status: SessionStatus;
}

type WizardStep =
  | 'landing'
  | 'industry'
  | 'team-size'
  | 'pain-points'
  | 'volumes'
  | 'analysis'
  | 'recommendations'
  | 'sketcher'
  | 'summary';
type DeviceType = 'mobile' | 'tablet' | 'desktop';
type SessionStatus = 'active' | 'completed' | 'abandoned';

interface WizardAnswers {
  industry?: 'Legal' | 'Healthcare' | 'RealEstate' | 'Consulting' | 'Other';
  industryOther?: string;
  teamSize?: '1-5' | '6-10' | '11-25' | '26-50' | '50+';
  painPoints?: PainPoint[];
  volumes?: Record<string, number>;
  additionalContext?: string;
}

type PainPoint =
  | 'DocumentProcessing'
  | 'ClientIntake'
  | 'EmailManagement'
  | 'DataEntry'
  | 'Scheduling'
  | 'Other';
```

### Relationships

- Session **has many** DiscoveryDocuments (usually 1, but supports versioning)
- Session **references many** Automations (via selectedAutomations array)

## Automation

**Purpose:** Catalog of automation templates that can be recommended and selected by users

**Key Attributes:**

- `id`: string (UUID) - Unique automation identifier
- `title`: string - Display name
- `description`: string - 2-3 sentence explanation of capabilities
- `industry`: string[] - Applicable industries
- `category`: string - Workflow category
- `estimatedTimeSavings`: number - Hours saved per month (baseline)
- `tokenEstimate`: number - Estimated monthly token consumption
- `complexity`: 'Low' | 'Medium' | 'High' - Implementation complexity
- `isActive`: boolean - Whether automation is available for selection
- `icon`: string - Icon identifier for UI rendering
- `createdAt`: Date - Record creation timestamp
- `updatedAt`: Date - Last modification timestamp

### TypeScript Interface

```typescript
interface Automation {
  id: string;
  title: string;
  description: string;
  industry: Industry[];
  category: AutomationCategory;
  estimatedTimeSavings: number;
  tokenEstimate: number;
  complexity: Complexity;
  isActive: boolean;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
}

type Industry =
  | 'Legal'
  | 'Healthcare'
  | 'RealEstate'
  | 'Consulting'
  | 'General';
type AutomationCategory =
  | 'DocumentProcessing'
  | 'Communication'
  | 'DataAnalysis'
  | 'Administrative'
  | 'Research';
type Complexity = 'Low' | 'Medium' | 'High';
```

### Relationships

- Automation **referenced by many** Sessions (via selectedAutomations)
- Automation **referenced by many** DiscoveryDocuments

## DiscoveryDocument

**Purpose:** Complete capture of user discovery session for vendor follow-up and CRM integration

**Key Attributes:**

- `id`: string (UUID) - Unique document identifier
- `sessionId`: string - Reference to parent session
- `email`: string | null - User email (if provided)
- `industry`: string - User's industry
- `teamSize`: string - Team size category
- `painPoints`: string[] - Identified pain points
- `volumeMetrics`: Record<string, number> - Task volume data
- `suggestedAutomations`: AutomationRecommendation[] - AI-generated recommendations
- `finalAutomations`: string[] - User's final selection
- `pricingData`: PricingBreakdown - Final pricing breakdown
- `timeSavingsData`: TimeSavingsBreakdown - Time savings analysis
- `aiInsights`: string[] - Contextual insights shown during session
- `leadQualityScore`: number - Calculated lead quality (0-100)
- `status`: string - Document status
- `pdfUrl`: string | null - Generated PDF URL (temporary, 24hr)
- `bookingId`: string | null - Calendar booking reference
- `createdAt`: Date - Document creation
- `completedAt`: Date | null - Session completion time

### TypeScript Interface

```typescript
interface DiscoveryDocument {
  id: string;
  sessionId: string;
  email: string | null;
  industry: string;
  teamSize: string;
  painPoints: string[];
  volumeMetrics: Record<string, number>;
  suggestedAutomations: AutomationRecommendation[];
  finalAutomations: string[];
  pricingData: PricingBreakdown;
  timeSavingsData: TimeSavingsBreakdown;
  aiInsights: string[];
  leadQualityScore: number;
  status: DiscoveryStatus;
  pdfUrl: string | null;
  bookingId: string | null;
  createdAt: Date;
  completedAt: Date | null;
}

interface AutomationRecommendation {
  automationId: string;
  rationale: string;
  priority: number;
}

type DiscoveryStatus =
  | 'draft'
  | 'completed'
  | 'emailed'
  | 'booked'
  | 'contacted';
```

### Relationships

- DiscoveryDocument **belongs to** Session (many-to-one)
- DiscoveryDocument **references many** Automations

## PricingBreakdown (Shared Type)

**Purpose:** Structured pricing calculation shared across Session and DiscoveryDocument

```typescript
interface PricingBreakdown {
  automations: AutomationPricing[];
  totalMonthlyCost: number;
  totalTokens: number;
  calculatedAt: Date;
}

interface AutomationPricing {
  automationId: string;
  monthlyCost: number;
  estimatedTokens: number;
}
```

## TimeSavingsBreakdown (Shared Type)

**Purpose:** Time savings calculation shared across multiple entities

```typescript
interface TimeSavingsBreakdown {
  automations: AutomationTimeSavings[];
  totalHoursPerMonth: number;
  totalHoursPerWeek: number;
  costPerHourSaved: number;
  calculatedAt: Date;
}

interface AutomationTimeSavings {
  automationId: string;
  hoursPerMonth: number;
  adjustmentFactor: number;
  rationale: string;
}
```

---
