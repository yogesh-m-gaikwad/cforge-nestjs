# cforge-nestjs

Reference backend implementation for CircuitForge using NestJS.

---

## 🧠 Overview

`cforge-nestjs` is the **canonical backend implementation** of CircuitForge.

All other stacks (Go, Rust, Spring Boot, etc.) must replicate the behavior defined here and conform to `cforge-core`.

---

## 🏗️ Architecture

```text
Gateway → NestJS Stack → Microservices → MongoDB / Redis / MinIO
```

This repo contains **all services implemented in NestJS**, each running independently.

---

## 📁 Structure

```text
services/
├── auth/         # Authentication service
├── workspace/    # Workspaces & memberships (planned)
├── project/      # Projects (planned)
├── drawing/      # Documents & circuit state (planned)
├── analysis/     # Circuit analysis (planned)
├── export/       # Export jobs (planned)
└── collab/       # Real-time collaboration (planned)
```

Each service:

- Runs independently
- Has its own port
- Owns its database collections

---

## ⚙️ Services & Ports

| Service   | Port |
| --------- | ---- |
| auth      | 3001 |
| workspace | 3002 |
| project   | 3003 |
| drawing   | 3004 |
| analysis  | 3005 |
| export    | 3006 |
| collab    | 3007 |

---

## 🚀 Getting Started

### 1. Install dependencies (per service)

```bash
cd services/auth
npm install
```

---

### 2. Setup environment

```bash
cp .env.example .env
```

---

### 3. Run service

```bash
npm run start
```

---

## 🔗 Gateway Integration

All services are accessed through:

```text
http://localhost:4000
```

Example:

```http
POST /auth/login
```

---

## 🧠 Development Flow

1. Update contract in `cforge-core`
2. Implement in this repo (NestJS)
3. Validate behavior
4. Replicate in other stacks

---

## 📦 Tech Stack

- NestJS
- MongoDB (Mongoose)
- Redis (planned)
- JWT authentication
- MinIO (planned)

---

## 🧩 Design Principles

- Service isolation
- Contract-first development
- Stateless services
- Shared infrastructure
- Consistent API behavior across stacks

---

## 🔮 Roadmap

- Workspace service
- Project service
- Drawing service
- Redis integration
- Event-driven architecture

---

## 🤝 Contribution

- Follow `cforge-core` contracts strictly
- Do not introduce breaking changes
- Keep services independent

---

## 🏁 Status

🚧 Initial implementation
✅ Auth service ready
🔜 Next: workspace & project services

---
