const heightToShowElement = 100;
const heightToChangeActiveLink = 50;

window.addEventListener('scroll', () => {
  reveal('down');
  reveal('left');
  reveal('right');
  checkVisibleSection();
});

reveal('down');
reveal('left');
reveal('right');
checkVisibleSection();

function reveal(className) {
  const elementsToShow = document.querySelectorAll('.' + className);
  for (var i = 0; i < elementsToShow.length; i++) {
    const elementTop = elementsToShow[i].getBoundingClientRect().top;
    if (elementTop < window.innerHeight - heightToShowElement) {
      elementsToShow[i].classList.add('show');
    } else {
      elementsToShow[i].classList.remove('show');
    }
  }
}

function checkVisibleSection() {
  const sections = document.querySelectorAll('section');
  Array.from(sections).forEach((section) => {
    if (scrollY >= section.offsetTop - heightToChangeActiveLink) {
      activateLinkBySectionId(section.id);
    }
  });
}

function activateLinkBySectionId(idToActivate) {
  const links = document.getElementsByTagName('nav')[0].children;
  Array.from(links).forEach((link) => {
    if (link.getAttribute('href') === '#' + idToActivate) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
