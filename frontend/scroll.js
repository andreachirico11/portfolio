const heightToShowElement = 100;

window.addEventListener('scroll', () => {
  reveal('down');
  reveal('left');
  reveal('right');
});

reveal('down');
reveal('left');
reveal('right');

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
