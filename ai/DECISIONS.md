# Architecture Decisions

## Backend Framework

Decision:
Laravel 11

Reason:
Rapid development and strong ecosystem.

---

## Frontend Framework

Decision:
React with Inertia.js

Reason:
SPA experience without building a separate API client.

---

## Authentication

Decision:
Session-based authentication (Cookies/Sanctum).

Reason:
Works natively with Inertia.js and avoids the complexity of manual refresh token management.

---

## Timezones

Decision:
Store all datetimes in UTC in the database, handle localized display on the frontend.

Reason:
Future-proofs the application for long cross-border trips where timezone shifts occur, ensuring statistics match proper dates.

---

## Database

Decision:
MySQL

Reason:
Simple, reliable, and well-supported by Laravel.

---

## Storage

Decision:
Local filesystem storage

Reason:
Application hosted on home NAS.

---

## Expense Categories

Decision:
User-defined categories

Reason:
Flexibility in expense tracking.

---

## Media Storage

Decision:
Store only links for trip media.

Reason:
Photos and videos will be hosted externally (Google Drive etc).

---

## Scaling Strategy

Decision:
Optimize for simplicity rather than scale.

Reason:
Application intended for personal use.