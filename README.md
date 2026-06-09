# Distributed Job Queue Dashboard (Frontend)

## Overview

A React-based monitoring dashboard built for the Distributed Job Queue System.

The application provides a user-friendly interface for job submission, real-time monitoring, analytics visualization, and queue status tracking.

---

## Features

### Landing Page
- Project introduction
- Architecture overview
- Navigation between pages

### Job Submission
- Submit background jobs
- Support for multiple job types
- Form validation

### Dashboard Monitoring
- Total Jobs
- Pending Jobs
- Processing Jobs
- Completed Jobs
- Failed Jobs

### Analytics
- Success Rate
- Failure Rate
- Real-time updates

### UI Features
- Responsive Design
- Clean Dashboard Layout
- React Router Navigation

---

## Pages

### Home Page

Introduces the project and explains the workflow.

### Submit Job Page

Allows users to submit:

- EMAIL Jobs
- REPORT Jobs
- IMAGE Jobs

### Dashboard Page

Displays:

- Total Jobs
- Pending Jobs
- Processing Jobs
- Completed Jobs
- Failed Jobs
- Success Rate
- Failure Rate

---

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Axios
- CSS

---

## Project Structure

src/
├── components/
│ ├── Navbar.jsx
│ └── Navbar.css
│
├── pages/
│ ├── LandingPage.jsx
│ ├── LandingPage.css
│ ├── SubmitJobPage.jsx
│ ├── SubmitJobPage.css
│ ├── DashboardPage.jsx
│ └── DashboardPage.css
│
├── services/
│ ├── jobService.js
│ └── statsService.js
│
├── App.jsx
└── main.jsx

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Start Application

```bash
npm run dev
```

---

## Screenshots

### Home Page
Project introduction and workflow overview.

### Submit Job Page
Job submission interface.

### Dashboard Page
Real-time monitoring and analytics.

---

## Future Improvements

- Authentication
- User Management
- Job History
- Dark/Light Theme
- Advanced Charts
- Real-Time Notifications
- Live Deployment

---

## Author

**Yahya**

Frontend dashboard for monitoring and interacting with the Distributed Job Queue System.
