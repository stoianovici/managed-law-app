# Backend Architecture

## Service Architecture

The backend follows a **serverless function-based architecture** using Next.js API Routes and Server Actions.

```
apps/web/
├── app/api/                  # REST API Routes
│   ├── sessions/
│   ├── automations/
│   ├── pdf/
│   └── webhooks/
├── lib/actions/              # Server Actions
│   ├── session-actions.ts
│   ├── recommendation-actions.ts
│   └── pricing-actions.ts
└── lib/services/             # Business logic layer
    ├── session-service.ts
    ├── ai-service.ts
    ├── pricing-service.ts
    └── pdf-service.ts
```

## Server Action Pattern

```typescript
'use server';

import { revalidatePath } from 'next/cache';

export async function updateSession(
  sessionId: string,
  updates: Partial<Session>
): Promise<ActionResult<Session>> {
  try {
    const validated = SessionUpdateSchema.parse(updates);
    await validateSessionAccess(sessionId);

    const session = await sessionService.update(sessionId, validated);
    revalidatePath('/wizard/[step]');

    return { success: true, data: session };
  } catch (error) {
    return {
      success: false,
      error: { code: 'UPDATE_FAILED', message: 'Unable to update session' },
    };
  }
}
```

---
