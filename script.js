/* ========
   TASKFLOW
   Complete Todo Application
======== */


/* ========
   DOM ELEMENTS
======== */

const taskInput =
    document.getElementById("taskInput");

const newTaskDate =
    document.getElementById("newTaskDate");

const newTaskTime =
    document.getElementById("newTaskTime");

const newTaskPriority =
    document.getElementById("newTaskPriority");

const addTaskBtn =
    document.getElementById("addTaskBtn");

const taskList =
    document.getElementById("taskList");

const taskCount =
    document.getElementById("taskCount");

const emptyState =
    document.getElementById("emptyState");

const clearCompletedBtn =
    document.getElementById("clearCompleted");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const searchInput =
    document.getElementById("searchInput");

const priorityFilter =
    document.getElementById("priorityFilter");

const dateFilter =
    document.getElementById("dateFilter");


/* Date */

const currentDate =
    document.getElementById("currentDate");

const currentTime =
    document.getElementById("currentTime");


/* Upcoming */

const upcomingList =
    document.getElementById("upcomingList");

const upcomingCount =
    document.getElementById("upcomingCount");


/* Calendar */

const calendarMonth =
    document.getElementById("calendarMonth");

const calendarYear =
    document.getElementById("calendarYear");

const calendarDays =
    document.getElementById("calendarDays");

const prevMonth =
    document.getElementById("prevMonth");

const nextMonth =
    document.getElementById("nextMonth");


/* Theme */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");


/* Edit Modal */

const editModal =
    document.getElementById("editModal");

const closeModal =
    document.getElementById("closeModal");

const cancelEdit =
    document.getElementById("cancelEdit");

const editForm =
    document.getElementById("editForm");

const editTaskId =
    document.getElementById("editTaskId");

const editTaskText =
    document.getElementById("editTaskText");

const editTaskDate =
    document.getElementById("editTaskDate");

const editTaskTime =
    document.getElementById("editTaskTime");

const editTaskPriority =
    document.getElementById("editTaskPriority");


/* Notifications */

const notificationBtn =
    document.getElementById("notificationBtn");

const notificationBadge =
    document.getElementById("notificationBadge");

const notificationPanel =
    document.getElementById("notificationPanel");

const closeNotifications =
    document.getElementById("closeNotifications");

const notificationList =
    document.getElementById("notificationList");

const enableNotifications =
    document.getElementById("enableNotifications");

/* ========
   APPLICATION STATE
======== */

let tasks =
    JSON.parse(
        localStorage.getItem("taskflowTasks")
    ) || [];

let currentFilter = "all";

let searchTerm = "";

let calendarDate = new Date();

let selectedDate = null;


/* ========
   SAVE TASKS
======== */

function saveTasks() {

    localStorage.setItem(
        "taskflowTasks",
        JSON.stringify(tasks)
    );
}


/* ========
   DATE HELPERS
======== */

function getTodayString() {

    const now = new Date();

    const year =
        now.getFullYear();

    const month =
        String(now.getMonth() + 1)
            .padStart(2, "0");

    const day =
        String(now.getDate())
            .padStart(2, "0");

    return `${year}-${month}-${day}`;
}


function formatDate(dateString) {

    if (!dateString) {
        return "No date";
    }

    const date =
        new Date(
            dateString + "T00:00:00"
        );

    return date.toLocaleDateString(
        undefined,
        {
            weekday: "short",
            month: "short",
            day: "numeric"
        }
    );
}


function formatFullDate(dateString) {

    if (!dateString) {
        return "No date";
    }

    const date =
        new Date(
            dateString + "T00:00:00"
        );

    return date.toLocaleDateString(
        undefined,
        {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );
}


function isOverdue(task) {

    if (!task.date || task.completed) {
        return false;
    }

    return task.date < getTodayString();
}


function isToday(task) {

    return task.date === getTodayString();
}


/* ========
   CURRENT DATE & TIME
======== */

function updateCurrentDateTime() {

    const now = new Date();

    currentDate.textContent =
        now.toLocaleDateString(
            undefined,
            {
                weekday: "long",
                month: "short",
                day: "numeric",
                year: "numeric"
            }
        );

    currentTime.textContent =
        now.toLocaleTimeString(
            undefined,
            {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        );
}

updateCurrentDateTime();

setInterval(
    updateCurrentDateTime,
    1000
);


/* ========
   ADD TASK
======== */

function addTask() {

    const text =
        taskInput.value.trim();

    if (!text) {

        taskInput.focus();

        return;
    }


    /*
        New tasks receive today's date
        by default.
    */

    const newTask = {

        id: Date.now(),

        text: text,

        completed: false,

        date: getTodayString(),

        time: "",

        priority: "medium"

    };


    tasks.unshift(newTask);

    saveTasks();

    taskInput.value = "";

    taskInput.focus();

    renderTasks();

    renderUpcoming();

    renderCalendar();

    updateNotifications();
}


/* ========
   DELETE TASK
======== */

function deleteTask(id) {

    tasks =
        tasks.filter(
            task => task.id !== id
        );

    saveTasks();

    renderTasks();

    renderUpcoming();

    renderCalendar();

    updateNotifications();
}


/* ========
   TOGGLE TASK
======== */

function toggleTask(id) {

    tasks =
        tasks.map(task => {

            if (task.id === id) {

                return {
                    ...task,
                    completed:
                        !task.completed
                };
            }

            return task;
        });

    saveTasks();

    renderTasks();

    renderUpcoming();

    renderCalendar();

    updateNotifications();
}


/* ========
   FILTER TASKS
======== */

function getFilteredTasks() {

    let filtered =
        [...tasks];


    /* Status */

    if (currentFilter === "active") {

        filtered =
            filtered.filter(
                task => !task.completed
            );
    }


    if (currentFilter === "completed") {

        filtered =
            filtered.filter(
                task => task.completed
            );
    }


    /* Search */

    if (searchTerm) {

        filtered =
            filtered.filter(task =>
                task.text
                    .toLowerCase()
                    .includes(
                        searchTerm
                    )
            );
    }


    /* Priority */

    if (
        priorityFilter.value !== "all"
    ) {

        filtered =
            filtered.filter(
                task =>
                    task.priority ===
                    priorityFilter.value
            );
    }


    /* Date */

    if (dateFilter.value === "today") {

        filtered =
            filtered.filter(
                task =>
                    task.date ===
                    getTodayString()
            );
    }


    if (dateFilter.value === "upcoming") {

        filtered =
            filtered.filter(
                task =>
                    task.date &&
                    task.date >=
                    getTodayString()
            );
    }


    if (dateFilter.value === "overdue") {

        filtered =
            filtered.filter(
                task =>
                    isOverdue(task)
            );
    }


    if (dateFilter.value === "nodate") {

        filtered =
            filtered.filter(
                task => !task.date
            );
    }


    /* Calendar date */

    if (selectedDate) {

        filtered =
            filtered.filter(
                task =>
                    task.date ===
                    selectedDate
            );
    }


    return filtered;
}


/* ========
   RENDER TASKS
======== */

function renderTasks() {

    const filteredTasks =
        getFilteredTasks();

    taskList.innerHTML = "";


    filteredTasks.forEach(task => {

        const li =
            document.createElement("li");

        li.className =
            "task-item";


        if (task.completed) {

            li.classList.add(
                "completed"
            );
        }


        /* Checkbox */

        const checkbox =
            document.createElement("button");

        checkbox.className =
            "task-checkbox";

        checkbox.setAttribute(
            "aria-label",
            task.completed
                ? "Mark task active"
                : "Mark task completed"
        );

        checkbox.addEventListener(
            "click",
            () => toggleTask(task.id)
        );


        /* Information */

        const information =
            document.createElement("div");

        information.className =
            "task-information";


        const text =
            document.createElement("span");

        text.className =
            "task-text";

        text.textContent =
            task.text;


        /* Meta */

        const meta =
            document.createElement("div");

        meta.className =
            "task-meta";


        /* Date */

        if (task.date) {

            const dateItem =
                document.createElement("span");

            dateItem.className =
                "task-meta-item";

            dateItem.textContent =
                `📅 ${formatDate(task.date)}`;

            meta.appendChild(
                dateItem
            );
        }


        /* Time */

        if (task.time) {

            const timeItem =
                document.createElement("span");

            timeItem.className =
                "task-meta-item";

            timeItem.textContent =
                `⏰ ${formatTime(task.time)}`;

            meta.appendChild(
                timeItem
            );
        }


        /* Priority */

        const priority =
            document.createElement("span");

        priority.className =
            `task-priority priority-${task.priority}`;

        priority.textContent =
            task.priority;

        meta.appendChild(
            priority
        );


        information.appendChild(
            text
        );

        information.appendChild(
            meta
        );


        /* Actions */

        const actions =
            document.createElement("div");

        actions.className =
            "task-actions";


        /* Edit */

        const editButton =
            document.createElement("button");

        editButton.className =
            "edit-btn";

        editButton.innerHTML =
            "✎";

        editButton.title =
            "Edit task";

        editButton.addEventListener(
            "click",
            () => openEditModal(task.id)
        );


        /* Delete */

        const deleteButton =
            document.createElement("button");

        deleteButton.className =
            "delete-btn";

        deleteButton.innerHTML =
            "×";

        deleteButton.title =
            "Delete task";

        deleteButton.addEventListener(
            "click",
            () => deleteTask(task.id)
        );


        actions.appendChild(
            editButton
        );

        actions.appendChild(
            deleteButton
        );


        /* Build */

        li.appendChild(
            checkbox
        );

        li.appendChild(
            information
        );

        li.appendChild(
            actions
        );

        taskList.appendChild(li);

    });


    updateTaskCount();

    updateEmptyState(
        filteredTasks
    );
}


/* ========
   FORMAT TIME
======== */

function formatTime(time) {

    if (!time) {
        return "";
    }

    const [hours, minutes] =
        time.split(":");

    const date =
        new Date();

    date.setHours(
        Number(hours),
        Number(minutes)
    );

    return date.toLocaleTimeString(
        undefined,
        {
            hour: "numeric",
            minute: "2-digit"
        }
    );
}


/* ========
   TASK COUNT
======== */

function updateTaskCount() {

    const remaining =
        tasks.filter(
            task => !task.completed
        ).length;


    if (remaining === 0) {

        taskCount.textContent =
            "All tasks completed";

        return;
    }


    taskCount.textContent =
        remaining === 1
            ? "1 task remaining"
            : `${remaining} tasks remaining`;
}


/* ========
   EMPTY STATE
======== */

function updateEmptyState(
    filteredTasks
) {

    emptyState.style.display =
        filteredTasks.length === 0
            ? "block"
            : "none";
}


/* ========
   STATUS FILTER BUTTONS
======== */

filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(
                    btn =>
                        btn.classList.remove(
                            "active"
                        )
                );

                button.classList.add(
                    "active"
                );

                currentFilter =
                    button.dataset.filter;

                renderTasks();
            }
        );
    }
);


/* ========
   SEARCH
======== */

searchInput.addEventListener(
    "input",
    event => {

        searchTerm =
            event.target.value
                .trim()
                .toLowerCase();

        renderTasks();
    }
);


/* ========
   ADVANCED FILTERS
======== */

priorityFilter.addEventListener(
    "change",
    renderTasks
);

dateFilter.addEventListener(
    "change",
    renderTasks
);


/* ========
   CLEAR COMPLETED
======== */

clearCompletedBtn.addEventListener(
    "click",
    () => {

        tasks =
            tasks.filter(
                task => !task.completed
            );

        saveTasks();

        renderTasks();

        renderUpcoming();

        renderCalendar();

        updateNotifications();
    }
);


/* ========
   ENTER KEY
======== */

taskInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            addTask();
        }
    }
);

addTaskBtn.addEventListener(
    "click",
    addTask
);


/* ========
   EDIT MODAL
======== */

function openEditModal(id) {

    const task =
        tasks.find(
            task => task.id === id
        );

    if (!task) {
        return;
    }


    editTaskId.value =
        task.id;

    editTaskText.value =
        task.text;

    editTaskDate.value =
        task.date || "";

    editTaskTime.value =
        task.time || "";

    editTaskPriority.value =
        task.priority || "medium";


    editModal.classList.add(
        "show"
    );

    editTaskText.focus();
}


function closeEditModal() {

    editModal.classList.remove(
        "show"
    );
}


closeModal.addEventListener(
    "click",
    closeEditModal
);

cancelEdit.addEventListener(
    "click",
    closeEditModal
);


/* Click outside modal */

editModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            editModal
        ) {

            closeEditModal();
        }
    }
);


/* Save edited task */

editForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const id =
            Number(
                editTaskId.value
            );


        tasks =
            tasks.map(task => {

                if (task.id === id) {

                    return {

                        ...task,

                        text:
                            editTaskText
                                .value
                                .trim(),

                        date:
                            editTaskDate
                                .value,

                        time:
                            editTaskTime
                                .value,

                        priority:
                            editTaskPriority
                                .value
                    };
                }

                return task;
            });


        saveTasks();

        closeEditModal();

        renderTasks();

        renderUpcoming();

        renderCalendar();

        updateNotifications();
    }
);


/* ========
   UPCOMING TASKS
======== */

function getUpcomingTasks() {

    const today =
        getTodayString();

    return tasks

        .filter(
            task =>
                !task.completed &&
                task.date &&
                task.date >= today
        )

        .sort(
            (a, b) => {

                const first =
                    `${a.date} ${a.time || "23:59"}`;

                const second =
                    `${b.date} ${b.time || "23:59"}`;

                return first.localeCompare(
                    second
                );
            }
        )

        .slice(0, 6);
}


function renderUpcoming() {

    const upcoming =
        getUpcomingTasks();

    upcomingList.innerHTML = "";


    upcomingCount.textContent =
        upcoming.length === 1
            ? "1 upcoming"
            : `${upcoming.length} upcoming`;


    if (upcoming.length === 0) {

        upcomingList.innerHTML = `
            <div class="upcoming-card">
                <div class="upcoming-title">
                    No upcoming tasks
                </div>

                <div class="upcoming-time">
                    Your schedule is clear.
                </div>
            </div>
        `;

        return;
    }


    upcoming.forEach(task => {

        const card =
            document.createElement("div");

        card.className =
            "upcoming-card";


        const date =
            document.createElement("div");

        date.className =
            "upcoming-date";

        date.textContent =
            formatDate(task.date);


        const title =
            document.createElement("div");

        title.className =
            "upcoming-title";

        title.textContent =
            task.text;


        const time =
            document.createElement("div");

        time.className =
            "upcoming-time";

        time.textContent =
            task.time
                ? `⏰ ${formatTime(task.time)}`
                : "⏰ No time set";


        const priority =
            document.createElement("span");

        priority.className =
            `upcoming-priority priority-${task.priority}`;

        priority.textContent =
            task.priority;


        card.appendChild(date);

        card.appendChild(title);

        card.appendChild(time);

        card.appendChild(priority);


        card.addEventListener(
            "click",
            () => openEditModal(task.id)
        );


        upcomingList.appendChild(
            card
        );
    });
}


/* ========
   CALENDAR
======== */

function renderCalendar() {

    const year =
        calendarDate.getFullYear();

    const month =
        calendarDate.getMonth();


    calendarMonth.textContent =
        calendarDate.toLocaleDateString(
            undefined,
            {
                month: "long"
            }
        );

    calendarYear.textContent =
        year;


    calendarDays.innerHTML = "";


    const firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    const daysInPreviousMonth =
        new Date(
            year,
            month,
            0
        ).getDate();


    /* Previous month days */

    for (
        let i = firstDay - 1;
        i >= 0;
        i--
    ) {

        const dayNumber =
            daysInPreviousMonth - i;

        createCalendarDay(
            dayNumber,
            true
        );
    }


    /* Current month */

    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        createCalendarDay(
            day,
            false
        );
    }


    /* Next month */

    const totalCells =
        firstDay + daysInMonth;

    const remaining =
        totalCells % 7 === 0
            ? 0
            : 7 - (totalCells % 7);


    for (
        let day = 1;
        day <= remaining;
        day++
    ) {

        createCalendarDay(
            day,
            true
        );
    }
}


function createCalendarDay(
    dayNumber,
    otherMonth
) {

    const button =
        document.createElement("button");

    button.className =
        "calendar-day";


    if (otherMonth) {

        button.classList.add(
            "other-month"
        );
    }


    button.textContent =
        dayNumber;


    const year =
        calendarDate.getFullYear();

    const month =
        calendarDate.getMonth();


    let dateObject;


    if (otherMonth) {

        /*
            Only visual days outside the
            current month.
        */

        dateObject =
            new Date(
                year,
                month,
                dayNumber
            );

    } else {

        dateObject =
            new Date(
                year,
                month,
                dayNumber
            );
    }


    const dateString =
        `${dateObject.getFullYear()}-${String(
            dateObject.getMonth() + 1
        ).padStart(2, "0")}-${String(
            dateObject.getDate()
        ).padStart(2, "0")}`;


    /* Today */

    if (
        dateString ===
        getTodayString()
    ) {

        button.classList.add(
            "today"
        );
    }


    /* Selected */

    if (
        selectedDate ===
        dateString
    ) {

        button.classList.add(
            "selected"
        );
    }


    /* Task indicator */

    const hasTask =
        tasks.some(
            task =>
                task.date ===
                dateString
        );


    if (hasTask) {

        button.classList.add(
            "has-task"
        );
    }


    button.addEventListener(
        "click",
        () => {

            selectedDate =
                selectedDate ===
                dateString
                    ? null
                    : dateString;

            renderCalendar();

            renderTasks();
        }
    );


    calendarDays.appendChild(
        button
    );
}


/* Previous month */

prevMonth.addEventListener(
    "click",
    () => {

        calendarDate.setMonth(
            calendarDate.getMonth() - 1
        );

        renderCalendar();
    }
);


/* Next month */

nextMonth.addEventListener(
    "click",
    () => {

        calendarDate.setMonth(
            calendarDate.getMonth() + 1
        );

        renderCalendar();
    }
);


/* ========
   THEME
======== */

function setTheme(theme) {

    if (theme === "light") {

        document.body.classList.add(
            "light-mode"
        );

        themeIcon.textContent =
            "☾";

    } else {

        document.body.classList.remove(
            "light-mode"
        );

        themeIcon.textContent =
            "☀";
    }


    localStorage.setItem(
        "taskflowTheme",
        theme
    );
}


themeToggle.addEventListener(
    "click",
    () => {

        const isLight =
            document.body.classList.contains(
                "light-mode"
            );

        setTheme(
            isLight
                ? "dark"
                : "light"
        );
    }
);


const savedTheme =
    localStorage.getItem(
        "taskflowTheme"
    ) || "dark";

setTheme(savedTheme);


/* ========
   NOTIFICATIONS
======== */

function getNotificationTasks() {

    const now =
        new Date();

    return tasks.filter(task => {

        if (
            task.completed ||
            !task.date
        ) {
            return false;
        }


        const taskTime =
            task.time || "23:59";


        const taskDate =
            new Date(
                `${task.date}T${taskTime}`
            );


        const difference =
            taskDate.getTime() -
            now.getTime();


        /*
            Show tasks due within
            the next 24 hours.
        */

        return (
            difference >= 0 &&
            difference <=
            24 * 60 * 60 * 1000
        );
    });
}


function updateNotifications() {

    const notifications =
        getNotificationTasks();


    notificationBadge.textContent =
        notifications.length;


    if (
        notifications.length === 0
    ) {

        notificationBadge.style.display =
            "none";

    } else {

        notificationBadge.style.display =
            "grid";
    }


    notificationList.innerHTML = "";


    if (
        notifications.length === 0
    ) {

        notificationList.innerHTML = `
            <div class="notification-empty">
                No tasks due within the next 24 hours.
            </div>
        `;

        return;
    }


    notifications.forEach(
        task => {

            const item =
                document.createElement(
                    "div"
                );

            item.className =
                "notification-item";


            const title =
                document.createElement(
                    "strong"
                );

            title.textContent =
                task.text;


            const info =
                document.createElement(
                    "span"
                );

            info.textContent =
                `${formatFullDate(
                    task.date
                )} ${
                    task.time
                        ? "at " +
                          formatTime(task.time)
                        : ""
                }`;


            item.appendChild(
                title
            );

            item.appendChild(
                info
            );


            notificationList.appendChild(
                item
            );
        }
    );
}


/* Open notifications */

notificationBtn.addEventListener(
    "click",
    () => {

        notificationPanel.classList.toggle(
            "show"
        );

        updateNotifications();
    }
);


/* Close */

closeNotifications.addEventListener(
    "click",
    () => {

        notificationPanel.classList.remove(
            "show"
        );
    }
);


/* Enable browser notifications */

enableNotifications.addEventListener(
    "click",
    async () => {

        if (
            !("Notification" in window)
        ) {

            alert(
                "Your browser does not support notifications."
            );

            return;
        }


        const permission =
            await Notification.requestPermission();


        if (
            permission === "granted"
        ) {

            new Notification(
                "TaskFlow Notifications Enabled",
                {
                    body:
                        "You will receive TaskFlow reminders."
                }
            );

            enableNotifications.textContent =
                "Notifications Enabled";

        } else {

            enableNotifications.textContent =
                "Notification Permission Denied";
        }
    }
);


/* ========
   AUTOMATIC NOTIFICATION CHECK
======== */

function checkTaskNotifications() {

    const notificationTasks =
        getNotificationTasks();


    if (
        !("Notification" in window) ||
        Notification.permission !==
        "granted"
    ) {
        return;
    }


    const notified =
        JSON.parse(
            localStorage.getItem(
                "taskflowNotified"
            )
        ) || [];


    notificationTasks.forEach(
        task => {

            const notificationKey =
                `${task.id}-${task.date}-${task.time}`;


            if (
                notified.includes(
                    notificationKey
                )
            ) {
                return;
            }


            new Notification(
                "TaskFlow Reminder",
                {
                    body:
                        `${task.text}${
                            task.time
                                ? ` • ${formatTime(
                                    task.time
                                )}`
                                : ""
                        }`
                }
            );


            notified.push(
                notificationKey
            );
        }
    );


    localStorage.setItem(
        "taskflowNotified",
        JSON.stringify(
            notified
        )
    );
}


/*
    Check every minute.
*/

setInterval(
    () => {

        updateNotifications();

        checkTaskNotifications();

    },
    60000
);


/* ========
   INITIALIZE
======== */

renderTasks();

renderUpcoming();

renderCalendar();

updateNotifications();