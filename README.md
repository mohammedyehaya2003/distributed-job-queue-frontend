# Distributed Job Queue Dashboard

## Project Overview

A React-based monitoring dashboard for the Distributed Job Queue System.

The application provides a landing page, job submission interface, and real-time dashboard for monitoring job status, analytics, and queue activity.

---

## Features

- Landing Page
- Submit Job Page
- Dashboard Monitoring
- Real-Time Polling
- Analytics Display
- Navigation Bar
- Responsive Layout

---

## Pages

### Home Page

Introduces the project and explains how the system works.

### Submit Job Page

Allows users to submit jobs.

Supported Job Types:

- EMAIL
- REPORT
- IMAGE

### Dashboard

Displays:

- Pending Jobs
- Processing Jobs
- Completed Jobs
- Failed Jobs
- Total Jobs
- Success Rate
- Failure Rate

---

## Technology Stack

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

## Installation & Setup

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

Project introduction and navigation.

### Submit Job Page

Job submission interface.

### Dashboard

Real-time analytics and monitoring.

---

## Future Improvements

- Authentication
- User Management
- Job History
- Dark/Light Theme
- Advanced Charts
- Real-Time Notifications

---

## Author

Yahya

Frontend dashboard for monitoring and interacting with the Distributed Job Queue System.