// Skills page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Skills data
    const skills = [
        // Technology skills
        { name: 'HTML', icon: 'fab fa-html5', category: 'technology' },
        { name: 'CSS', icon: 'fab fa-css3-alt', category: 'technology' },
        { name: 'Proxmox', icon: 'fas fa-server', category: 'technology' },
        { name: 'ESXI', icon: 'fas fa-network-wired', category: 'technology' },
        { name: 'Blender', icon: 'fas fa-cube', category: 'technology' },
        { name: 'Networking', icon: 'fas fa-network-wired', category: 'technology' },
        { name: 'Web Design', icon: 'fas fa-paint-brush', category: 'technology' },
        
        // Professional skills
        { name: 'Electrician', icon: 'fas fa-bolt', category: 'professional' },
        { name: 'PC Assembly', icon: 'fas fa-desktop', category: 'professional' },
        { name: 'Driving', icon: 'fas fa-car', category: 'professional' },
        
        // Hobbies
        { name: 'Music', icon: 'fas fa-headphones', category: 'hobbies' },
        { name: 'Gaming', icon: 'fas fa-gamepad', category: 'hobbies' },
        { name: 'Music Curation', icon: 'fas fa-music', category: 'hobbies' },
        { name: 'Music Transitions', icon: 'fas fa-sliders-h', category: 'hobbies' },
        { name: 'FL Studio Videos', icon: 'fas fa-video', category: 'hobbies' },
        { name: 'Airsoft', icon: 'fas fa-crosshairs', category: 'hobbies' }
    ];

    // Get the skill container elements
    const skillContainers = document.querySelectorAll('.max-w-6xl > div');
    
    // Render skills by category
    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'bg-zinc-800 p-6 rounded-lg text-center hover:bg-zinc-700 transition-colors';
        
        skillCard.innerHTML = `
            <div class="text-3xl mb-3 text-emerald-400">
                <i class="${skill.icon}"></i>
            </div>
            <h3 class="font-medium text-white">${skill.name}</h3>
        `;
        
        // Add to appropriate container
        if (skill.category === 'technology' && skillContainers[0]) {
            skillContainers[0].querySelector('.grid').appendChild(skillCard);
        } else if (skill.category === 'professional' && skillContainers[1]) {
            skillContainers[1].querySelector('.grid').appendChild(skillCard);
        } else if (skill.category === 'hobbies' && skillContainers[2]) {
            skillContainers[2].querySelector('.grid').appendChild(skillCard);
        }
    });
});