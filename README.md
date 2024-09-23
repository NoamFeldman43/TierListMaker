# Tier List Maker
This project is a web application for creating and sharing tier lists.
Users can create tier lists, publish them, and view other users' tier lists in real-time.
The application uses a React frontend and a Node.js/Express backend.

## Features
Create customizable tier lists with different tiers (S, A, B, C, D).
Add items to each tier and publish your tier list.
View all published tier lists on the homepage.
Like tier lists to show appreciation.
Infinite scrolling on the homepage to view more tier lists.
Responsive design and a sleek UI.

## Tech Stack
Frontend: React, Axios, CSS
Backend: Node.js, Express
Database: MongoDB (Mongoose)
Additional Libraries: Firebase (for potential future use), React Router
Installation and Setup
To run this project locally, follow these steps:

## Prerequisites
Node.js installed on your machine
MongoDB set up and running (or a MongoDB Atlas account)

### 1. Clone the Repository
git clone https://github.com/yourusername/tier-list-maker.git
cd tier-list-maker

### 2. Install Dependencies
For the Frontend
cd frontend
npm install


Here's a README template you can use for your project on GitHub. This README includes sections about the project, how to run it, technologies used, and more.

Tier List Maker
This project is a web application for creating and sharing tier lists. Users can create tier lists, publish them, and view other users' tier lists in real-time. The application uses a React frontend and a Node.js/Express backend.

Features
Create customizable tier lists with different tiers (S, A, B, C, D).
Add items to each tier and publish your tier list.
View all published tier lists on the homepage.
Like tier lists to show appreciation.
Infinite scrolling on the homepage to view more tier lists.
Responsive design and a sleek UI.
Tech Stack
Frontend: React, Axios, CSS
Backend: Node.js, Express
Database: MongoDB (Mongoose)
Additional Libraries: Firebase (for potential future use), React Router
Installation and Setup
To run this project locally, follow these steps:

Prerequisites
Node.js installed on your machine
MongoDB set up and running (or a MongoDB Atlas account)
1. Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/tier-list-maker.git
cd tier-list-maker
2. Install Dependencies
 
For the Frontend
cd frontend
npm install

For the Backend
cd ../backend
npm install


Create a .env file in the backend folder and add your environment variables:

env

PORT=5000
MONGO_URI=your-mongodb-connection-string


## Run the Application
Start the Backend Server
cd backend
npm start

** if you want to go back to the fronted cd.. to go back
but what you need to do is to open 2 terminal

Open a new terminal window and run:

cd frontend
npm start


## Project Structure

tier-list-maker/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── HomePage.js
│   │   ├── TierList.js
│   │   ├── NavBar.js
│   │   ├── styles/
│   │   └── firebase.js
│   ├── public/
│   └── package.json
└── README.md


good luck!
