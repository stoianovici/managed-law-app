# Next Steps

## UX Expert Prompt

**Prompt for UX Designer**:

"Review the AI Discovery Wizard PRD (docs/prd.md) focusing on the User Interface Design Goals section. Create detailed UX specifications for the following high-priority screens:

1. **Workflow Sketcher Interface**: Define the visual layout, card design, add/remove interactions, and animation patterns that deliver the 'next-level familiar' experience
2. **Pricing Panel**: Design the persistent sidebar/bottom-sheet with real-time updates, detailed breakdown modal, and ROI visualization
3. **Mobile Flow**: Streamline the question sequence and workflow sketcher for 5-minute completion while maintaining brand consistency

Deliverables: High-fidelity wireframes, interaction specifications, component library requirements (Tailwind + Radix/shadcn/ui), and accessibility guidelines (WCAG AA compliance)."

## Architect Prompt

**Prompt for System Architect**:

"Using the AI Discovery Wizard PRD (docs/prd.md) and Project Brief (docs/brief.md) as input, create a comprehensive system architecture document covering:

1. **System Architecture**: Detailed component diagram, data flow, API design, and integration architecture
2. **Technology Stack**: Finalize framework choices (Next.js vs Vite, Supabase vs separate services, LLM provider) with documented rationale
3. **Database Schema**: Complete data model with tables, relationships, indexes, and migrations strategy
4. **API Specifications**: RESTful endpoints, request/response formats, authentication/authorization approach
5. **Deployment Architecture**: Infrastructure design, CI/CD pipeline, environment configuration, monitoring strategy
6. **Technical Risks & Mitigation**: Address identified risks (workflow sketcher complexity, LLM costs, PDF performance)
7. **Development Roadmap**: Break epics into technical implementation phases with dependency mapping

Focus on cost-optimization (target $20-100/month), serverless-ready design, and 6-8 week MVP timeline feasibility."
