# Him Kiran Tours

## First-time setup

### Step 1 — Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend (open a new terminal)
cd frontend
npm install
```

### Step 2 — Configure environment

```bash
cd backend
cp .env.example .env
```

Open `.env` and set your `MONGO_URI`. Everything else can stay as default for local dev.

### Step 3 — Seed the database

```bash
cd backend
npm run seed
```

This adds all 6 tour packages (3 Sacred Circuit + 3 Alpine Adventure).

---

## Running the project

You need **two terminals open at the same time**.

**Terminal 1 — Backend:**

```bash
cd backend
npm run dev
```

Runs on http://localhost:5000

**Terminal 2 — Frontend:**

```bash
cd frontend
npm start
```

Opens http://localhost:3000 in your browser automatically.

---

## Admin panel

Go to http://localhost:3000/admin/login

Default login (set in `.env`):

- Username: `admin`
- Password: `admin123`

---

## Personalising the site

| What to change    | Where                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------- |
| WhatsApp number   | `src/components/Contact.jsx` line 4 and `src/components/TourCard.jsx` line 5            |
| Email / Instagram | `src/components/Contact.jsx` lines 5–7                                                  |
| Office address    | `src/components/Contact.jsx` line 8                                                     |
| Google Maps embed | `src/components/Contact.jsx` — look for the comment near the bottom                     |
| Logo              | Drop `logo.png` into `frontend/public/` then uncomment the `<img>` line in `Navbar.jsx` |

---

## File structure

```
kumaon-soul-travels/
├── backend/
│   ├── middleware/authMiddleware.js
│   ├── models/Tour.js
│   ├── routes/
│   │   ├── tourRoutes.js
│   │   └── adminRoutes.js
│   ├── server.js
│   ├── seed.js
│   └── .env.example
└── frontend/
    ├── public/index.html
    ├── postcss.config.js
    ├── tailwind.config.js
    └── src/
        ├── components/
        │   ├── Navbar.jsx
        │   ├── Hero.jsx
        │   ├── TourCard.jsx
        │   ├── Contact.jsx
        │   └── Footer.jsx
        ├── pages/
        │   ├── Home.jsx
        │   ├── AdminLogin.jsx
        │   └── AdminPanel.jsx
        ├── context/AuthContext.jsx
        ├── services/api.js
        ├── App.jsx
        └── index.js
```
