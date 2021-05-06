'use strict'

const reveals = document.querySelectorAll(".reveal");

const inViewport = function (element) { //отслеживание изменения координат
  const viewportHeight = window.innerHeight; //высота элемента
  const elementTop = element.getBoundingClientRect().top;
  return (elementTop < viewportHeight && elementTop >= 0) ? true : false;
};

window.addEventListener('scroll', () => {
  for (const div of reveals) {
    inViewport(div) ? div.classList.add("reveal_active") : false; // div активен в момент видимости
  }
});