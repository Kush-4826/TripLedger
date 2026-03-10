# AI Agent Instructions

You are assisting in the development of RideLedger.

Before generating code always read:

- PRD.md
- ARCHITECTURE.md
- DATABASE_SCHEMA.md
- API_SPEC.md
- DECISIONS.md
- TASKS.md

Follow the architecture and coding standards defined in these files.

---

# Development Principles

1. Follow Laravel best practices.
2. Keep controllers thin.
3. Business logic must live inside Service classes.
4. Database access must be handled through Repositories.
5. Use Eloquent relationships.
6. Write clean and readable code.
7. Avoid unnecessary complexity.

---

# Backend Rules

Controllers responsibilities:
- receive HTTP request
- validate request
- call service layer
- return response

Controllers must NOT contain business logic.

Services responsibilities:
- trip lifecycle logic
- analytics calculations
- expense aggregation
- dashboard statistics

Repositories responsibilities:
- database queries
- filtering
- aggregation

---

# Authentication Rules

Authentication uses Laravel authentication with refresh tokens.

Requirements:

- login endpoint
- refresh token endpoint
- logout endpoint

Signup must NOT be publicly accessible.

Users must be created by an admin or seeded.

---

# Trip Rules

Trips have lifecycle states:

Draft
Planned
Active
Completed
Cancelled

Rules:

- Only one trip may be Active at a time
- Draft trips are editable
- Editing a Planned trip moves it back to Draft
- Completed trips cannot be edited

---

# Code Generation Rules

When generating code:

1. Prefer simple solutions.
2. Follow folder structure.
3. Use dependency injection.
4. Use FormRequest classes for validation.
5. Use API Resources for responses.
6. Avoid duplicating logic.

---

# Frontend Rules

Frontend stack:

React + Inertia.js

Frontend responsibilities:

- UI rendering
- form interactions
- analytics dashboards
- trip planner interface
- mobile responsive UI

---

# UI Guidelines

The UI must work well on:

- desktop
- mobile devices

Trip logging should be optimized for **mobile usage during rides**.

---

# Map Integration

Maps are used for visualization only.

Display planned route on a map when trip planning is complete.

Map editing is NOT required.

Map providers allowed:

- OpenStreetMap
- Google Maps