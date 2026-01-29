# Pastebin Lite — Aganitha Take-Home Assignment

This is a small Pastebin-like web application where users can create a text paste, generate a shareable link, and view the paste content using that link.

The project is built with **Next.js App Router** and uses **Upstash Redis** for persistence so that data survives across requests in a serverless deployment environment (Vercel).

---

## ✅ Features Implemented

- Health check endpoint: `GET /api/healthz`
- Create a paste: `POST /api/pastes`
- Fetch a paste via API: `GET /api/pastes/:id`
- View paste in browser: `GET /p/:id`
- Persistent storage using Redis (Upstash)
- Safe rendering of paste content in HTML

---

## ✅ Technology Stack

- **Next.js 16 (App Router)**
- **TypeScript**
- **Upstash Redis** (Persistence Layer)
- **Vercel** (Deployment)

---

## ✅ Persistence Layer

This application uses **Upstash Redis** as the persistence layer.

Reason for choosing Redis (Upstash):

- Works well with Vercel serverless functions
- Data persists across requests (unlike in-memory storage)
- Simple key-value store suitable for paste content

Each paste is stored with a Redis key of the form:

---

## ✅ Running Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Spandana-5/pastebin-lite.git
cd pastebin-lite

2. Install Dependencies
npm install
3. Setup Environment Variables

Create a .env.local file in the root:

UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
BASE_URL=http://localhost:3000
4. Start the Development Server
npm run dev

The application will run at:

http://localhost:3000

✅ API Routes
Health Check
GET /api/healthz
Response: { "ok": true }

Create Paste
POST /api/pastes
Body:
{
  "content": "Hello World"
}


Response:

{
  "id": "abcd1234",
  "url": "https://your-domain.vercel.app/p/abcd1234"
}

Fetch Paste
GET /api/pastes/:id


Returns the stored paste content as JSON.

View Paste in Browser
GET /p/:id


Returns HTML displaying the paste safely.

✅ Deployment

The project is deployed on Vercel.

Live URL:

https://pastebin-lite-rust-theta.vercel.app



