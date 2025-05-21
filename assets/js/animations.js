// Home page animations

document.addEventListener('DOMContentLoaded', () => {
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
    
    function createTypingAnimation(container, text) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          container.textContent += text.charAt(index);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);
    }
    
    createTypingAnimation(typingContainer, text);
  }
});