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

Authentication uses Laravel's session-based stateful authentication (Sanctum/Cookies) to seamlessly integrate with Inertia.js.

Requirements:

- login endpoint
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

- Only one trip may be Active at a time. The API must gracefully handle concurrent start attempts (e.g. returning 409 Conflict if another trip is active).
- Draft trips are editable
- Editing a Planned trip moves it back to Draft
- Active trips allow modifications to future planned `trip_days` without reverting the trip status.
- Completed trips cannot be edited
- Chronological sorting of trip days and logs must be driven by the `date` column, NOT the `day_number` (to cleanly handle Day 0 or non-sequential days).

---

# Expense Rules

- All expenses must be manually converted to the home currency (INR) by the user before entry into the system.

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

---

# PWA & Offline Support Rules

Offline support is restricted to aggressive caching of read-only views. Active logging (creating trips, days, logs, expenses) requires an active internet connection, as Inertia.js is not built for robust offline store-and-forward mutations.

However, when processing timestamps, the backend logic must strictly trust client-provided timestamps (`expense_time` and `date`) for chronological ordering and sorting algorithms instead of relying primarily on the database `created_at` timestamp.