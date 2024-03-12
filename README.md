# Steps to run the app

1. `npm install`
2. update docker-compose variable POSTGRES_USER with corresponding on your system
3. update .env with right user in the url
4. `docker-compose up -d`
5. `npm run postinstall && npm run db:push && npm run db:migrate`
6. `npm run dev`
