# Steps to run the app

1. `npm install`
2. update docker-compose variable POSTGRES_USER with user corresponding on your system
3. `cp .env.example .env` create .env and update with user corresponding on your system
4. `docker-compose up -d`
5. `npm run db:push && npm run db:migrate`
6. `npm run dev`
