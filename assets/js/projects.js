// Projects page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Project data
    const projects = [
        {
            name: 'Page 1',
            description: 'Early web design project with basic HTML and CSS.',
            url: 'https://randompage.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 1 ver. 2',
            description: 'Redesigned version with improved layout and responsiveness.',
            url: 'https://random-page-1-rework.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 2',
            description: 'Web project focused on minimalist design principles.',
            url: 'https://random-page2.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 2 ver. 2',
            description: 'Updated version with enhanced user experience.',
            url: 'https://random-page-2-rework.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 3',
            description: 'Interactive web page with JavaScript functionality.',
            url: 'https://randompage3.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 3 ver. 2',
            description: 'Redesigned with modern UI principles and animations.',
            url: 'https://sebys-page-3-rework.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 4',
            description: 'Experimental design with creative layout concepts.',
            url: 'https://sebyrandompage4.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 4 ver. 2',
            description: 'Refined version with improved performance and aesthetics.',
            url: 'https://sebys-page-4-rework.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 5',
            description: 'Content-focused web design with clean typography.',
            url: 'https://sebys-page5.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 5 ver. 2',
            description: 'Enhanced version with better visual hierarchy.',
            url: 'https://seby-page-5-rework.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 6',
            description: 'Experimental project testing new design concepts.',
            url: 'https://random-page-6-just-a-test.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 6 ver. 2',
            description: 'Refined implementation with improved user flow.',
            url: 'https://sebys-page-6-rework.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 7',
            description: 'Portfolio concept with grid-based layout.',
            url: 'https://random-page-7.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 7 ver. 2',
            description: 'Updated portfolio design with smoother interactions.',
            url: 'https://sebys-page-7-rework.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 8',
            description: 'Web application interface with functional components.',
            url: 'https://random-page-8.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 8 ver. 2',
            description: 'Redesigned application with improved UX and accessibility.',
            url: 'https://sebys-page-8-reworked.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 9',
            description: 'PHP project (no longer available).',
            url: '#',
            category: 'other'
        },
        {
            name: 'Page 10 - Assets Page',
            description: 'Resource collection for web developers.',
            url: 'https://sebys-page-10-assets-page.netlify.app/',
            category: 'other'
        },
        {
            name: 'Page 11',
            description: 'Experimental design concept with unique navigation.',
            url: 'https://seby-page-11.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 12 - Old Main Page',
            description: 'Previous portfolio main page design.',
            url: 'https://seby-page-12.netlify.app/',
            category: 'main'
        },
        {
            name: 'Page 13',
            description: 'Creative web project with animation effects.',
            url: 'https://sebys-page-13.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 14',
            description: 'Web design exploration with unique layout.',
            url: 'https://sebys-page-14.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 15',
            description: 'Interactive web experience with custom elements.',
            url: 'https://seby-page-15.netlify.app/',
            category: 'web'
        },
        {
            name: 'Page 16 | Forgotten',
            description: 'Archived project with experimental features.',
            url: 'https://sebys-page-16.netlify.app/',
            category: 'other'
        },
        {
            name: 'Main Page 1',
            description: 'First iteration of portfolio main page.',
            url: 'https://sebys-test-mainpage.netlify.app/',
            category: 'main'
        },
        {
            name: 'Main Page 2',
            description: 'Second iteration with improved design.',
            url: 'https://sebys-mainpage.netlify.app/',
            category: 'main'
        },
        {
            name: 'Main Page 3',
            description: 'Third iteration with enhanced functionality.',
            url: 'https://sebys-main-page-reworked.netlify.app/',
            category: 'main'
        },
        {
            name: 'Main Page 4',
            description: 'Latest main page design before current version.',
            url: 'https://v3-main-page.netlify.app/',
            category: 'main'
        },
        {
            name: 'Disclaimer Page 1',
            description: 'Legal disclaimer page design.',
            url: 'https://i-disclaimer.netlify.app/',
            category: 'other'
        },
        {
            name: 'Disclaimer Page 2',
            description: 'Updated disclaimer page with improved readability.',
            url: 'https://i-disclaimer-reworked.netlify.app/',
            category: 'other'
        },
        {
            name: 'Disclaimer Page 3',
            description: 'Final iteration of disclaimer page design.',
            url: 'https://v3-sebys-disclaimer.netlify.app/',
            category: 'other'
        }
    ];

    // Get the projects grid container
    const projectsGrid = document.getElementById('projects-grid');
    
    // Get filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Function to render projects
    function renderProjects(category = 'all') {
        // Clear the grid
        projectsGrid.innerHTML = '';
        
        // Filter projects based on category
        const filteredProjects = category === 'all' 
            ? projects 
            : projects.filter(project => project.category === category);
        
        // Render each project
        filteredProjects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'bg-zinc-800 rounded-lg overflow-hidden hover:translate-y-[-4px] transition-transform';
            
            const isDisabled = project.url === '#';
            
            projectCard.innerHTML = `
                <div class="h-48 bg-zinc-700 flex items-center justify-center">
                    <i class="fas fa-code text-5xl text-zinc-500"></i>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-white mb-2">${project.name}</h3>
                    <p class="text-zinc-400 mb-4">${project.description}</p>
                    <a href="${project.url}" target="_blank" class="text-emerald-400 hover:text-emerald-300 transition-colors ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}" ${isDisabled ? 'onclick="return false;"' : ''}>
                        ${isDisabled ? 'Unavailable' : 'View Project'} <i class="fas fa-external-link-alt ml-1"></i>
                    </a>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }
    
    // Initialize with all projects
    renderProjects();
    
    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.remove('bg-emerald-600');
                btn.classList.add('bg-zinc-800');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            this.classList.add('bg-emerald-600');
            this.classList.remove('bg-zinc-800');
            
            // Get category from data attribute
            const category = this.getAttribute('data-filter');
            
            // Render projects for the selected category
            renderProjects(category);
        });
    });
});