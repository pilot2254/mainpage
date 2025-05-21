// Projects page specific functionality

document.addEventListener('DOMContentLoaded', () => {
  // Initialize projects
  const projectsContainer = document.querySelector('.grid');
  if (projectsContainer) {
    initializeProjects(projectsContainer);
  }
  
  // Initialize disclaimer modal
  const disclaimerModal = document.getElementById('disclaimer-modal');
  const disclaimerOkButton = document.getElementById('disclaimer-ok');
  
  if (disclaimerModal && disclaimerOkButton) {
    disclaimerOkButton.addEventListener('click', () => {
      disclaimerModal.classList.add('hidden');
    });
  }
  
  // Animate moon
  const moon = document.getElementById('moon');
  if (moon) {
    // Moon is already animated via CSS
  }
});

// Initialize projects
function initializeProjects(container) {
  const projects = [
    { name: 'Page 1', url: 'https://randompage.netlify.app/' },
    { name: 'Page 1 ver. 2', url: 'https://random-page-1-rework.netlify.app/' },
    { name: 'Page 2', url: 'https://random-page2.netlify.app/' },
    { name: 'Page 2 ver. 2', url: 'https://random-page-2-rework.netlify.app/' },
    { name: 'Page 3', url: 'https://randompage3.netlify.app/' },
    { name: 'Page 3 ver. 2', url: 'https://sebys-page-3-rework.netlify.app/' },
    { name: 'Page 4', url: 'https://sebyrandompage4.netlify.app/' },
    { name: 'Page 4 ver. 2', url: 'https://sebys-page-4-rework.netlify.app/' },
    { name: 'Page 5', url: 'https://sebys-page5.netlify.app/' },
    { name: 'Page 5 ver. 2', url: 'https://seby-page-5-rework.netlify.app/' },
    { name: 'Page 6', url: 'https://random-page-6-just-a-test.netlify.app/' },
    { name: 'Page 6 ver. 2', url: 'https://sebys-page-6-rework.netlify.app/' },
    { name: 'Page 7', url: 'https://random-page-7.netlify.app/' },
    { name: 'Page 7 ver. 2', url: 'https://sebys-page-7-rework.netlify.app/' },
    { name: 'Page 8', url: 'https://random-page-8.netlify.app/' },
    { name: 'Page 8 ver. 2', url: 'https://sebys-page-8-reworked.netlify.app/' },
    { name: 'Page 9 Rest in peace', url: '#', description: 'php project lost' },
    { name: 'Page 10', url: 'https://sebys-page-10-assets-page.netlify.app/' },
    { name: 'Page 11', url: 'https://seby-page-11.netlify.app/' },
    { name: 'Page 12 Old Main Page', url: 'https://seby-page-12.netlify.app/' },
    { name: 'Page 13', url: 'https://sebys-page-13.netlify.app/' },
    { name: 'Page 14', url: 'https://sebys-page-14.netlify.app/' },
    { name: 'Page 15', url: 'https://seby-page-15.netlify.app/' },
    { name: 'Page 16 | Forgotten', url: 'https://sebys-page-16.netlify.app/' },
    { name: 'Main Page 1', url: 'https://sebys-test-mainpage.netlify.app/', category: 'Main Pages' },
    { name: 'Main Page 2', url: 'https://sebys-mainpage.netlify.app/', category: 'Main Pages' },
    { name: 'Main Page 3', url: 'https://sebys-main-page-reworked.netlify.app/', category: 'Main Pages' },
    { name: 'Main Page 4', url: 'https://v3-main-page.netlify.app/', category: 'Main Pages' },
    { name: 'Disclaimer Page 1', url: 'https://i-disclaimer.netlify.app/', category: 'Disclaimers' },
    { name: 'Disclaimer Page 2', url: 'https://i-disclaimer-reworked.netlify.app/', category: 'Disclaimers' },
    { name: 'Disclaimer Page 3', url: 'https://v3-sebys-disclaimer.netlify.app/', category: 'Disclaimers' }
  ];

  // Add a section header for Main Pages
  const mainPagesHeader = document.createElement('div');
  mainPagesHeader.className = 'col-span-1 md:col-span-2 lg:col-span-3 mt-8 mb-4';
  mainPagesHeader.innerHTML = `
    <h2 class="text-2xl font-bold text-silver-400 text-center">Main Pages and Disclaimers</h2>
    <p class="text-zinc-400 text-center">In chronological order</p>
  `;
  
  // Track if we've added the header
  let headerAdded = false;

  // Create project cards
  projects.forEach((project, index) => {
    // Add the header before the first main page
    if (project.category && !headerAdded) {
      container.appendChild(mainPagesHeader);
      headerAdded = true;
    }
    
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-800/50 transition-all duration-300';
    projectCard.style.animationDelay = `${index * 0.1}s`;
    
    const isDisabled = project.url === '#';
    
    projectCard.innerHTML = `
      <h3 class="text-xl font-semibold text-silver-400 mb-2">${project.name}</h3>
      ${project.description ? `<p class="text-zinc-400 mb-4">${project.description}</p>` : ''}
      <div class="mt-4">
        <button 
          class="px-4 py-2 ${isDisabled ? 'bg-zinc-700 cursor-not-allowed' : 'bg-zinc-800 hover:bg-zinc-700'} text-white rounded transition-colors"
          ${isDisabled ? 'disabled' : `onclick="window.open('${project.url}', '_blank')"`}
        >
          ${isDisabled ? 'Unavailable' : 'View Project'}
        </button>
      </div>
    `;
    
    container.appendChild(projectCard);
  });
}