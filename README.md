# My Cards App (Angular 17) — Mock API + Cards UI

## Requirements
- Node.js 20+ (or stable LTS)
- npm
- Angular CLI (recommended: `npm i -g @angular/cli@~17`)

## Setup
1. Install dependencies:
   ```bash
   npm install

## Start mock API (json-server):
npm run mock:server

## Run the app:
npm start

## Features
- Tasks are displayed as cards in a responsive CSS grid.
- Load data from a mock REST API (json-server).
- Users can add tasks with title and optional description.
- Each card has a delete icon for removing tasks. Supports optimistic UI + API call.
- Shows success/error messages for actions like add or delete.
- Users can navigate and add tasks using the keyboard (Enter key).
- Smooth animations for adding/removing cards, works on desktop and mobile.
- Inputs and buttons include ARIA attributes for better accessibility.

## Mock API
- File: mock/db.json
- Endpoints:
    - GET /items
    - POST /items
    - DELETE /items/:id
