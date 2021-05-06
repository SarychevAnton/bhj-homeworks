'use strict'

let elements = Array.from(document.querySelectorAll(".dropdown__link"));

let buttons =  Array.from(document.getElementsByClassName("dropdown"));
buttons.forEach(item => click(item)); 

function click(button) {
    button.addEventListener('click', function() {
        let subElements = this.querySelector(".dropdown__list");
        if (subElements.classList.contains("dropdown__list_active")) {
            subElements.className = "dropdown__list";
            return false;
        }    
        else {
            subElements.className = "dropdown__list dropdown__list_active";
        };
    });
}; 

for (let i = 0; i < elements.length; i++) {
    elements[i].closest(".dropdown__item").onclick = function() {
        elements[i].closest(".dropdown").querySelector(".dropdown__value").textContent = elements[i].innerText;
        return false;
    };
};    