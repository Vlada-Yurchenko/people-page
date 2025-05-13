# people-page
=======
# Fullstack App – React + NestJS + Prisma (SQLite)

This is a fullstack application with:

- **Frontend**: React + TypeScript (Vite)
- **Backend**: NestJS + Prisma ORM
- **Database**: SQLite (file-based)

---

## 🖥️ Start Frontend

```bash
cd frontend
npm install
npm run dev
```

## 🖥️ Start Backend

```
cd backend
npm install

# Optional: generate Prisma client
npm run prisma generate

# Optional: run migrations
npm run prisma:migrate

# Start backend server
npm run start:dev

```



@TODO: 
fix types
Only display users who have a corresponding record in the Membership (backend part)
Finish filters and sort By (ui part)

