document.addEventListener("DOMContentLoaded", function () {
  const words = [
      'Admire', 'Aspire', 'Better', 'Bloom', 'Satisfaction', 'Hopes', 'Dreams', 'Trust',
      'Help', 'Good job', 'Keep it up!', 'Im so proud of you!', 'There you go!', 'Dont give up...', 'Be strong', 'You can do it', 
      'Fear ?', 'I am the best.', 'Who said that you cant do it too ?', 'PUSH FOWARD', 'Ambition', 'Morals', 'Value', 'The sky is the limite',
      'Pure', 'Myself', 'Yourself', 'We are togheter in this', 'Teamwork', 'Help will arrive', 'I am the backup',
  ];
  const container = document.querySelector('.rain-container');
  const MAX_WORDS = 50;
  function createWord() {
      if (container.children.length >= MAX_WORDS) {
          return;
      }
      const word = document.createElement('div');
      word.classList.add('word');
      word.style.left = Math.random() * 100 + 'vw';
      const duration = Math.random() * 5 + 5;
      word.style.animationDuration = duration + 's';
      const delay = Math.random() * 5;
      word.style.animationDelay = delay + 's';
      word.textContent = words[Math.floor(Math.random() * words.length)];
      container.appendChild(word);
      word.addEventListener('animationend', () => {
          word.remove();
      });
  }
  setInterval(createWord, 100);
});









