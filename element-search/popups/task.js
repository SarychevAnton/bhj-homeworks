'use strict'

const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const buttonChange = document.querySelector('.show-success');
const otherButtonChange = document.getElementById('modal_success');
buttonChange.onclick = function() {
  otherButtonChange.classList.add('modal_active');
  modalMain.classList.remove('modal_active');
};

const modalClose = document.getElementsByClassName('modal__close_times');

const closeFirstPopup = modalClose[0];
closeFirstPopup.onclick = function() {
  modalMain.classList.remove('modal_active');
};

 const closeSecondPopup = modalClose[1];
 closeSecondPopup.onclick = function() {
   modalMain.classList.remove('modal_active');
   otherButtonChange.classList.remove('modal_active');
 };