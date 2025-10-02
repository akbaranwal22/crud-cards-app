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
- Display items as cards.
- Load data from a mock REST API (json-server).
- Delete card (optimistic UI + API call).
- Add new card.
- Responsive grid and simple animations.

## Mock API
- File: mock/db.json
- Endpoints:
    - GET /items
    - POST /items
    - DELETE /items/:id
