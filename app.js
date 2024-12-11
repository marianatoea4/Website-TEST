const menu = document.querySelector("#mobile-menu"); // cauta in document elementul cu id ul respectiv si il pastreaza in variabila menu
const menuLinks = document.querySelector(".navbar_menu"); // cauta elementul (sau primul) din clasa

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Cuvântul "toggle" înseamnă "comută" sau "schimbă între două stări".
//În acest caz, toggle() este folosit pentru a adăuga sau elimina o clasă CSS pe un element, în funcție de situație:
//  Dacă clasa există deja pe element → o elimină.
//  Dacă clasa nu există → o adaugă.

//Verifică dacă elementul menu (butonul de meniu) are deja clasa "is-active".
//Dacă are clasa, o scoate.
//Dacă nu are clasa, o adaugă.
