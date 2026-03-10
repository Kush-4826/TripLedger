# System Architecture

## Tech Stack

Backend
- Laravel 11
- REST API architecture

Frontend
- React
- Inertia.js

Database
- MySQL

Styling
- TailwindCSS

Storage
- Local filesystem storage for images

Deployment
- Home NAS server

---

# Application Architecture

The backend follows a layered architecture:

Controller → Service → Repository → Model

## Controllers
Responsible for:
- handling HTTP requests
- validating requests
- returning API responses

Controllers must remain thin.

---

## Services

Services contain business logic such as:

- trip lifecycle management
- expense analytics
- ride analytics
- dashboard statistics

---

## Repositories

Repositories interact with the database and handle queries.

This keeps services clean and testable.

---

## Models

Laravel Eloquent models represent database tables and define relationships.

---

# Frontend Architecture

React + Inertia will be used to create a SPA-like experience.

Frontend responsibilities:

- UI rendering
- form handling
- displaying analytics
- trip planning interfaces
- mobile responsive layout

---

# Storage

Images will be stored locally on the NAS:

- `storage/app/public/trip-banners` (one banner per trip)
- `storage/app/public/receipts` (expense receipts)

**Image Processing & Compression**
When processing image uploads (especially high-res mobile photos for receipts), the backend should compress and resize images (e.g. max width 1080px) to prevent rapid disk space consumption over multiple trips.

Media links during trips will be stored as external URLs.

---

# Trip Lifecycle

Trips move through the following states:

Draft → Planned → Active → Completed

Or

Draft → Cancelled

Only one trip may be Active at any given time.

---

# Mobile Usage

The application must be fully responsive.

Optional:
PWA support may be added later. (Note: Offline support is restricted to aggressive caching of read-only views. Active logging requires an internet connection. However, client-provided timestamps should still be trusted to support robust event logging).

---

# Analytics & Statistics

Trip statistics are calculated dynamically on-the-fly using database aggregates.
Given the target scale (single/small number of users), this ensures data is always accurate without the overhead of complex cache invalidation every time an expense or log is modified.

---

# Security

Authentication:
Session-based authentication via Laravel's default session cookies (or Sanctum stateful auth) to work seamlessly with Inertia.js. No separate refresh token API is required.

Authorization:
Basic user-based access.

Since the system is primarily personal, complex role-based systems are not required.

---

# Scalability Considerations

This system is designed for small-scale usage:

- single primary user
- hosted locally
- minimal concurrent users

Complex distributed architecture is not required.