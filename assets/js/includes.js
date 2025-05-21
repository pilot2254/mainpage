// HTML Include System

document.addEventListener('DOMContentLoaded', function() {
    // Load all HTML includes
    loadIncludes();
    
    // Set active navigation links
    setTimeout(setActiveNavLinks, 100); // Small delay to ensure includes are loaded
});

// Function to load HTML includes
async function loadIncludes() {
    const includes = document.querySelectorAll('[data-include]');
    
    for (const element of includes) {
        const file = element.getAttribute('data-include');
        try {
            const response = await fetch(file);
            if (!response.ok) {
                throw new Error(`Failed to load ${file}: ${response.status} ${response.statusText}`);
            }
            const html = await response.text();
            element.innerHTML = html;
            
            // If this is a header, initialize the mobile menu
            if (file.includes('header')) {
                initializeMobileMenu();
            }
        } catch (error) {
            console.error(`Error loading include: ${error}`);
            element.innerHTML = `<p class="text-red-500">Error loading ${file}</p>`;
        }
    }
}

// Function to initialize mobile menu
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Function to set active navigation links
function setActiveNavLinks() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentPage = 'home';
    
    // Determine current page
    if (currentPath.includes('/projects/')) {
        currentPage = 'projects';
    } else if (currentPath.includes('/skills/')) {
        currentPage = 'skills';
    } else if (currentPath.includes('/bio/')) {
        currentPage = 'bio';
    }
    
    // Set active class for all nav links
    navLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        
        if (page === currentPage) {
            link.classList.add('text-zinc-100');
            link.classList.remove('text-zinc-400');
        } else {
            link.classList.add('text-zinc-400');
            link.classList.remove('text-zinc-100');
        }
    });
}