// Common functionality across all pages

// Create rain effect
document.addEventListener('DOMContentLoaded', () => {
  // Only create rain if the container exists
  const rainContainer = document.getElementById('rain-container');
  if (rainContainer) {
    createRainEffect(rainContainer);
  }
  
  // Add active class to current nav link
  highlightCurrentNavLink();
});

// Create rain effect
function createRainEffect(container) {
  const numberOfDrops = 150;
  
  for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement('div');
    drop.classList.add('rain-drop');
    
    // Random positioning and animation
    const startPosX = Math.random() * window.innerWidth;
    const dropSize = Math.random() * 8 + 5; // Random size between 5-13px
    const animationDuration = Math.random() * 2 + 3; // Random duration between 3-5s
    
    drop.style.left = `${startPosX}px`;
    drop.style.height = `${dropSize}px`;
    drop.style.animationDuration = `${animationDuration}s`;
    drop.style.animationDelay = `${Math.random() * 5}s`;
    
    container.appendChild(drop);
  }
}

// Highlight current nav link
function highlightCurrentNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    // Check if the current path includes the link path
    // or if we're on the home page and the link is to index.html
    if (
      (currentPath.includes(linkPath) && linkPath !== '/index.html') || 
      (currentPath === '/' && linkPath === '/index.html') ||
      (currentPath.endsWith('/index.html') && linkPath === '/index.html')
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Typing animation
function createTypingAnimation(container, text, speed = 50) {
  if (!container) return;
  
  let index = 0;
  
  function typeText() {
    if (index < text.length) {
      container.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeText, speed);
    }
  }
  
  typeText();
}