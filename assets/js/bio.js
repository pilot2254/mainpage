// Bio page specific functionality

document.addEventListener('DOMContentLoaded', () => {
  // Create word rain effect
  const wordRainContainer = document.getElementById('word-rain');
  if (wordRainContainer) {
    createWordRain(wordRainContainer);
  }
  
  // Terminal typing effect
  const typingContainer = document.getElementById('typing-container');
  if (typingContainer) {
    const text = `
C:/Users/SilverSniper>ssh root@xxx.xxx.xxx.xxx
C:/Users/SilverSniper>password
root@silversniper:~# Welcome to my bio.
root@silversniper:~# If you care about it at least.
root@silversniper:~# I put some work and dedication into it.
root@silversniper:~# I hope you like it so far.
root@silversniper:~# I really like trying my best sometimes.
root@silversniper:~# I know i am capable of stuff when i want to.
root@silversniper:~# And i know that you can that too.
root@silversniper:~# Find the right people who can get out the best of you.
root@silversniper:~# Not the ones who show you tough love, thats bullying tbh.
root@silversniper:~# Strive for the best, stop watching shorts or videos about self improving...
root@silversniper:~# Find your ways to define yourself, and to define your story.
root@silversniper:~# Dont be a copy cat, everybody has their own path.
root@silversniper:~# Besides that.
root@silversniper:~# I am happy who I am so far.
root@silversniper:~# So my story goes like this.
root@silversniper:~# I was joking, I wont tell you more than you know now.
logout
Connection to xxx.xxx.xxx.xxx closed
C:/Users/SilverSniper> To be continued...
`;
    
    // Declare the createTypingAnimation function here
    function createTypingAnimation(container, text) {
      let index = 0;
      const typingElement = document.createElement('div');
      typingElement.classList.add('typing-text');
      container.appendChild(typingElement);
      
      function type() {
        if (index < text.length) {
          typingElement.textContent += text.charAt(index);
          index++;
          setTimeout(type, 50);
        }
      }
      
      type();
    }
    
    createTypingAnimation(typingContainer, text);
  }
});

// Create word rain effect
function createWordRain(container) {
  const words = [
    'Admire', 'Aspire', 'Better', 'Bloom', 'Satisfaction', 'Hopes', 'Dreams', 'Trust',
    'Help', 'Good job', 'Keep it up!', 'Im so proud of you!', 'There you go!', 'Dont give up...', 'Be strong', 'You can do it', 
    'Fear ?', 'I am the best.', 'Who said that you cant do it too ?', 'PUSH FOWARD', 'Ambition', 'Morals', 'Value', 'The sky is the limite',
    'Pure', 'Myself', 'Yourself', 'We are togheter in this', 'Teamwork', 'Help will arrive', 'I am the backup',
  ];
  
  const MAX_WORDS = 50;
  
  function createWord() {
    if (container.children.length >= MAX_WORDS) {
      return;
    }
    
    const word = document.createElement('div');
    word.classList.add('word');
    word.style.left = `${Math.random() * 100}vw`;
    
    const duration = Math.random() * 5 + 5;
    word.style.animationDuration = `${duration}s`;
    
    const delay = Math.random() * 5;
    word.style.animationDelay = `${delay}s`;
    
    word.textContent = words[Math.floor(Math.random() * words.length)];
    container.appendChild(word);
    
    word.addEventListener('animationend', () => {
      word.remove();
    });
  }
  
  setInterval(createWord, 100);
}