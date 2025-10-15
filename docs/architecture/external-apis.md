# External APIs

The AI Discovery Wizard integrates with four external services.

## Anthropic Claude API

**Purpose:** Generate intelligent automation recommendations based on user context

**Documentation:** https://docs.anthropic.com/claude/reference
**Base URL:** https://api.anthropic.com/v1
**Authentication:** API Key in header (`x-api-key`)

**Rate Limits:** Tier 1: 50 requests/minute, 40,000 tokens/minute

**Key Endpoints:**

- `POST /messages` - Create completion (non-streaming)
- `POST /messages` with `stream: true` - Streaming completion

**Integration Notes:**

- **Model:** claude-3-5-sonnet-20241022
- **Cost:** ~$3 per 1M input tokens, ~$15 per 1M output tokens
- **Target:** <$0.30 per session
- **Latency:** <3 seconds response time target
- **Error Handling:** Exponential backoff (3 retries), fallback to rule-based recommendations

## Resend API

**Purpose:** Send transactional emails (PDF reports, booking confirmations)

**Documentation:** https://resend.com/docs
**Base URL:** https://api.resend.com
**Authentication:** API Key in header (`Authorization: Bearer`)

**Rate Limits:** Free tier: 100 emails/day, 3,000 emails/month

**Key Endpoints:**

- `POST /emails` - Send email with optional attachments

**Integration Notes:**

- **From Address:** wizard@yourdomain.com (requires DNS verification)
- **Email Templates:** React Email components for consistent branding
- **Attachments:** PDF reports (<2MB) attached directly or linked via signed URL

## Cal.com API

**Purpose:** Enable users to book consultation calls with pre-filled context

**Documentation:** https://cal.com/docs/api-reference
**Base URL:** https://api.cal.com/v1
**Authentication:** API Key

**Key Endpoints:**

- Webhook: Receive booking confirmations at `/api/webhooks/booking`

**Integration Notes:**

- **Integration Approach:** Embed Cal.com widget (iframe or popup) for MVP simplicity
- **Event Type:** "AI Automation Consultation" (30-minute slot)
- **Pre-filling:** Pass session metadata via URL parameters
- **Verification:** Validate webhook signature

## Plausible Analytics API

**Purpose:** Privacy-focused analytics for tracking user behavior and conversion funnels

**Documentation:** https://plausible.io/docs
**Base URL:** https://plausible.io/api/event
**Authentication:** Events API: No auth required

**Events Tracked:**

- `wizard_started` - User begins wizard
- `step_completed` - Each wizard step completion
- `automation_added/removed` - Workflow sketcher interactions
- `pdf_requested` - Email capture
- `booking_clicked` - Calendar CTA clicked
- `wizard_completed` - Full session completion

**Integration Notes:**

- **Privacy-First:** No cookies required, GDPR-compliant
- **Custom Properties:** Session ID, industry, device type, cost, time savings

---
