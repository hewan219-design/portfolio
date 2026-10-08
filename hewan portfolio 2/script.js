const text = document.getElementById("changing-text");
const roles = ["Student", "Fashion Designer", "Digital Marketer", "Web Developer"];
let index = 0;

function changeText() {
  text.style.transform = "translateY(-20px)";
  text.style.opacity = 0;

  setTimeout(() => {
    text.textContent = roles[index];

    text.style.transform = "translateY(0)";
    text.style.opacity = 1;

    index = (index + 1) % roles.length;
  }, 500); 
}
setInterval(changeText, 2500);
const projectCards = document.querySelectorAll('.project-card');

function showProjects() {
  const triggerBottom = window.innerHeight * 0.85;

  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < triggerBottom) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', showProjects);
showProjects();

