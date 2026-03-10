# RideLedger AI Context

This project uses structured context files to guide AI-assisted development.

Before generating any code, read the following files carefully.

Project Documentation:

- docs/PRD.md
- docs/USER_FLOWS.md
- docs/ARCHITECTURE.md
- docs/DATABASE_SCHEMA.md
- docs/API_SPEC.md

Development Guidance:

- ai/DECISIONS.md
- ai/AGENT.md
- ai/TASKS.md

These files define:

PRD.md
→ product purpose and features

USER_FLOWS.md
→ how users interact with the system

ARCHITECTURE.md
→ system design and patterns

DATABASE_SCHEMA.md
→ data model and relationships

API_SPEC.md
→ API structure

DECISIONS.md
→ important architectural decisions

AGENT.md
→ rules for code generation

TASKS.md
→ development roadmap

---

# Development Workflow

Follow TASKS.md sequentially.

For each task:

1. Understand requirements from PRD.md
2. Follow architecture rules from ARCHITECTURE.md
3. Use database structure from DATABASE_SCHEMA.md
4. Implement APIs according to API_SPEC.md
5. Follow coding rules in AGENT.md

---

# Coding Principles

- Controllers must remain thin
- Business logic must live in Service classes
- Database access should be handled via repositories
- Follow Laravel best practices
- Write maintainable, readable code
- Prefer simple solutions

---

# Technology Stack

Backend
Laravel 11

Frontend
React + Inertia.js

Database
MySQL

Storage
Local filesystem

Hosting
Home NAS server

---

# Trip Lifecycle

Trips move through these states:

Draft → Planned → Active → Completed

Or

Draft → Cancelled

Only one trip may be Active at any time.

---

# Map Integration

Maps are used only for visualization.

Display planned routes and ride data on the map.

No route editing is required.

---

# Important Constraints

- Signup must not be public
- Authentication must support refresh tokens
- Expense categories are user-defined
- Media is stored as external links