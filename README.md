📘 Campus Connect — Frontend (React + Vite)
Overview

Campus Connect is a modern, responsive frontend web application built for University of Arkansas students to discover campus events, explore student organizations, and interact with an AI assistant (Tusk the Razorback).

This repository contains the React + Vite frontend, focused on UI/UX, branding, and scalable component architecture.

Live Demo

🔗 Frontend: https://your-vercel-link.vercel.app

🔗 Backend API: https://github.com/yourusername/campus-connect-backend

⚠️ Note: Backend integration is partially implemented. Frontend currently demonstrates full user flow with static data.

Tech Stack

React 18

Vite

Tailwind CSS

React Hooks

React Router (planned)

Axios (planned)

Features
✅ Implemented

Responsive navigation bar

Razorbacks-themed UI (Cardinal Red #9D2235)

Event cards with modal details

Organization cards

Login & Signup UI

Interest selection UI

AI chatbot UI (Tusk)

Animations & transitions

Clean, reusable component structure

❌ Not Yet Implemented

Backend API integration

Authentication (JWT)

Event RSVP & filtering

Organization join/leave

User profile persistence

AI chatbot logic

Project Structure
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── vite.config.js
└── tailwind.config.js

Getting Started
Prerequisites

Node.js 16+

npm or yarn

Installation
npm install
npm run dev


App runs at:

http://localhost:5173

Environment Variables

Create .env:

VITE_API_URL=http://localhost:8000/api

Design Principles

Clean, modern UI

Strong university branding

Component reusability

Scalable architecture

Author

Wahidullah Sultani
Full Stack Developer

License

MIT License

📕 Campus Connect — Backend (Django REST API)
Overview

This repository contains the Django REST API backend for Campus Connect.
It handles user management, campus events, student organizations, and future AI integration.

The backend is designed with scalability and clean architecture in mind.

Tech Stack

Django 5.x

Django REST Framework

SQLite (development)

django-cors-headers

JWT Authentication (planned)

Architecture
backend/
├── campus_connect/
├── users/
├── events/
├── organizations/
├── blog/
├── manage.py
└── db.sqlite3

Current Implementation Status
✅ Implemented

Django project & app setup

Database models

Migrations

Django Admin panel

CORS configuration

User model setup

🚧 In Progress

API serializers

REST viewsets

URL routing

🧭 Planned

JWT authentication

Role-based permissions

Event RSVP system

Organization membership management

Planned API Endpoints
Events
GET  /api/events/
GET  /api/events/<id>/
POST /api/events/        (admin)

Organizations
GET  /api/organizations/
POST /api/organizations/<id>/join/
POST /api/organizations/<id>/leave/

Users
POST /api/users/register/
POST /api/users/login/
GET  /api/users/profile/

Setup Instructions
Prerequisites

Python 3.8+

pip

virtualenv

Installation
python -m venv venv
source venv/bin/activate
pip install django djangorestframework django-cors-headers
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver


Server runs at:

http://localhost:8000

Admin Panel
http://localhost:8000/admin


Manage users, events, and organizations directly.

Environment Variables

Recommended .env:

SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:5173

Security (Planned)

JWT authentication (simplejwt)

Protected routes

Token-based authorization

Author

Wahidullah Sultani
Full Stack Developer
