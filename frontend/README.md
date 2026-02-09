# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Authentication System

This project includes a complete self-hosted authentication system with:

### Backend (Node.js + Express + SQLite)
- User registration and login
- JWT-based authentication
- Password hashing with bcrypt
- User account management
- License verification via n8n webhooks

### Frontend (React + Vite)
- Multilingual UI (English, French, Arabic)
- Protected routes
- User dashboard with account management
- Responsive design with Tailwind CSS

## Getting Started

1. Install dependencies:
```bash
npm install
cd server && npm install
```

2. Configure environment variables:
```bash
# In server/.env
PORT=3001
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

3. Start both frontend and backend:
```bash
npm run dev:all
```

Or start them separately:
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run dev:server
```

## API Endpoints

- `POST /api/signup` - Register new user
- `POST /api/login` - Authenticate user
- `GET /api/me` - Get current user info
- `PUT /api/users/:id` - Update user profile
- `DELETE /api/users/:id` - Delete user account
- `POST /api/check-license` - Verify user license

## Features

- ✅ Self-hosted authentication (no third-party services)
- ✅ Multilingual support (EN, FR, AR)
- ✅ RTL support for Arabic
- ✅ Protected routes
- ✅ User account management
- ✅ License verification
- ✅ Mobile responsive design
- ✅ JWT token management
- ✅ Password hashing and security

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
