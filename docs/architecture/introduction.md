# Introduction

This document outlines the complete fullstack architecture for the **AI Discovery Wizard**, including backend systems, frontend implementation, and their integration. It serves as the single source of truth for AI-driven development, ensuring consistency across the entire technology stack.

This unified approach combines what would traditionally be separate backend and frontend architecture documents, streamlining the development process for modern fullstack applications where these concerns are increasingly intertwined.

## Starter Template or Existing Project

**Decision: N/A - Greenfield project**

Based on the PRD analysis, this is a **greenfield project** with specific technical preferences indicated.

**Recommendation - Modern Fullstack Starter Templates**:

Given your requirements (React/TypeScript frontend, Node.js backend, monorepo structure, serverless-ready), I recommend considering:

1. **T3 Stack** (Next.js + tRPC + Tailwind + TypeScript)
   - ✅ Perfect for full-stack TypeScript, end-to-end type safety
   - ✅ tRPC eliminates REST boilerplate, great for rapid iteration
   - ✅ Next.js handles SEO needs (landing page discoverability)
   - ⚠️ May be overkill if SEO isn't critical

2. **Next.js + Supabase Starter** (RECOMMENDED)
   - ✅ All-in-one: Database, Auth, Storage, Edge Functions
   - ✅ Generous free tier, excellent for MVP cost targets ($20-50/month)
   - ✅ Real-time subscriptions for session auto-save
   - ✅ Many official starters available

3. **Vite + Express + TypeScript (Custom Monorepo)**
   - ✅ Maximum flexibility and simplicity
   - ✅ Faster dev experience than Next.js
   - ⚠️ Requires more setup, no SEO optimization out of box

**My Recommendation**: **Next.js 14 (App Router) + Supabase** for this project because:

- Landing page SEO is valuable for organic discovery
- Supabase dramatically reduces integration overhead (PostgreSQL + Auth + Storage + Edge Functions in one service)
- Next.js Server Components + Server Actions eliminate much of the API boilerplate
- Vercel deployment is trivial (the PRD mentions Vercel as preferred hosting)
- Stays within cost budget and serverless-ready

## Change Log

| Date       | Version | Description                            | Author              |
| ---------- | ------- | -------------------------------------- | ------------------- |
| 2025-10-15 | 1.0     | Initial architecture document creation | Winston (Architect) |

---
