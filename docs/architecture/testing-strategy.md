# Testing Strategy

## Testing Pyramid

- **Unit Tests**: 70% - Fast, isolated, high confidence
- **Integration Tests**: 25% - API endpoints, database operations
- **E2E Tests**: 5% - Manual critical paths only (MVP)

## Test Organization

```
apps/web/tests/
├── unit/
│   ├── components/
│   ├── hooks/
│   └── services/
├── integration/
│   ├── api/
│   └── actions/
└── e2e/
    └── critical-paths.md  # Manual test scripts
```

## Testing Tools

- **Framework:** Vitest (fast, TypeScript-native)
- **Component Testing:** React Testing Library
- **Coverage Target:** 70% for unit tests
- **E2E:** Manual testing for MVP, Playwright post-MVP

---
