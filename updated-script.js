// Navigation System
function navigateToPage(page) {
    const pages = ['index', 'vote', 'staff'];
    const validPage = pages.includes(page) ? page : 'index';
    window.location.href = `${validPage}.html`;
}

// Scroll to Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Server Status Checker (Simulated Example)
const serverStatus = document.getElementById("server-status");

// Simulate server status check (you can replace this with an API call)
if (serverStatus) {
    setTimeout(() => {
        const isOnline = true; // Replace with real server status
        serverStatus.textContent = isOnline ? "Server is Online ✅" : "Server is Offline ❌";
        serverStatus.style.color = isOnline ? "limegreen" : "red";
    }, 2000);
}

// Handle Voting Form Submission
function submitVote(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const voteMessage = document.getElementById("vote-message");

    // Simulate API call for voting
    setTimeout(() => {
        voteMessage.textContent = `Thank you, ${username}, for voting!`;
        voteMessage.style.color = "limegreen";
    }, 1000);
}

// Staff Portal Functions
function handleStaffLogin(event) {
    event.preventDefault();
    const username = document.getElementById("staff-username").value;
    const password = document.getElementById("staff-password").value;

    // Simulate API authentication
    setTimeout(() => {
        // In real implementation, use proper authentication
        if (username && password) {
            document.getElementById("staff-login").style.display = "none";
            document.getElementById("staff-controls").style.display = "block";
            loadStaffData();
        }
    }, 1000);
}

function loadStaffData() {
    // Simulate API calls for staff data
    document.getElementById("online-players").textContent = Math.floor(Math.random() * 100);
    document.getElementById("total-players").textContent = Math.floor(Math.random() * 1000);
    document.getElementById("active-reports").textContent = Math.floor(Math.random() * 10);
}

// Staff Control Functions
function executeStaffAction(action, param = null) {
    // Simulate API calls for staff actions
    console.log(`Executing ${action} with parameter: ${param}`);
    // In real implementation, make actual API calls to server
    alert(`Action ${action} executed successfully!`);
}
