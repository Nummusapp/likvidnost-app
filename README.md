# Likvidnost App

Next.js (App Router) + TypeScript + Prisma + PostgreSQL starter.

## Lokalni zagon

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

## Vercel deploy

1. Pushaj repozitorij na GitHub in ga poveži z Vercel.
2. V Vercel projektu nastavi Environment Variable:
   - key: `DATABASE_URL`
   - value: tvoj Postgres connection string
   - dodaj za `Production` (in po želji `Preview`/`Development`)
3. Build command pusti default (`next build`). `postinstall` samodejno požene `prisma generate`.
4. Za migracije poženi iz lokalnega okolja ali CI:

   ```bash
   npx prisma migrate deploy
   ```

5. Po deployu preveri:
   - `/api/health`
