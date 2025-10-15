# Error Handling Strategy

## Error Response Format

```typescript
interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: Record<string, any>;
    timestamp: string;
  };
}

interface ApiSuccess<T> {
  success: true;
  data: T;
  timestamp: string;
}
```

## Error Codes

- **Client errors (4xx):** `VALIDATION_ERROR`, `SESSION_NOT_FOUND`, `RATE_LIMIT_EXCEEDED`
- **Server errors (5xx):** `INTERNAL_ERROR`, `DATABASE_ERROR`, `AI_GENERATION_FAILED`

## Error Recovery Strategies

- **AI fails:** Fallback to rule-based recommendations
- **PDF generation fails:** Plain text summary
- **Email fails:** Display download link
- **Calendar booking fails:** Show email contact form

---
