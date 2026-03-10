# Database Schema

## Users

users

id
name
email
password
is_admin (boolean, default: false)
created_at
updated_at

---

## Trips

trips

id
user_id
name
banner_image_path
start_location
destination
return_location
start_date
expected_end_date
actual_end_date
start_odometer (nullable)
end_odometer (nullable)
planned_distance
bike_name
status

statuses:
draft
planned
active
completed
cancelled

tips_notes

created_at
updated_at

---

## Trip Days (Planned Route)

trip_days

id
trip_id
day_number
date
route_description
planned_distance
planned_budget
itinerary_notes
recommended_places
created_at
updated_at

---

## Trip Logs (Actual Ride Days)

trip_logs

id
trip_id
date
day_number

*Note: Enforce unique constraint on (trip_id, date) to prevent duplicate daily logs.*
start_location
end_location
distance_ridden
fuel_filled
weather_notes
accommodation_name
accommodation_location
diary_entry
created_at
updated_at

---

## Media Links

trip_media_links

id
trip_id (nullable, for global trip media)
trip_log_id (nullable, for day-specific media)
url
description
created_at
updated_at

---

## Expense Categories

expense_categories

id
user_id
name
created_at
updated_at

---

## Expenses

expenses

id
trip_log_id
category_id
amount
receipt_image_path
note
expense_time
created_at
updated_at

*Note: Foreign key on `category_id` must be `restrict` or `set null` to prevent deleting actively used categories.*

---

## Trip Statistics (Optional Cached Analytics)

trip_statistics

id
trip_id
actual_total_distance (from odometer)
logged_total_distance (sum of daily logs)
total_days
total_expense
average_daily_expense
fuel_cost_per_km
average_daily_distance
average_accommodation_cost
created_at
updated_at

---

## Cascading Rules

- Deleting a `Trip` must cascade delete `trip_days`, `trip_logs`, and associated `trip_media_links`.
- Deleting a `TripLog` must cascade delete `expenses` and `trip_media_links`.