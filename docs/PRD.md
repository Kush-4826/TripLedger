# Product Requirements Document

## Product Name
RideLedger

## Overview
RideLedger is a personal web application designed to plan, log, and analyze long-distance motorcycle trips across India.

The system acts as a digital scrapbook and planning tool where the user can:
- plan trips in detail before departure
- log daily ride information during the trip
- track expenses
- maintain a personal diary
- analyze ride statistics after completion

The system is primarily built for personal use but may support a small number of users.

---

## Target Users
Primary user: the owner of the application.

Potential additional users:
- close friends or riding partners.

---

## Problem Statement
Motorcycle riders who travel long distances often struggle to keep all trip information organized in one place. Planning routes, tracking expenses, writing notes, and reviewing past trips usually happen across multiple tools.

RideLedger solves this by providing a **single platform to manage the entire lifecycle of a motorcycle trip**.

---

## Core Features

### 1. Trip Planning
Create and plan trips with detailed information including:

- trip name
- banner image
- start location
- destination
- return location
- expected end date
- total planned distance
- planned route (day-wise)
- stops along the route
- day-wise itinerary
- recommended places to stay or eat
- recommended fuel stops
- daily budget for food and accommodation
- trip tips and notes

---

### 2. Trip Logging (During the Ride)

Each day of the trip can contain:

- date and day
- start location
- end location
- distance ridden
- fuel filled
- diary entry
- weather notes
- accommodation details
- photo links
- list of expenses for that day

---

### 3. Expense Tracking

Expenses can be recorded with:

- date and time
- amount
- category
- notes

Expense categories help generate meaningful trip analysis.

Example categories:

- fuel
- food
- accommodation
- toll
- maintenance
- miscellaneous

---

### 4. Trip Media

Users can attach media links day-wise.

Examples:
- Google Drive album
- photo folder
- video links

Multiple links may be added for each day.

---

### 5. Trip Analysis

Once a trip is completed, the system provides analytics including:

- total distance travelled
- total days
- total expenses
- daily average expense
- expense by category
- average daily expense by category
- mileage of motorcycle
- fuel cost per kilometer
- average accommodation cost
- average distance ridden per day

---

### 6. Dashboard

The dashboard displays:

- active trip
- planned trips
- recently completed trips

Statistics include:

- total trips completed
- total kilometers ridden
- total cost across all trips
- total days spent travelling

---

## Trip Lifecycle

Trips move through the following stages:

Draft → Planned → Active → Completed

Or

Draft → Cancelled

Only one trip can be in the **Active** state at a time.

---

## Non Goals

The system is not intended to:

- support large-scale social features
- support public trip sharing
- integrate real-time GPS tracking
- manage payments

---

## Platform

RideLedger is a responsive web application designed for:

- desktop usage during planning
- mobile usage during trips

The application may also support **PWA capabilities** for better mobile usability.

---

## Deployment

The system will be hosted on a **home NAS server** and accessed via a personal domain or local network.