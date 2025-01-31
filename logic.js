I'll help you with the complete updated code for each main file. Let's start with each file one by one:

1. First, let's create the updated **index.html**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="SRM University Hostel Menu - Daily meal plans for students">
    <title>SRM Hostel Menu</title>
    <link rel="stylesheet" href="home.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="main-nav">
        <div class="nav-container">
            <div class="logo">
                <i class="fas fa-utensils"></i>
                <span>SRM Hostel Menu</span>
            </div>
            <div class="nav-links">
                <a href="#breakfast" class="nav-link"><i class="fas fa-sun"></i> Breakfast</a>
                <a href="#lunch" class="nav-link"><i class="fas fa-hamburger"></i> Lunch</a>
                <a href="#snacks" class="nav-link"><i class="fas fa-cookie"></i> Snacks</a>
                <a href="#dinner" class="nav-link"><i class="fas fa-moon"></i> Dinner</a>
            </div>
            <button class="theme-toggle">
                <i class="fas fa-moon"></i>
            </button>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="hero">
        <div class="hero-content">
            <h1>Welcome to SRM Hostel Menu</h1>
            <p>Discover today's delicious meals</p>
            <div class="date-display">
                <i class="fas fa-calendar"></i>
                <span id="current-date"></span>
            </div>
        </div>
    </header>

    <!-- Menu Sections -->
    <main class="menu-container">
        <!-- Breakfast Section -->
        <section id="breakfast" class="menu-section">
            <div class="menu-card">
                <div class="card-header">
                    <i class="fas fa-sun"></i>
                    <h2>Breakfast</h2>
                    <span class="time">7:30 AM - 9:30 AM</span>
                </div>
                <div class="menu-items" id="breakfast-items">
                    <!-- Menu items will be loaded dynamically -->
                </div>
            </div>
        </section>

        <!-- Lunch Section -->
        <section id="lunch" class="menu-section">
            <div class="menu-card">
                <div class="card-header">
                    <i class="fas fa-hamburger"></i>
                    <h2>Lunch</h2>
                    <span class="time">12:30 PM - 2:30 PM</span>
                </div>
                <div class="menu-items" id="lunch-items">
                    <!-- Menu items will be loaded dynamically -->
                </div>
            </div>
        </section>

        <!-- Snacks Section -->
        <section id="snacks" class="menu-section">
            <div class="menu-card">
                <div class="card-header">
                    <i class="fas fa-cookie"></i>
                    <h2>Evening Snacks</h2>
                    <span class="time">4:30 PM - 5:30 PM</span>
                </div>
                <div class="menu-items" id="snacks-items">
                    <!-- Menu items will be loaded dynamically -->
                </div>
            </div>
        </section>

        <!-- Dinner Section -->
        <section id="dinner" class="menu-section">
            <div class="menu-card">
                <div class="card-header">
                    <i class="fas fa-moon"></i>
                    <h2>Dinner</h2>
                    <span class="time">7:30 PM - 9:30 PM</span>
                </div>
                <div class="menu-items" id="dinner-items">
                    <!-- Menu items will be loaded dynamically -->
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Contact Us</h3>
                <p><i class="fas fa-phone"></i> +91 XXXXXXXXXX</p>
                <p><i class="fas fa-envelope"></i> hostel@srmist.edu.in</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <a href="#breakfast">Breakfast</a>
                <a href="#lunch">Lunch</a>
                <a href="#snacks">Snacks</a>
                <a href="#dinner">Dinner</a>
            </div>
            <div class="footer-section">
                <h3>Follow Us</h3>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 SRM Hostel Menu. All rights reserved.</p>
        </div>
    </footer>

    <!-- Loading Spinner -->
    <div class="loader" id="loader">
        <div class="spinner"></div>
    </div>

    <script src="logic.js"></script>
</body>
</html>
```

2. Updated **home.css**:
```css
:root {
    /* Primary Colors */
    --primary-blue: #2196F3;
    --primary-orange: #FF5722;
    --bg-light: #F8F9FA;
    --bg-white: #FFFFFF;
    --text-dark: #212529;
    --text-gray: #6C757D;
    --accent-green: #4CAF50;
    --accent-red: #F44336;

    /* Dark Mode Colors */
    --dark-bg: #121212;
    --dark-card: #1E1E1E;
    --dark-text: #E0E0E0;
}

/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--bg-light);
    color: var(--text-dark);
    line-height: 1.6;
    transition: background-color 0.3s ease;
}

/* Navigation Styles */
.main-nav {
    background: var(--bg-white);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--primary-blue);
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-link {
    color: var(--text-dark);
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.nav-link:hover {
    background-color: var(--primary-blue);
    color: white;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, var(--primary-blue), #1976D2);
    color: white;
    padding: 8rem 2rem 4rem;
    text-align: center;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.date-display {
    margin-top: 2rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

/* Menu Container */
.menu-container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

/* Menu Cards */
.menu-card {
    background: var(--bg-white);
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
}

.menu-card:hover {
    transform: translateY(-5px);
}

.card-header {
    background: var(--primary-blue);
    color: white;
    padding: 1.5rem;
    text-align: center;
}

.card-header i {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.time {
    display: block;
    font-size: 0.9rem;
    opacity: 0.9;
    margin-top: 0.5rem;
}

/* Menu Items */
.menu-items {
    padding: 1.5rem;
}

.menu-item {
    padding: 1rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    transition: background-color 0.3s ease;
}

.menu-item:last-child {
    border-bottom: none;
}

.menu-item:hover {
    background-color: rgba(33,150,243,0.05);
}

.item-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.veg-badge {
    background: var(--accent-green);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
}

/* Footer */
.footer {
    background: var(--text-dark);
    color: var(--bg-light);
    padding: 3rem 1rem 1rem;
    margin-top: 4rem;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.footer-section h3 {
    margin-bottom: 1rem;
    color: var(--primary-blue);
}

.footer-section a {
    color: var(--bg-light);
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    font-size: 1.5rem;
}

.footer-bottom {
    text-align: center;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.1);
}

/* Loading Spinner */
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    display: none;
}

.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid var(--bg-light);
    border-top: 5px solid var(--primary-blue);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Dark Mode */
body.dark-mode {
    background-color: var(--dark-bg);
    color: var(--dark-text);
}

body.dark-mode .main-nav,
body.dark-mode .menu-card {
    background-color: var(--dark-card);
}

body.dark-mode .nav-link {
    color: var(--dark-text);
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    .menu-container {
        grid-template-columns: 1fr;
    }
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.menu-section {
    animation: fadeIn 0.5s ease-out;
}
```

3. Updated **logic.js**:
```javascript
// Menu data structure
const menuData = {
    breakfast: [
        { name: "Masala Dosa", type: "veg", description: "Crispy rice crepe with potato filling" },
        { name: "Idli Sambar", type: "veg", description: "Steamed rice cakes with lentil soup" },
        { name: "Poha", type: "veg", description: "Flattened rice with vegetables" }
    ],
    lunch: [
        { name: "Rice and Dal", type: "veg", description: "Steamed rice with lentil curry" },
        { name: "Chicken Curry", type: "non-veg", description: "Spicy chicken curry" },
        { name: "Mixed Vegetables", type: "veg", description: "Assorted vegetables curry" }
    ],
    snacks: [
        { name: "Samosa", type: "veg", description: "Crispy pastry with spiced potato filling" },
        { name: "Tea/Coffee", type: "veg", description: "Hot beverages" },
        { name: "Biscuits", type: "veg", description: "Assorted cookies" }
    ],
    dinner: [
        { name: "Chapati", type: "veg", description: "Whole wheat flatbread" },
        { name: "Paneer Butter Masala", type: "veg", description: "Cottage cheese in rich gravy" },
        { name: "Rice", type: "veg", description: "Steamed rice" }
    ]
};

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the page
    updateDate();
    loadMenuItems();
    setupThemeToggle
    // Menu data structure
const menuData = {
    breakfast: [
        { name: "Masala Dosa", type: "veg", description: "Crispy rice crepe with potato filling" },
        { name: "Idli Sambar", type: "veg", description: "Steamed rice cakes with lentil soup" },
        { name: "Poha", type: "veg", description: "Flattened rice with vegetables" }
    ],
    lunch: [
        { name: "Rice and Dal", type: "veg", description: "Steamed rice with lentil curry" },
        { name: "Chicken Curry", type: "non-veg", description: "Spicy chicken curry" },
        { name: "Mixed Vegetables", type: "veg", description: "Assorted vegetables curry" }
    ],
    snacks: [
        { name: "Samosa", type: "veg", description: "Crispy pastry with spiced potato filling" },
        { name: "Tea/Coffee", type: "veg", description: "Hot beverages" },
        { name: "Biscuits", type: "veg", description: "Assorted cookies" }
    ],
    dinner: [
        { name: "Chapati", type: "veg", description: "Whole wheat flatbread" },
        { name: "Paneer Butter Masala", type: "veg", description: "Cottage cheese in rich gravy" },
        { name: "Rice", type: "veg", description: "Steamed rice" }
    ]
};

// Function to update current date
function updateDate() {
    const dateElement = document.getElementById('current-date');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = currentDate.toLocaleDateString('en-US', options);
}

// Function to create menu item HTML
function createMenuItem(item) {
    return `
        <div class="menu-item">
            <div class="item-info">
                <h3>${item.name}</h3>
                <span class="${item.type}-badge">${item.type}</span>
            </div>
            <p class="item-description">${item.description}</p>
        </div>
    `;
}

// Function to load menu items
function loadMenuItems() {
    // Show loading animation
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';

    try {
        // Load items for each meal type
        Object.keys(menuData).forEach(mealType => {
            const container = document.getElementById(`${mealType}-items`);
            if (container) {
                container.innerHTML = menuData[mealType]
                    .map(item => createMenuItem(item))
                    .join('');
            }
        });
    } catch (error) {
        console.error('Error loading menu items:', error);
    } finally {
        // Hide loading animation
        loader.style.display = 'none';
    }
}

// Theme toggle functionality
function setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const icon = themeToggle.querySelector('i');
            icon.classList.toggle('fa-sun');
            icon.classList.toggle('fa-moon');
        });
    }
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateDate();
    loadMenuItems();
    setupThemeToggle();
});

// Add this to check if the script is loading properly
console.log('Menu script loaded successfully');