# User Flows

## 1. Create Trip

User → Dashboard  
User → Click "Create Trip"  
User → Trip enters Draft state  
User → Add trip planning details  
User → Save Trip  

Trip → Status = Draft

User → Finish planning  
User → Mark trip as Planned

---

## 2. Edit Planned Trip

User → Open Planned Trip  
User → Click Edit  

Trip → Moves back to Draft  

User → Modify details  
User → Save  

User → Mark as Planned again

---

## 3. Start Trip

User → Open Planned Trip  
User → Click "Start Trip"

Trip → Status becomes Active

Only one trip may be Active.

---

## 4. Daily Ride Logging

User → Open Active Trip  
User → Create Daily Log  

User enters:

- ride start location
- ride end location
- distance ridden
- fuel filled
- accommodation details
- diary entry
- weather notes
- media links
- expenses

User → Save Daily Log

---

## 5. Add Expense

User → Open Daily Log  
User → Add Expense  

User enters:

- amount
- category
- time
- notes

Expense is linked to that day.

---

## 6. Add Media Links

User → Open Daily Log  
User → Add Media Link  

User pastes:

- Google Drive link
- photo album link
- video link

Multiple links may be added.

---

## 7. Complete Trip

User → Open Active Trip  
User → Click "Complete Trip"

Trip → Status becomes Completed

System generates:

- ride statistics
- expense analytics
- trip summary

---

## 8. View Trip Analysis

User → Open Completed Trip  
User → View Analytics Page

User can review:

- distance metrics
- fuel efficiency
- cost breakdown
- daily statistics

---

## 9. Dashboard Overview

User → Open Dashboard  

Dashboard displays:

Active Trip  
Planned Trips  
Recent Completed Trips  

Statistics:

- total trips completed
- total kilometers ridden
- total travel expenses
- total days travelled