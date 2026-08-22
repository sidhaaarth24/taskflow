# TaskFlow

> A modern, responsive task management and productivity application.

TaskFlow is a web-based Todo List application designed to help users organize tasks, manage schedules, track priorities, search and filter tasks, plan upcoming activities, and stay productive. It combines task management, upcoming tasks, calendar planning and notifications into one productivity workspace.

---

## Live Demo

https://sidhaaarth24.github.io/taskflow/

---

## Features

### Task Management

TaskFlow allows users to create and manage tasks from a simple task management interface.

Users can:

- Add new tasks
- Mark tasks as completed
- View active tasks
- View completed tasks
- Edit existing tasks
- Delete tasks
- Clear completed tasks
- Track remaining tasks

Each task can contain a task name, date, time, priority, and completion status.

---

### Task Date

Every task can optionally have a specific date.

Task dates are used throughout TaskFlow for:

- Scheduling tasks
- Upcoming tasks
- Calendar display
- Date filtering
- Today filtering
- Overdue task detection
- No-date task filtering

---

### Task Time

Tasks can optionally have a specific time.

This allows TaskFlow to be used for time-sensitive activities and scheduled tasks.

Users can set or edit the time associated with a task.

---

### Task Priority

Every task can have one of three priority levels:

- High
- Medium
- Low

Priority can be selected when creating a task and changed later when editing the task.

Example:

    High
    Submit project report

    Medium
    Study JavaScript

    Low
    Organize notes

---

### Task Editing

TaskFlow includes task editing functionality.

Users can edit:

- Task name
- Task date
- Task time
- Task priority

The task editor allows users to save changes or cancel the editing operation.

---

### Search Tasks

TaskFlow includes a search system for quickly finding tasks.

Users can enter keywords into the search field to find matching tasks.

Example:

    Search:
    Study

    Results:
    Study JavaScript
    Study Mathematics
    Study React

Search works together with the task filters and advanced filters.

---

### Task Filters

TaskFlow includes task status filters for quickly switching between different task states.

Available filters:

- All
- Active
- Completed

#### All

Displays all tasks.

#### Active

Displays tasks that have not been completed.

#### Completed

Displays tasks that have already been completed.

---

### Advanced Filters

TaskFlow provides additional filters for more precise task organization.

Advanced filters include both priority and date filters.

#### Priority Filter

Available priority filters:

- All Priority
- High Priority
- Medium Priority
- Low Priority

#### Date Filter

Available date filters:

- All Dates
- Today
- Upcoming
- Overdue
- No Date

These filters can be used together with search and task status filters.

Example:

    Search:
    Project

    Status:
    Active

    Priority:
    High Priority

    Date:
    Upcoming

This allows users to quickly find specific upcoming high-priority active tasks.

---

### Current Date & Time

TaskFlow displays the current date and current time in the hero section.

The date and time area provides a quick reference while managing tasks.

It displays:

- Current date
- Current time
- Calendar information

The current time updates automatically while the application is running.

Example:

    Saturday
    August 22, 2026

    10:30 PM

---

### Upcoming Tasks

TaskFlow includes an Upcoming section for scheduled tasks.

The upcoming section provides a quick overview of tasks that are coming next.

It can display:

- Upcoming task count
- Upcoming task names
- Task dates
- Task times
- Task priorities

Example:

    Upcoming Tasks

    Submit Assignment
    Aug 23 • 10:00 AM
    High

    Study JavaScript
    Aug 24 • 7:00 PM
    Medium

This provides a quick schedule overview without requiring users to search through the complete task list.

---

### Calendar

TaskFlow includes an integrated calendar.

The calendar provides:

- Monthly calendar view
- Previous month navigation
- Next month navigation
- Weekday labels
- Calendar dates
- Current-day indicator
- Task-date indicators

The calendar helps users visually understand their task schedule.

Example:

    ‹ Previous Month

          August 2026

    Mon  Tue  Wed  Thu  Fri  Sat  Sun
                           1    2
     3    4    5    6    7    8    9
    10   11   12   13   14   15   16
    17   18   19   20   21   22   23
    24   25   26   27   28   29   30
    31

Calendar indicators can identify dates that contain scheduled tasks.

---

### Notifications

TaskFlow includes a notification system for scheduled tasks.

The header contains a notification control with a notification indicator.

The notification panel provides:

- Upcoming notifications
- Notification count
- Notification details
- Browser notification controls
- Close notification panel

The notification system is designed to help users stay aware of scheduled tasks.

---

### Browser Notifications

TaskFlow can request permission to display browser notifications.

Users can enable browser notifications from the notification panel.

The browser notification system can be used for scheduled task reminders.

Browser notifications require the user to grant permission through their browser.

---

### Dark & Light Mode

TaskFlow supports both dark and light themes.

The theme can be switched using the theme control in the header.

#### Dark Mode

The dark interface uses:

- Dark background
- Dark cards
- Blue accents
- High-contrast text
- Subtle borders
- Soft shadows

#### Light Mode

The light interface uses:

- Light background
- Light cards
- Dark text
- Blue accents
- Light borders
- Soft shadows

The theme system uses CSS custom properties to control the appearance of the application.

---

## User Interface

TaskFlow uses a modern productivity-focused interface.

The application includes:

- Sticky header
- TaskFlow branding
- Notification button
- Theme toggle
- Productivity hero section
- Current date and time
- Upcoming tasks
- Task creation area
- Task date selector
- Task time selector
- Task priority selector
- Search bar
- Status filters
- Advanced filters
- Task list
- Calendar
- Task editor
- Notification panel
- Footer

---

## Task Creation

Creating a task follows a simple workflow.

    Task Name
        ↓
    Select Date
        ↓
    Select Time
        ↓
    Select Priority
        ↓
    Add Task
        ↓
    Task Added

The date, time, and priority selectors are available below the main task input area.

---

## Task Workflow

The complete task workflow is:

    Create Task
        ↓
    Set Date
        ↓
    Set Time
        ↓
    Set Priority
        ↓
    Add Task
        ↓
    Task Appears in List
        ↓
    Search / Filter / Edit
        ↓
    Complete Task
        ↓
    Clear Completed

---

## Task Data

Each TaskFlow task can contain:

    Task
    ├── Name
    ├── Date
    ├── Time
    ├── Priority
    └── Completion Status

These properties are used throughout the application for task organization.

---

## Priority System

TaskFlow uses three priority levels:

    High
    Medium
    Low

Priority can be selected while creating a task and changed when editing an existing task.

---

## Date System

TaskFlow organizes tasks according to their scheduled dates.

Date categories include:

    Today
    Upcoming
    Overdue
    No Date

This allows users to quickly identify:

- Tasks scheduled for today
- Tasks scheduled for future dates
- Tasks that are overdue
- Tasks without a scheduled date

---

## Search & Filter System

TaskFlow combines multiple filtering systems.

    Search
       +
    Status Filter
       +
    Priority Filter
       +
    Date Filter
       ↓
    Filtered Task List

### Status

    All
    Active
    Completed

### Priority

    All Priority
    High Priority
    Medium Priority
    Low Priority

### Date

    All Dates
    Today
    Upcoming
    Overdue
    No Date

---

## Calendar System

The calendar provides a visual schedule of task dates.

The calendar supports:

- Previous month
- Next month
- Current month
- Weekday display
- Date display
- Today indicator
- Task indicators

General calendar workflow:

    Previous Month
          ↓
    Calendar View
          ↓
    Select / View Date
          ↓
    Task Schedule

---

## Upcoming Schedule

The Upcoming section provides a schedule-oriented view of future tasks.

It is designed to show tasks that have a future date and can include their associated time and priority.

General workflow:

    Task Date
        +
    Task Time
        ↓
    Upcoming Task
        ↓
    Upcoming Schedule

---

## Notification System

The notification system connects scheduled task information with reminders.

General workflow:

    Task
      ↓
    Date + Time
      ↓
    Scheduled Task
      ↓
    Notification System
      ↓
    Upcoming Notification
      ↓
    Browser Notification

Browser notifications depend on browser support and user permission.

---

## Current Date and Time System

TaskFlow uses the user's browser environment to display the current date and time.

The displayed information is updated while the application is running.

The current date and time are used as a reference for:

- Today's tasks
- Upcoming tasks
- Overdue tasks
- Calendar navigation
- Schedule management

---

## Task Completion

Tasks can be marked as completed when finished.

TaskFlow separates tasks into:

    Active
    Completed

Completed tasks can be removed using the Clear Completed control.

---

## Task Editing Workflow

Existing tasks can be edited through the task editor.

    Select Task
        ↓
    Edit Task
        ↓
    Change Task Name
        ↓
    Change Date
        ↓
    Change Time
        ↓
    Change Priority
        ↓
    Save Changes

Users can also cancel the editing operation without saving changes.

---

## Responsive Design

TaskFlow is designed to work across different screen sizes.

Supported devices include:

- Desktop
- Laptop
- Tablet
- Mobile

The layout adapts to smaller screens while keeping the main task-management functionality accessible.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling and responsive design |
| JavaScript | Task management and application logic |
| Fira Code | Interface typography |
| Font Awesome | Icons |
| Git | Version control |
| GitHub Pages | Deployment |

TaskFlow is a client-side web application and does not require a traditional backend server for its core functionality.

---

## Typography

TaskFlow uses Fira Code as its primary interface font.

Fira Code provides a clean technical appearance that fits the application's productivity and developer-oriented design.

---

## Project Structure

    taskflow/
    │
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md

### index.html

Contains the main TaskFlow structure, including:

- Header
- Hero
- Current date and time
- Upcoming tasks
- Task creator
- Date selector
- Time selector
- Priority selector
- Search
- Filters
- Advanced filters
- Task list
- Calendar
- Task editor
- Notification panel
- Footer

### style.css

Contains:

- Layout
- Colors
- Dark theme
- Light theme
- Typography
- Responsive design
- Buttons
- Cards
- Calendar styles
- Modal styles
- Notification styles
- Task styles

### script.js

Contains the application logic for:

- Task creation
- Task editing
- Task completion
- Task deletion
- Task filtering
- Task searching
- Priority filtering
- Date filtering
- Calendar generation
- Current date and time
- Upcoming tasks
- Notifications
- Browser notifications
- Theme switching

### favicon.png

The favicon used by the TaskFlow website.

### README.md

Project documentation.

---

## Getting Started

### Clone the Repository

    git clone https://github.com/sidhaaarth24/taskflow.git

### Navigate to the Project

    cd taskflow

### Run the Application

Open:

    index.html

in a modern web browser.

No package installation or backend server is required for the basic application.

---

## Run with Visual Studio Code

For local development, you can use the Live Server extension in Visual Studio Code.

### Steps

1. Open the TaskFlow folder in Visual Studio Code.
2. Install the Live Server extension.
3. Open `index.html`.
4. Right-click the file.
5. Select **Open with Live Server**.
6. TaskFlow will open in your browser.

---

## How It Works

TaskFlow is primarily a client-side web application.

The general application architecture is:

    User
      ↓
    TaskFlow Interface
      ↓
    JavaScript Event Handling
      ↓
    Task Processing
      ↓
    UI Update
      ↓
    Calendar / Filters / Upcoming / Notifications

HTML provides the application structure.

CSS provides styling, themes, responsive layouts, and visual states.

JavaScript handles task management, interaction, filtering, calendar functionality, scheduling, and notifications.

---

## Performance

TaskFlow is designed as a lightweight client-side application.

The application uses standard HTML, CSS, and JavaScript and does not require a backend server for its core functionality.

This allows TaskFlow to:

- Run locally
- Load quickly
- Be hosted as a static website
- Work without a database
- Work without an API for core task management

---

## Privacy

TaskFlow does not require an account to use the basic application.

Core task-management functionality runs in the browser.

Browser notifications require explicit permission from the user.

---

## Browser Support

TaskFlow is designed for modern browsers, including:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

For the best experience, use an up-to-date browser.

Browser notification functionality depends on browser support and notification permissions.

---

## Deployment

TaskFlow can be deployed as a static website using GitHub Pages.

### Steps

1. Create a GitHub repository.
2. Upload the TaskFlow files.
3. Commit the project.
4. Push the project to GitHub.
5. Open repository **Settings**.
6. Open **Pages**.
7. Select the deployment branch.
8. Save the configuration.
9. Open the generated GitHub Pages URL.

---

## Git Workflow

Example Git workflow:

    git init

    git add .

    git commit -m "Initial TaskFlow release"

    git branch -M main

    git remote add origin https://github.com/sidhaaarth24/taskflow.git

    git push -u origin main

---

## Future Improvements

Possible future improvements include:

- Persistent task storage
- LocalStorage synchronization
- Cloud synchronization
- User accounts
- Recurring tasks
- Drag-and-drop task ordering
- Task categories
- Custom labels
- Subtasks
- Task attachments
- More notification options
- Custom reminder intervals
- Calendar event integration
- Export and import tasks
- Keyboard shortcuts
- Progressive Web App support
- Offline functionality
- Improved mobile interface
- Advanced productivity statistics

---

## Project Goals

The main goal of TaskFlow is to provide a simple but powerful task management environment in a single web application.

### Goals

- Simple task creation
- Easy task organization
- Date-based scheduling
- Time-based scheduling
- Priority management
- Fast task searching
- Advanced task filtering
- Calendar-based planning
- Upcoming task visibility
- Task notifications
- Responsive design
- Dark/light themes
- Lightweight client-side architecture

---

## Use Cases

TaskFlow can be used for:

- Daily todo lists
- Study planning
- Project management
- Assignment tracking
- Personal productivity
- Work scheduling
- Event preparation
- Deadline management
- Daily routines
- Developer task tracking

---

## Example Workflow

A typical workflow can look like this:

    Create:
    "Complete JavaScript Project"

    Date:
    August 25, 2026

    Time:
    7:00 PM

    Priority:
    High

          ↓

    Task Added

          ↓

    Appears in:
    Task List
    Upcoming Tasks
    Calendar

          ↓

    Search / Filter

          ↓

    Complete Task

          ↓

    Clear Completed

---

## Accessibility

TaskFlow uses standard web controls and semantic interface elements where appropriate.

The interface includes:

- Form controls
- Buttons
- Labels
- Search input
- Select controls
- Accessible control labels
- Clear visual states

---

## Author

**Sidharth Kumar**

### Portfolio: https://sidhaaarth24.github.io/sidsphere/

---

## License

This project is a personal project created by **Sidharth Kumar**.

---

## Acknowledgements

TaskFlow is built using standard web technologies and open-source resources.

The project uses modern HTML, CSS, and JavaScript techniques to provide a responsive productivity experience.

---

## ⭐ Support

If you find TaskFlow useful or interesting, consider giving the repository a ⭐ on GitHub.

---
