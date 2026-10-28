# Laboratorio 1 - Programación en Ambiente Web I

Monorepo con Backend (Node.js + Express + PostgreSQL) y Frontend (Angular).
Funcionalidades: listado de eventos (tarjetas) y listado de reservas (tabla).

## Ejecución

### 1. Base de datos y backend
```bash
cd Backend
docker compose up -d
npm install
npm run db:init
npm run db:seed
npm start
```
- API de eventos: http://localhost:3000/api/events
- API de reservas: http://localhost:3000/api/reservations

### 2. Frontend
```bash
cd Frontend
npm install
ng serve
```
- Eventos: http://localhost:4200/events
- Reservas: http://localhost:4200/reservations

## Estudiante
Stiven Gonzalez
