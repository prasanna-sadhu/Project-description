# AI Product Description

## Project Description

AI Product Description is a full-stack web application that generates professional and engaging product descriptions using AI. Users can enter product details such as product name, category, keywords, and tone to generate high-quality descriptions instantly. The application also supports storing, retrieving, updating, deleting, and searching product descriptions using MongoDB.

---

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- React
- Component-Based Design
- Responsive UI

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## AI Product Description - Backend

### How to Run This Project

#### 1. Clone the Repository
```bash
git clone <your-repo-url>
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Start Server
```bash
npm run dev
```

#### 4. Create Environment File
Create a `.env` file in backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

#### 5. API Base URL
```
http://localhost:5000/api/products
```

---

## API Endpoints

- GET `/api/products`
- GET `/api/products/:id`
- POST `/api/products`
- PUT `/api/products/:id`
- DELETE `/api/products/:id`
- GET `/api/products/search?q=keyword`
- POST `/api/products/generate`

---
## Database

This project uses **MongoDB** with **Mongoose**.

### Why MongoDB?

- Stores AI-generated product descriptions as flexible JSON documents.
- Works well with Node.js and Express (MERN stack).
- Easy to scale using MongoDB Atlas cloud database.
- Supports fast CRUD operations and flexible schema design.

---
## Database Schema

The schema represents the structure of the Product collection.

![Schema Diagram](images/SchemaDiagram.png)

---

## Set Up the Database

### 1. Create MongoDB Database
Use MongoDB Atlas or local MongoDB.

### 2. Get Connection String
Copy the MongoDB URI from Atlas.

### 3. Create `.env` file
```env
PORT=5000
MONGO_URI=mongodb+srv://prasannasadhu:prasanna123@cluster0.iujwxtx.mongodb.net/Productdb?appName=Cluster0
```

### 4. Run Backend
```bash
npm run dev
```

---

## Project Structure

```
AI-Product-Description/
│
├── frontend/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env.example
│
├── images/
│   └── SchemaDiagram.png
│
└── README.md
```
