
# Restaurant Operations Dashboard

## 1. Project Overview

The Restaurant Operations Dashboard is a full-stack web application designed to help restaurant owners, managers, and employees manage daily restaurant operations.

The goal is to replace traditional paper checklists and group chats with a centralized task management system.

Employees can view assigned tasks, update task statuses, and manage their responsibilities. Managers can monitor restaurant operations and track task completion.

This project is being developed as a one-week full-stack development exercise to refresh and strengthen my skills in backend and frontend development.

---

## 2. Business Problem

The restaurant currently uses paper checklists and group chats to manage daily responsibilities.

This creates several problems:

- Employees sometimes forget to complete assigned tasks.
- Managers have difficulty tracking task completion.
- Overdue tasks are difficult to identify.
- Paper checklists can get lost.
- There is no centralized location to monitor daily operations.

### Proposed Solution

Build a web application that allows restaurant employees and managers to manage, assign, track, and monitor daily tasks from one dashboard.

---

## 3. Project Objectives

The application should allow users to:

1. View all restaurant tasks.
2. Create new tasks.
3. Edit existing tasks.
4. Delete tasks.
5. Assign tasks to employees.
6. Update task statuses.
7. Filter tasks by category, priority, and status.
8. Monitor completed, pending, and overdue tasks.

---

## 4. Technology Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Fetch API

### Backend
- Node.js
- Express.js
- JavaScript

### Data Storage
- JSON file (initial development)
- Future possibility: MySQL database

### Development Tools
- Visual Studio Code
- Node Package Manager (npm)
- Postman
- Git and GitHub

---

## 5. Application Features

### 5.1 Dashboard

The dashboard provides an overview of restaurant operations.

It should display:

- Total number of tasks.
- Number of completed tasks.
- Number of pending tasks.
- Number of overdue tasks.

### 5.2 Task Management (CRUD)

Users should be able to perform CRUD operations.

CRUD stands for:

- Create: Add a new task.
- Read: Retrieve and display tasks.
- Update: Modify existing tasks.
- Delete: Remove tasks.

### 5.3 Task Status

Each task should have one of three statuses:

- Pending
- In Progress
- Completed

### 5.4 Task Priority

Each task should have one of three priority levels:

- Low
- Medium
- High

### 5.5 Task Categories

Tasks should be organized into categories:

- Opening
- Preparation
- Closing

### 5.6 Filtering

Users should be able to filter tasks by:

- Status
- Priority
- Category

---

## 6. Project Folder Structure

The frontend and backend will be maintained separately.

```text
restaurant-dashboard/
│
├── backend/
│   ├── data/
│   │   └── tasks.json
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── models/
│   │   └── taskModel.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .gitignore
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── index.html
│
└── README.md
```

### Backend Folder Responsibilities

- `data/`: Stores initial task data in JSON format.
- `models/`: Handles task data and data operations.
- `controllers/`: Contains the logic for handling requests.
- `routes/`: Defines API endpoints.
- `server.js`: Starts the Express server and registers middleware and routes.

### Frontend Folder Responsibilities

- `components/`: Reusable UI components.
- `pages/`: Main application pages.
- `services/`: Handles communication with the backend API.
- `App.jsx`: Main React application component.
- `main.jsx`: React application entry point.

---

## 7. Initial Dataset

The application will start with eight sample restaurant tasks.

Each task contains the following properties:

| Property | Description |
|---|---|
| id | Unique task identifier |
| title | Task name |
| description | Task details |
| category | Opening, Preparation, or Closing |
| priority | Low, Medium, or High |
| status | Pending, In Progress, or Completed |
| assignedTo | Employee responsible |
| dueDate | Task deadline |

### Sample Task

```json
{
  "id": 1,
  "title": "Clean dining tables",
  "description": "Wipe and sanitize all dining tables before opening.",
  "category": "Opening",
  "priority": "High",
  "status": "Completed",
  "assignedTo": "John",
  "dueDate": "2026-11-01"
}
```

The complete initial dataset will be stored in:

`backend/data/tasks.json`

---

## 8. Backend API Requirements

The backend will expose a REST API using Express.js.

Base URL:

`http://localhost:3000/api/tasks`

### API Endpoints

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | /api/tasks | Retrieve all tasks |
| GET | /api/tasks/:id | Retrieve one task |
| POST | /api/tasks | Create a new task |
| PUT | /api/tasks/:id | Update an existing task |
| DELETE | /api/tasks/:id | Delete a task |

### Expected API Behavior

**GET /api/tasks**

Returns all restaurant tasks.

**GET /api/tasks/:id**

Returns a specific task based on its ID.

**POST /api/tasks**

Receives task information and creates a new task.

**PUT /api/tasks/:id**

Updates an existing task.

**DELETE /api/tasks/:id**

Deletes a task from the dataset.

### Example API Response

```json
{
  "message": "Restaurant tasks API is working!"
}
```

---

## 9. Frontend and Backend Communication

The React frontend will communicate with the Express backend through HTTP requests.

The Fetch API will be used to retrieve and modify data.

### Example Workflow

1. A user opens the React dashboard.
2. React sends a GET request to the Express API.
3. Express receives the request.
4. The backend retrieves task information from the JSON file.
5. Express sends the data back as a JSON response.
6. React receives the response and displays the tasks.

### Example Request

```javascript
fetch("http://localhost:3000/api/tasks")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

---

## 10. Seven-Day Development Roadmap

### Day 1: Backend Foundation

Objectives:
- Set up the backend project.
- Initialize Node.js using npm.
- Install Express.js.
- Create server.js.
- Start the Express server on port 3000.
- Create the first GET endpoint.

Deliverable:

A working Express server that responds to GET /api/tasks.

### Day 2: Backend CRUD Operations

Objectives:
- Create taskRoutes.js.
- Create taskController.js.
- Create taskModel.js.
- Read data from tasks.json.
- Implement GET, POST, PUT, and DELETE endpoints.
- Test endpoints using Postman.

Deliverable:

A fully functional REST API.

### Day 3: React Frontend Foundation

Objectives:
- Initialize the React application using Vite.
- Understand React components.
- Understand props and state.
- Create the dashboard layout.
- Create reusable components.

Deliverable:

A basic React dashboard interface.

### Day 4: Connect Frontend and Backend

Objectives:
- Understand the Fetch API.
- Connect React to Express.
- Retrieve task information.
- Display backend data in React.
- Implement loading and error states.

Deliverable:

The React frontend successfully displays real backend data.

### Day 5: Frontend CRUD Operations

Objectives:
- Create a task form.
- Add new tasks.
- Edit existing tasks.
- Delete tasks.
- Update task statuses.

Deliverable:

Users can manage tasks directly through the frontend.

### Day 6: Dashboard and Filtering

Objectives:
- Display dashboard statistics.
- Filter tasks by status.
- Filter tasks by priority.
- Filter tasks by category.
- Improve the application's CSS and layout.

Deliverable:

A functional restaurant operations dashboard.

### Day 7: Testing and Finalization

Objectives:
- Test all API endpoints.
- Test frontend and backend communication.
- Fix bugs.
- Improve code organization.
- Update project documentation.
- Prepare the application for GitHub.

Deliverable:

A completed full-stack application.

---

## 11. Development Guidelines

The project will follow these development principles:

1. Keep frontend and backend code separated.
2. Use REST API principles.
3. Organize backend code using routes, controllers, and models.
4. Use reusable React components.
5. Handle errors appropriately.
6. Validate user input.
7. Write clean and readable code.
8. Test API endpoints before connecting them to React.
9. Use Git to track development progress.

### Learning Objectives

By completing this project, I should be able to understand and demonstrate:

- Node.js fundamentals.
- Express.js server configuration.
- Express routing and middleware.
- REST API development.
- MVC-style backend organization.
- JSON data handling.
- CRUD operations.
- HTTP methods and status codes.
- React components and props.
- React state management.
- React useEffect and useState.
- Fetch API and asynchronous JavaScript.
- Frontend and backend integration.
- Git and GitHub workflows.

---

## 12. Future Improvements

Once the initial application is complete, potential improvements include:

- Employee login and authentication.
- Manager and employee roles.
- MySQL database integration.
- Employee management.
- Task assignment.
- Task completion timestamps.
- Search functionality.
- Notifications for overdue tasks.
- Deployment to a live server.

---

## 13. Project Success Criteria

The project will be considered complete when:

- The Express backend runs successfully.
- The backend can retrieve and modify task data.
- All five REST API endpoints work correctly.
- React successfully communicates with Express.
- Users can create, view, edit, and delete tasks.
- Task statuses can be updated.
- Dashboard statistics display correctly.
- Filtering works as expected.
- The application runs without major errors.

---

## 14. Project Philosophy

This project is designed to rebuild practical full-stack development skills through hands-on learning.

The objective is not simply to copy existing code, but to understand how each part of an application works and communicates with the others.

Development will be completed incrementally, focusing on one feature at a time.

**Build it. Understand it. Test it. Improve it.**

---

**Project:** Restaurant Operations Dashboard  
**Development Duration:** 7 Days  
**Frontend:** React.js  
**Backend:** Node.js + Express.js  
**Initial Data Storage:** JSON  
**Developer:** Full-Stack Development Practice
