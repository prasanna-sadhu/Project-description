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
MONGO_URI=MONGO_LINK
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
## Tech Stack Summary

This project is a full-stack web application developed using the MERN stack with AI integration to generate product descriptions for food processing e-commerce listings. The application combines a modern frontend, a secure backend, a cloud-hosted database, AI services, and cloud deployment platforms.

### Frontend Technologies

**React.js** is used to build a dynamic and responsive user interface using reusable components. It enables efficient rendering and provides a smooth user experience.

**Vite** is used as the frontend build tool because it offers fast development, hot module replacement (HMR), and optimized production builds.

**React Router DOM** provides client-side routing, allowing seamless navigation between pages such as Home, About, Login, Dashboard, and Product Generator without refreshing the page.

**Axios** is used to send HTTP requests from the frontend to the backend APIs for user authentication, product management, dashboard operations, and AI-generated product descriptions.

**HTML5, CSS3, and JavaScript (ES6)** are used to create the application's structure, styling, responsiveness, and interactive functionality.

### Backend Technologies

**Node.js** serves as the JavaScript runtime environment that executes server-side code efficiently and supports asynchronous operations.

**Express.js** is the backend framework used to develop RESTful APIs, manage routing, process client requests, and integrate authentication, AI services, and the database.

### Database

**MongoDB Atlas** is a cloud-based NoSQL database that stores user accounts, generated product descriptions, and other application data securely.

**Mongoose** is used as the Object Data Modeling (ODM) library to define schemas, validate data, and simplify database operations.

### Authentication and Security

**JSON Web Token (JWT)** is used for secure authentication by generating tokens after successful login, allowing users to access protected routes.

**Passport.js** is used to implement Google OAuth 2.0 authentication, enabling users to sign in using their Google accounts.

**Google OAuth 2.0** provides secure third-party authentication without requiring users to create separate login credentials.

**bcrypt** encrypts user passwords before storing them in the database, improving application security.

**Express Validator** validates user input before processing requests, helping prevent invalid or malicious data.

### Artificial Intelligence

**Google Gemini API** powers the AI functionality of the application. Based on the product details entered by the user, it generates professional, informative, and e-commerce-ready product descriptions.

### Deployment

**Vercel** hosts the React frontend and provides automatic deployment from GitHub, HTTPS support, and global content delivery.
Link:https://project-description-ten.vercel.app/


**Render** hosts the Node.js and Express backend, making the REST APIs publicly accessible and securely connected to MongoDB Atlas.

Link:https://project-description.onrender.com

### Version Control

**Git** is used for version control to track source code changes and manage development history.

**GitHub** hosts the project repository, enabling collaboration, code management, and automated deployment to Vercel and Render.

Together, these technologies create a scalable, secure, and responsive full-stack application capable of generating AI-powered product descriptions while providing authentication, database management, and cloud deployment.

