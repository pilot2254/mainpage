// Skills page specific functionality

document.addEventListener('DOMContentLoaded', () => {
  // Initialize skills
  const skillsContainer = document.querySelector('.grid');
  if (skillsContainer) {
    initializeSkills(skillsContainer);
  }
  
  // Create rain effect
  const rainContainer = document.getElementById('rain-container');
  if (rainContainer) {
    // Rain is already created in main.js
  }
});

// Initialize skills
function initializeSkills(container) {
  const skills = [
    { name: 'Driving', icon: 'fa-car', category: 'Personal' },
    { name: 'HTML', icon: 'fa-html5', category: 'Technology' },
    { name: 'CSS', icon: 'fa-css3-alt', category: 'Technology' },
    { name: 'Proxmox', icon: 'fa-server', category: 'Technology' },
    { name: 'ESXI', icon: 'fa-network-wired', category: 'Technology' },
    { name: 'Listening Music', icon: 'fa-headphones', category: 'Hobby' },
    { name: 'Gaming', icon: 'fa-gamepad', category: 'Hobby' },
    { name: 'Blender', icon: 'fa-cube', category: 'Technology' },
    { name: 'Networking', icon: 'fa-network-wired', category: 'Technology' },
    { name: 'Assembling PCs', icon: 'fa-desktop', category: 'Technology' },
    { name: 'Curating Music', icon: 'fa-music', category: 'Hobby' },
    { name: 'Music Transitions', icon: 'fa-sliders-h', category: 'Hobby' },
    { name: 'Electrician', icon: 'fa-bolt', category: 'Professional' },
    { name: 'FL Studio Videos', icon: 'fa-video', category: 'Hobby' },
    { name: 'Web Design', icon: 'fa-paint-brush', category: 'Technology' },
    { name: 'Airsoft', icon: 'fa-crosshairs', category: 'Hobby' }
  ];

  // Create skill cards with staggered animation
  skills.forEach((skill, index) => {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:bg-zinc-800/50 transition-all duration-300';
    skillCard.style.animationDelay = `${index * 0.1}s`;
    
    // Get category color
    let categoryColor;
    switch(skill.category) {
      case 'Technology':
        categoryColor = 'text-emerald-400';
        break;
      case 'Hobby':
        categoryColor = 'text-amber-400';
        break;
      case 'Professional':
        categoryColor = 'text-sky-400';
        break;
      default:
        categoryColor = 'text-purple-400';
    }
    
    skillCard.innerHTML = `
      <div class="flex flex-col items-center text-center">
        <div class="text-4xl mb-4 text-silver-400">
          <i class="fas ${skill.icon}"></i>
        </div>
        <h3 class="text-xl font-semibold text-silver-400 mb-2">${skill.name}</h3>
        <span class="text-sm ${categoryColor}">${skill.category}</span>
      </div>
    `;
    
    container.appendChild(skillCard);
  });
}