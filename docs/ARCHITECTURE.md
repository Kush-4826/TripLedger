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

Trip banner images will be stored in:

storage/app/public/trip-banners

Each trip has only one banner image.

Media links during trips will be stored as URLs.

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
PWA support may be added later.

---

# Security

Authentication:
Laravel authentication system.

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