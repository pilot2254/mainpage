document.addEventListener('DOMContentLoaded', () => {
    const numberOfRaindrops = 150; // Number of raindrops to generate
    const rainContainer = document.getElementById('rain');
  
    // Function to create a raindrop
    function createRaindrop() {
      const drop = document.createElement('div');
      drop.classList.add('rain-drop');
      
      // Set random position for each drop
      const startPosX = Math.random() * window.innerWidth;
      const dropSize = Math.random() * 10 + 7; // Random size between 7px-17px
      const animationDuration = Math.random() * 2 + 3; // Random duration for each drop
      
      // Set the random styles
      drop.style.left = `${startPosX}px`;
      drop.style.height = `${dropSize}px`;
      drop.style.animationDuration = `${animationDuration}s`;
      drop.style.animationDelay = `${Math.random() * 5}s`;
      
      // Append the drop to the rain container
      rainContainer.appendChild(drop);
    }
  
    // Create raindrops at intervals
    for (let i = 0; i < numberOfRaindrops; i++) {
      createRaindrop();
    }
  
    // Optionally, you can create raindrops continuously every 100ms for a more dynamic effect
    // setInterval(createRaindrop, 100);
  });
  