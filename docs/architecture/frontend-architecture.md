# Frontend Architecture

## Component Organization

```
apps/web/src/
├── app/                      # Next.js App Router
│   ├── (landing)/
│   │   └── page.tsx          # Landing page
│   ├── wizard/
│   │   ├── [step]/
│   │   │   └── page.tsx      # Dynamic step routing
│   │   └── layout.tsx        # Wizard layout
│   └── api/                  # API routes
├── components/
│   ├── wizard/               # Wizard components
│   ├── sketcher/             # Workflow sketcher
│   ├── summary/              # Summary components
│   └── ui/                   # shadcn/ui components
└── lib/
    ├── actions/              # Server Actions
    ├── services/             # Business logic
    ├── hooks/                # Custom React hooks
    ├── stores/               # Zustand stores
    └── utils/                # Helper functions
```

## State Management Architecture

```typescript
// Zustand store for global wizard state
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WizardState {
  sessionId: string | null;
  currentStep: WizardStep;
  answers: WizardAnswers;
  selectedAutomations: string[];

  setSessionId: (id: string) => void;
  updateAnswers: (answers: Partial<WizardAnswers>) => void;
  toggleAutomation: (id: string) => void;
  reset: () => void;
}

export const useWizardStore = create<WizardState>()(
  persist(
    (set) => ({
      sessionId: null,
      currentStep: 'landing',
      answers: {},
      selectedAutomations: [],

      setSessionId: (id) => set({ sessionId: id }),
      updateAnswers: (newAnswers) =>
        set((state) => ({ answers: { ...state.answers, ...newAnswers } })),
      toggleAutomation: (id) =>
        set((state) => ({
          selectedAutomations: state.selectedAutomations.includes(id)
            ? state.selectedAutomations.filter((a) => a !== id)
            : [...state.selectedAutomations, id],
        })),
      reset: () =>
        set({
          sessionId: null,
          currentStep: 'landing',
          answers: {},
          selectedAutomations: [],
        }),
    }),
    { name: 'wizard-storage' }
  )
);
```

---
