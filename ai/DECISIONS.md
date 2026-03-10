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