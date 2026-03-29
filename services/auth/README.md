# Auth Service (NestJS)

Authentication microservice for CircuitForge.

---

## 🧠 Overview

The Auth Service is responsible for:

- User registration
- User login
- JWT token generation
- Password hashing and validation

---

## 🏗️ Architecture Role

```text
Client → Gateway → Auth Service → MongoDB
```

This service is accessed **only through the API Gateway**.

---

## ⚙️ Features

- 🔐 Email + password authentication
- 🔑 JWT access tokens
- 🔒 Password hashing using bcrypt
- 🧩 MongoDB integration via Mongoose

---

## 📁 Structure

```text
src/
├── auth/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── dto/
│   │   ├── login.dto.ts
│   │   └── register.dto.ts
│   └── schemas/
│       └── user.schema.ts
├── common/
│   └── database.module.ts
├── config/
└── main.ts
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

---

### 2. Setup environment

```bash
cp .env.example .env
```

Edit `.env`:

```env
PORT=3001
MONGODB_URI=mongodb://cf_auth:cf_auth_pass@localhost:27017/circuitforge
JWT_SECRET=dev-secret
JWT_ACCESS_EXPIRY=15m
```

---

### 3. Run service

```bash
npm run start
```

Service will run at:

```text
http://localhost:3001
```

---

## 📡 API Endpoints

### Register

```http
POST /auth/register
```

Request:

```json
{
  "email": "user@test.com",
  "password": "123456"
}
```

---

### Login

```http
POST /auth/login
```

Response:

```json
{
  "accessToken": "jwt-token"
}
```

---

## 🔗 Gateway Usage

Use via gateway:

```http
POST http://localhost:4000/auth/login
```

---

## 🔐 JWT Payload

```json
{
  "sub": "user_id",
  "email": "user@test.com"
}
```

---

## 🗄️ Database

Collection:

```text
users
```

Fields:

- email (unique)
- password (hashed)
- name (optional)

---

## ⚠️ Limitations (Current)

- No refresh token support
- No OAuth (Google/GitHub)
- No email verification
- No account recovery

---

## 🔮 Upcoming Features

- Refresh tokens
- OAuth providers
- API keys
- Email verification
- Password reset flow

---

## 🧠 Design Principles

- Stateless authentication
- Secure password handling
- Minimal dependencies
- Contract-aligned API

---

## 🏁 Status

✅ Basic auth flow implemented
🔜 Next: refresh token flow

---
