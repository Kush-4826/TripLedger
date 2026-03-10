# Database Schema

## Users

users

id
name
email
password
created_at
updated_at

---

## Trips

trips

id
name
banner_image_path
start_location
destination
return_location
expected_end_date
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
trip_log_id
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
note
expense_time
created_at
updated_at

---

## Trip Statistics (Optional Cached Analytics)

trip_statistics

id
trip_id
total_distance
total_days
total_expense
average_daily_expense
fuel_cost_per_km
average_daily_distance
average_accommodation_cost
created_at
updated_at