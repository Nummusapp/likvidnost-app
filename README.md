# Likvidnost App

Next.js (App Router) + TypeScript + Prisma + PostgreSQL starter.

## Quick start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `.env` and set `DATABASE_URL`.

3. Generate Prisma client and create migration:

   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

4. Run app:

   ```bash
   npm run dev
   ```
