'use strict'

const image = document.getElementById('cookie');
let clicker = 0 ;

image.onclick = function(){

    if (image.width == 200){
        image.width = 220;
        image.height = 148;
    }
    else {
        image.width = 200;
        image.height = 128;
    }
    clicker ++;
    document.getElementById('clicker__counter').innerHTML = clicker;
}