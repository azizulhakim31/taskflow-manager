# TaskFlow Manager

A clean and simple full-stack **TaskFlow management application** built with React and Node.js. It demonstrates CRUD operations, REST APIs, and a basic frontend-backend connection using MongoDB.

---

## Project Objective

The goal of this project is to help users manage daily tasks efficiently through a simple and responsive interface.

Users can:
- Add new tasks
- View all tasks
- Mark tasks as completed
- Delete tasks

This project is ideal for practicing **React fundamentals**, **API development**, and **database integration**.

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Project Structure

```text
taskFlow_manager/
├── backend/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── package.json
│   ├── index.html
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── router.jsx
│       ├── components/
│       ├── layout/
│       ├── pages/
│       └── assets/
└── readme.md
```

---

## Local Setup

### 1. Prerequisites
Make sure you have installed:
- Node.js
- npm
- MongoDB (local or cloud MongoDB Atlas)

### 2. Clone the repository
```bash
git clone <your-repository-url>
cd taskFlow_manager
```

### 3. Backend setup
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder and add your environment variables there.

Start the backend server:
```bash
npm run dev
```

### 4. Frontend setup
Open a new terminal and run:
```bash
cd frontend
npm install
npm run dev
```

The frontend will usually run at:
```text
http://localhost:5173
```

### 5. Usage
- Open the frontend URL in your browser.
- Add, view, update, and delete tasks.
- The frontend communicates with the backend API running on your configured port.

---

## Key Features

- Responsive and minimal UI
- Full CRUD functionality
- RESTful API structure
- MongoDB database integration
- Clean and modular codebase

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /add-task | Create a new task |
| GET | /get-task | Get all tasks |
| DELETE | /delete-task/:id | Delete a task |
| PATCH | /update-task/:id | Update task status (mark as completed) |

---

## Live Demo

https://azizulhakim31-taskflow-manager.vercel.app/
