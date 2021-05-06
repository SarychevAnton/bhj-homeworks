'use strict'

let rotator = Array.from(document.querySelectorAll(".rotator"));

for (let i = 0; i < rotator.length; i++) {
    let rotatorCase = Array.from(rotator[i].querySelectorAll(".rotator__case"));
    let currentPosition = 0;
    let rotatorSpeed = 1000;

    const changeTimer = function () {
        rotatorCase[currentPosition].classList.toggle("rotator__case_active");
        currentPosition++;
        
        if (currentPosition > rotatorCase.length - 1) {
            currentPosition = 0;      
        };    
        
        let rotatorSpeed = rotatorCase[currentPosition].dataset.speed;
        let rotatorColor = rotatorCase[currentPosition].dataset.color;
        rotatorCase[currentPosition].style.color = rotatorColor;  
        rotatorCase[currentPosition].classList.add("rotator__case_active"); 
        timer = setTimeout(changeTimer,rotatorSpeed);  
        clearTimeout(timer);
    }; 

    const timer = setTimeout(changeTimer,rotatorSpeed);   
};