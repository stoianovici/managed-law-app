# Deployment Architecture

## Deployment Strategy

**Frontend:** Vercel (Next.js native platform), automatic deployment on git push
**Backend:** Vercel Serverless Functions (co-deployed with frontend)
**Database:** Supabase (hosted PostgreSQL), US-East-1
**File Storage:** Supabase Storage (PDF storage, 24hr TTL)

## Environments

| Environment | Frontend URL                              | Purpose            |
| ----------- | ----------------------------------------- | ------------------ |
| Development | http://localhost:3000                     | Local development  |
| Preview     | https://ai-wizard-git-[branch].vercel.app | PR preview testing |
| Production  | https://yourdomain.com                    | Live environment   |

## CI/CD Pipeline

- **Continuous Integration:** GitHub Actions runs lint, type-check, tests on every PR
- **Preview Deployments:** Automatic preview deployment for every PR via Vercel
- **Production Deployment:** Automatic deployment to production on merge to main branch

---
