'use strict';

const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
   e.preventDefault();
   const formData = new FormData(form);

   let xml = new XMLHttpRequest();
   xml.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
   xml.upload.onprogress = function (load) {
      progress.value = load.loaded;
      progress.max = load.total;
   }

   xml.send(formData);
})