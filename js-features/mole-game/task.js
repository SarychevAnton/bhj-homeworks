'use strict'

let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

for (let i = 1; i <= 9; i++) {
    let hole = document.getElementById(`hole${i}`);

    hole.onclick = function() {
        if (hole.className.includes("hole_has-mole") == true) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }

        if (dead.textContent == 10) {
            alert('Ура!!! Вы победили');
            dead.textContent = 0;
            lost.textContent = 0;
        }

        if (lost.textContent == 5) {
            alert('Увы, Вы проиграли...');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    };
}


/* Второй вариант*/
// let dead = document.getElementById('dead').innerHTML;
// let lost = document.getElementById('lost').innerHTML;
// let hole = document.querySelectorAll(".hole");

// function reset(){
//     dead = 0;
//     document.getElementById('dead').innerHTML = dead;
//     lost = 0;
//     document.getElementById('lost').innerHTML = lost;
// }

// hole.forEach((element)=>{
// element.addEventListener('click', ()=>{
//     element.classList.contains('hole_has-mole') ? 
//     document.getElementById('dead').innerHTML = ++dead: 
//     document.getElementById('lost').innerHTML = ++lost;

//     if(dead == 10) {
//         reset();
//         alert('Ура!!! Вы победили');

//     }if(lost == 5) {
//         let a = confirm('Увы, Вы проиграли... Еще разок?');
//             if (a == false){
//                 alert('Досвидания');
//             }
//             else reset()
//     }
// })
// })
