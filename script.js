// Sample Data (could be from a JSON file or LocalStorage)
const activities = [
    { id: 1, name: "Web Dev Project", desc: "Complete CSS styling for report", status: "Pending" },
    { id: 2, name: "Data Structures", desc: "Review Linked Lists", status: "Pending" },
    { id: 3, name: "UI Design", desc: "Create wireframes for tracker", status: "Pending" }
];

const listContainer = document.getElementById('activity-list');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');

function renderActivities() {
    listContainer.innerHTML = '';
    let completedCount = 0;

    activities.forEach(task => {
        const isDone = task.status === "Completed";
        if (isDone) completedCount++;

        const card = document.createElement('div');
        card.className = `activity-card ${isDone ? 'completed' : ''}`;
        card.innerHTML = `
            <div>
                <h4>${task.name}</h4>
                <p style="font-size: 0.9rem; color: #666;">${task.desc}</p>
                <strong>Status: ${task.status}</strong>
            </div>
            <button class="btn-complete ${isDone ? 'done' : ''}" onclick="toggleStatus(${task.id})">
                ${isDone ? 'Completed' : 'Mark Done'}
            </button>
        `;
        listContainer.appendChild(card);
    });

    // Update Summary
    progressText.innerText = `${completedCount} out of ${activities.length} activities completed`;
    const percentage = (completedCount / activities.length) * 100;
    progressFill.style.width = percentage + "%";
}

function toggleStatus(id) {
    const task = activities.find(t => t.id === id);
    task.status = (task.status === "Pending") ? "Completed" : "Pending";
    renderActivities();
}

// Initial render
renderActivities();
