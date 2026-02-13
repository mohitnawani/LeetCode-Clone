🚀 CodeJudge – Full Stack Coding Platform

A full-stack coding platform inspired by LeetCode where users can practice Data Structures & Algorithms problems, solve challenges, and track their progress.

The platform integrates Judge0 API for secure and scalable online code execution.

📌 Project Status

✅ Backend Completed

🔄 Frontend In Progress

✅ Judge0 Integrated for Code Execution

🔜 Leaderboard & Submission History

🛠️ Tech Stack
🔹 Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

Judge0 API Integration

RESTful APIs

🔹 Frontend (In Progress)

React.js

React Router

Context API

Responsive UI

✨ Features

🔐 User Authentication (Signup / Login)

🔒 Protected Routes using JWT

🧠 Create & Solve Coding Problems

⚡ Real-time Code Execution using Judge0

📄 Problem Descriptions with Constraints

🧪 Custom Test Case Support

🛡️ Centralized Error Handling

⚙️ Clean MVC Architecture

⚡ Code Execution Engine

This platform uses Judge0 API to:

Compile and run code securely

Support multiple programming languages

Execute custom test cases

Return output, errors, and execution time

Handle asynchronous submission polling

🔁 Execution Flow

User submits code

Backend sends code to Judge0 API

Judge0 processes compilation & execution

Backend fetches result

Output displayed to user

🏗️ Backend Architecture

The backend follows the MVC Pattern:

backend/
│── controllers/
│── models/
│── routes/
│── middleware/
│── config/
│── services/ (Judge0 Integration)
│── server.js

Key Highlights

Secure JWT Authentication

Middleware-based Authorization

Modular API Design

Async Code Execution Handling

Scalable Folder Structure

🚀 Getting Started
1️⃣ Clone Repository

git clone https://github.com/your-username/codejudge.git

cd codejudge

2️⃣ Install Dependencies

cd backend
npm install

3️⃣ Setup Environment Variables

Create a .env file inside backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JUDGE0_API_URL=your_judge0_endpoint
JUDGE0_API_KEY=your_judge0_api_key

4️⃣ Start Server

npm run dev

Server runs at:
http://localhost:5000

📌 Upcoming Features

🏆 Leaderboard System

📊 Submission History

📈 User Dashboard

🌙 Dark Mode

🧠 AI-based Hint System

🎯 Project Goals

Build a scalable coding platform

Strengthen backend architecture skills

Implement real-world API integrations

Prepare for Software Engineering roles

Mohit 
Final Year Student – DTU (Civil Engineering)
Aspiring Software Developer
