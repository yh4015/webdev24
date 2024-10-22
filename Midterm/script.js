// Get the hamburger and navigation menu elements
const hamburger = document.getElementById('hamburger');
const navigationMenu = document.getElementById('navLinks');

// Function to toggle the visibility of the navigation menu
const toggleNavMenu = () => {
    navigationMenu.classList.toggle('nav-active'); // Toggle the class to show/hide nav links
};

// Add click event listener to the hamburger menu
hamburger.addEventListener('click', toggleNavMenu);
