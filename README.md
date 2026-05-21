# MERN Todo App

A full-stack Todo Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application allows users to create, view, and manage todos through a responsive frontend and RESTful backend API.

---

## Features

- Create new todos
- View all existing todos
- Mark todos as completed
- MongoDB database integration
- REST API using Express.js
- React frontend with reusable components
- State management using React Hooks
- Responsive UI using Tailwind CSS

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- JavaScript
- Vite

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Validation
- Zod

---

## Project Structure

```bash
mern-todo-app/
│
├── backend/
│   ├── db.js
│   ├── index.js
│   ├── type.js
│   ├── package.json
│
├── frontend-todo/
│   ├── src/
│   │   ├── component/
│   │   │   ├── CreateTodo.jsx
│   │   │   └── Todos.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/todos` | Fetch all todos |
| POST | `/todo` | Create a new todo |
| PUT | `/completed` | Mark todo as completed |

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/mohdfarahidali987-sketch/mern-todo-app.git
```

---

## Backend Setup

Move to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Run backend server:

```bash
node index.js
```

Backend runs on:

```bash
http://localhost:3000
```

---

## Frontend Setup

Move to frontend folder:

```bash
cd frontend-todo
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## Concepts Used

- CRUD Operations
- REST APIs
- React Components
- React Hooks (`useState`, `useEffect`)
- MongoDB Integration
- Schema Validation using Zod
- Backend Routing
- Client-Server Architecture

---

## Future Improvements

- User Authentication
- Delete Todo Feature
- Edit Todo Feature
- JWT Authorization
- Filter Completed Todos
- Dark Mode
- Deployment using Render & Vercel

---

## Author

Muhammed Farahid

GitHub:
https://github.com/mohdfarahidali987-sketch
