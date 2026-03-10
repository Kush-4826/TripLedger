# API Specification

Base URL

/api

---

# Authentication

POST /login
POST /logout
GET /user

---

# Trips

GET /trips
List all trips

POST /trips
Create new trip

GET /trips/{id}
Get trip details

PUT /trips/{id}
Update trip

DELETE /trips/{id}
Delete trip

---

# Trip Status

POST /trips/{id}/start
Start trip

POST /trips/{id}/complete
Complete trip

POST /trips/{id}/cancel
Cancel trip

---

# Trip Planning Days

GET /trips/{id}/days

POST /trips/{id}/days

PUT /trip-days/{id}

DELETE /trip-days/{id}

---

# Trip Logs

GET /trips/{id}/logs

POST /trips/{id}/logs

PUT /trip-logs/{id}

DELETE /trip-logs/{id}

---

# Media Links

POST /trip-logs/{id}/media

DELETE /media/{id}

---

# Expenses

POST /trip-logs/{id}/expenses

PUT /expenses/{id}

DELETE /expenses/{id}

---

# Expense Categories

GET /expense-categories

POST /expense-categories

PUT /expense-categories/{id}

DELETE /expense-categories/{id}

---

# Analytics

GET /trips/{id}/analytics

GET /dashboard/stats