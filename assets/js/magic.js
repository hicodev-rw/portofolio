function typeWriter() {
    const professions = [
        "Software Engineer",
        "AI Engineer",
        "AI Researcher",
        "Database Specialist",
        "AI Model Developer",
    ];

    let professionIndex = 0;
    let charIndex = 0;
    const typingSpeed = 50; // milliseconds per character
    const pauseBetweenProfessions = 1500; // delay before typing the next profession

    const typeWriter = () => {
        const currentProfession = professions[professionIndex];
        const displayElement = document.getElementById("profession");

        if (charIndex < currentProfession.length) {
            displayElement.innerHTML += currentProfession.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Pause before deleting and typing the next one
            setTimeout(() => {
                displayElement.innerHTML = "";
                charIndex = 0;
                professionIndex = (professionIndex + 1) % professions.length;
                setTimeout(typeWriter, typingSpeed);
            }, pauseBetweenProfessions);
        }
    };
    typeWriter();
  }

  typeWriter();

  // Disable right-click
  document.addEventListener('contextmenu', event => event.preventDefault());

  // Disable F12, Ctrl+Shift+I, Ctrl+U, etc.
  document.addEventListener('keydown', function(e) {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
      (e.ctrlKey && e.key === 'U')
    ) {
      e.preventDefault();
    }
  });
