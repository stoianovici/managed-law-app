# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a BMad Method project - an AI-driven agile development methodology that uses specialized agents for different roles (PM, Architect, Developer, QA, etc.) to guide software development through structured planning and execution workflows.

**Installation**: BMad Method v4.44.1 installed for Claude Code on 2025-10-14

## Core Architecture

### BMad Method Structure

The BMad Method provides a complete AI-assisted development workflow with two main phases:

1. **Planning Phase** (typically done in web UI): PRD creation → Architecture design → Document validation → Sharding
2. **Development Phase** (in IDE): Story creation → Implementation → QA review → Commit

### Key Directories

```
.bmad-core/               # BMad framework (DO NOT MODIFY)
├── agents/              # Agent personas (pm, architect, dev, qa, sm, po, analyst, ux-expert)
├── tasks/               # Executable task workflows
├── templates/           # Document templates (PRD, architecture, stories, etc.)
├── checklists/          # Validation checklists
├── workflows/           # Workflow definitions
├── data/                # Reference data (test frameworks, kb, preferences)
└── core-config.yaml     # Project configuration

.claude/commands/BMad/   # Claude Code slash commands
├── agents/             # Agent activation commands
└── tasks/              # Task execution commands

docs/                    # Project documentation
├── prd.md              # Product Requirements Document
├── prd/                # Sharded PRD (epics)
├── architecture.md     # System architecture
├── architecture/       # Sharded architecture (tech-stack, coding-standards, source-tree)
├── stories/            # User stories for development
└── qa/                 # Quality assurance artifacts
    ├── assessments/    # Risk, test design, trace, NFR reports
    └── gates/          # Quality gate decisions

web-bundles/            # Web agent bundles for external platforms
```

## BMad Development Workflow

### Agent Roles

BMad uses specialized agents accessed via slash commands in Claude Code:

- `/BMad/agents/pm` - Product Manager: Creates PRDs, manages requirements
- `/BMad/agents/architect` - System Architect: Designs architecture, documents projects
- `/BMad/agents/sm` - Scrum Master: Creates and drafts user stories from epics
- `/BMad/agents/dev` - Developer (James): Implements stories, writes code and tests
- `/BMad/agents/qa` - QA Engineer (Quinn): Test strategy, risk assessment, quality gates
- `/BMad/agents/po` - Product Owner: Validates documents, shards PRD/architecture
- `/BMad/agents/analyst` - Business Analyst: Market research, requirements elicitation
- `/BMad/agents/ux-expert` - UX Designer: Front-end specs, UI design

### Common Development Commands

#### Planning Phase

```bash
# Document existing project (brownfield)
/BMad/tasks/document-project

# Shard PRD or architecture into manageable pieces
/BMad/tasks/shard-doc

# Validate story alignment
/BMad/tasks/validate-next-story
```

#### Story Development Cycle

```bash
# 1. Create next story from epic
/BMad/agents/sm
*draft  # or *create (runs create-next-story task)

# 2. Implement the story
/BMad/agents/dev
*develop-story {story-file-path}

# 3. QA review (optional but recommended)
/BMad/agents/qa
*review {story-file-path}

# 4. Apply QA feedback
/BMad/agents/dev
*review-qa
```

#### Quality Assurance Commands

```bash
# Risk assessment (before development)
/BMad/tasks/risk-profile

# Test strategy design
/BMad/tasks/test-design

# Requirements tracing (during development)
/BMad/tasks/trace-requirements

# NFR assessment (quality attributes)
/BMad/tasks/nfr-assess

# Full review with quality gate
/BMad/tasks/review-story

# Update quality gate status
/BMad/tasks/qa-gate
```

## Critical Configuration

### Core Config Location

`.bmad-core/core-config.yaml` - Contains essential project paths and settings

### Developer Context Files (devLoadAlwaysFiles)

The dev agent automatically loads these files on activation (configured in core-config.yaml):

- `docs/architecture/coding-standards.md` - Coding conventions to follow
- `docs/architecture/tech-stack.md` - Technology choices and patterns
- `docs/architecture/source-tree.md` - Project structure and organization

**IMPORTANT FOR DEV**: These files contain the rules you must follow. Keep them lean and focused.

## Development Workflow Guidelines

### When Implementing Stories (as dev agent)

1. **Story Structure**: Stories are YAML files in `docs/stories/` with sections:
   - Story: High-level description
   - Acceptance Criteria: What must be true when done
   - Tasks: Sequential implementation steps with checkboxes
   - Dev Agent Record: Your workspace (checkboxes, debug log, completion notes, change log, file list)

2. **Dev Agent Constraints**:
   - ONLY update: Task checkboxes, Dev Agent Record sections, Agent Model Used, File List, Change Log, Status
   - DO NOT modify: Story, Acceptance Criteria, Dev Notes, Testing sections
   - Story contains ALL info needed - don't load PRD/architecture unless explicitly told
   - Check folder structure before creating directories
   - Execute tasks sequentially: Read task → Implement → Write tests → Run validations → Mark checkbox [x]

3. **Ready for Review Criteria**:
   - All tasks/subtasks marked [x]
   - All validations pass (linting, tests, regression)
   - File List is complete and accurate
   - story-dod-checklist.md passes
   - Status set to "Ready for Review"

### When Doing QA Review

The Test Architect (Quinn) provides comprehensive quality assurance:

**Command Aliases**: Use short forms `*risk`, `*design`, `*trace`, `*nfr`, `*review`, `*gate`
**Full Commands**: `*risk-profile`, `*test-design`, `*trace-requirements`, `*nfr-assess`, `*review-story`, `*qa-gate`

**QA Workflow Integration**:

- **Before Dev**: `*risk` (identify risks) → `*design` (create test strategy)
- **During Dev**: `*trace` (verify coverage) → `*nfr` (validate quality attributes)
- **After Dev**: `*review` (comprehensive assessment) → `*gate` (final decision)

**Quality Gate Statuses**:

- PASS: All critical requirements met
- CONCERNS: Non-critical issues found
- FAIL: Critical issues must be fixed
- WAIVED: Issues acknowledged and accepted

### Brownfield (Existing Project) Development

For existing codebases:

1. **Document First**: Use `/BMad/tasks/document-project` to capture current state
2. **Choose Approach**:
   - PRD-First: Define what to build, then document only affected areas (efficient for large codebases)
   - Document-First: Document everything, then plan (thorough for exploratory work)
3. **Special Tasks**:
   - `/BMad/tasks/brownfield-create-epic` - Create epic for existing project
   - `/BMad/tasks/brownfield-create-story` - Create story for bug fix or small change
4. **Enhanced QA**: Always run `*risk` and `*design` before coding in brownfield - regression risks are high

## Best Practices

### Context Management

- Stories are self-contained - all necessary context is in the story file
- Load only devLoadAlwaysFiles + assigned story during dev
- Keep architecture docs lean (coding-standards, tech-stack, source-tree)
- Shard large documents to reduce context size

### Agent Selection

- Use specialized agents for their specific domains
- Developer agent (James) focuses purely on implementation
- QA agent (Quinn) is critical for brownfield and high-risk changes
- SM agent drafts stories, dev implements them

### Quality Standards (enforced by QA)

- No flaky tests (proper async handling)
- No hard waits (use dynamic strategies)
- Tests are stateless and parallel-safe
- Tests are self-cleaning
- Appropriate test levels (unit/integration/E2E)
- Explicit assertions in tests, not helpers

### Testing Strategy

Risk-based prioritization:

- P0: Critical risks (score 9) - Must test thoroughly
- P1: Medium risks (score 4-6) - Should test well
- P2: Low risks (score 1-3) - Nice to have

### Commit Workflow

After story completion:

1. Verify all regression tests pass
2. Run linting and type checks
3. Commit changes
4. Push to remote
5. Continue to next story

## Common Tasks

### Building/Testing

Check the project for standard build/test commands:

```bash
npm test          # Run tests (if Node.js project)
npm run lint      # Linting (if configured)
npm run build     # Build (if configured)
```

### BMad Management

```bash
# Reinstall/refresh BMad
npx bmad-method install

# Flatten codebase for analysis (brownfield)
npx bmad-method flatten
```

## Technical Preferences

Location: `.bmad-core/data/technical-preferences.md`

This file contains project-specific preferences for design patterns, technology selection, and other biases that should influence PM and Architect recommendations.

## Important Notes

### DO NOT Modify

- Never edit files in `.bmad-core/` - these are framework files
- Never modify story sections outside Dev Agent Record when acting as dev
- Never skip test execution when marking story complete

### Always Verify

- Story is not in "Draft" status before implementing
- All devLoadAlwaysFiles exist and are current
- Folder structure before creating directories
- All tests pass before marking Ready for Review
- File List is complete and accurate

### Ask User When

- Unapproved dependencies are needed
- Story requirements are ambiguous
- Failed 3 times attempting implementation
- Missing configuration
- Regression tests fail

## Getting Help

- **User Guide**: `.bmad-core/user-guide.md` - Complete BMad methodology
- **IDE Workflow**: `.bmad-core/enhanced-ide-development-workflow.md` - Step-by-step guide
- **Brownfield Guide**: `.bmad-core/working-in-the-brownfield.md` - Existing project guidance
- **Discord**: https://discord.gg/gk8jAdXWmj
- **GitHub**: https://github.com/bmadcode/bmad-method
- **YouTube**: https://www.youtube.com/@BMadCode

## Project Status

This is a new BMad installation with no project documentation yet. To get started:

1. **Greenfield (new project)**: Use web UI agents to create PRD and architecture
2. **Brownfield (existing project)**: Run `/BMad/tasks/document-project` with architect agent
