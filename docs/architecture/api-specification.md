# API Specification

The AI Discovery Wizard uses **Next.js Server Actions** for mutations and **REST API Routes** for queries and external integrations.

## API Design Approach

**Primary API Style**: Next.js Server Actions (mutations) + REST API Routes (queries)

**Server Actions** (Preferred for internal operations):

- Type-safe by default (TypeScript inference)
- Automatic serialization/deserialization
- Progressive enhancement support
- Used for: Session updates, automation selection, email capture

**REST API Routes** (For external access):

- Standard HTTP methods (GET, POST, PUT, DELETE)
- JSON request/response format
- Used for: Admin dashboard, webhooks, PDF generation, analytics

## Core API Endpoints

### Session Management

```typescript
// Server Action
async function createSession(deviceType: DeviceType): Promise<Session>;

async function updateSession(
  sessionId: string,
  updates: Partial<Session>
): Promise<Session>;

// REST
GET / api / sessions / [sessionId];
```

### AI Recommendations

```typescript
// Server Action with streaming
async function generateRecommendations(
  sessionId: string
): Promise<AutomationRecommendation[]>

// REST
GET /api/automations?industry={industry}&category={category}
```

### Pricing & Calculations

```typescript
// Server Action
async function calculatePricing(
  automationIds: string[],
  volumeMetrics: Record<string, number>
): Promise<PricingBreakdown>;

async function calculateTimeSavings(
  automationIds: string[],
  volumeMetrics: Record<string, number>
): Promise<TimeSavingsBreakdown>;
```

### PDF Generation & Email

```
POST /api/pdf/generate
Body: { sessionId: string }
Response: { pdfUrl: string, expiresAt: Date }

// Server Action
async function sendDiscoveryEmail(
  sessionId: string,
  email: string,
  subscribeToNewsletter: boolean
): Promise<{ success: boolean }>
```

### Calendar Booking

```typescript
// Server Action
async function createBookingIntent(
  sessionId: string
): Promise<{ bookingUrl: string; agenda: string }>;

// Webhook
POST / api / webhooks / booking;
```

### Discovery Documents (Admin)

```
GET /api/admin/discovery-documents?status={status}&sort={field}
GET /api/admin/discovery-documents/[id]
```

## API Response Format

**Success Response**:

```typescript
{
  success: true,
  data: T,
  timestamp: Date
}
```

**Error Response**:

```typescript
{
  success: false,
  error: {
    code: string,
    message: string,
    details?: Record<string, any>
  },
  timestamp: Date
}
```

## Authentication & Rate Limiting

**Public Endpoints**: No auth (session management, pricing, PDF, email, booking)
**Admin Endpoints**: Basic auth for MVP
**Rate Limiting**: 60 requests/minute per IP (general), 10 AI recommendations/hour per session

---
