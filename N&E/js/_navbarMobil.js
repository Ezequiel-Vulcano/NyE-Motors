//! --------------------  VARIABLES  -------------------- !//
//? ___ Variables para armar el navbar en la version mobile.
let ocutarNav = document.querySelector(".cerrar")
let section = document.querySelector(".filtros-mobile")
let mostrarnNav = document.querySelector("#navegacion")
let planes = document.querySelector("#planes")
let menuDesplegable = document.querySelector(".menu-desplegable")
let enlaces = document.querySelectorAll(".enlaces-ocultar")

//! --------------------  FUNCIONES / EVENTOS -------------------- !//
//? ___ Funcion para Mostrar Y Ocultar el navbar en la version mobile.
// Muestra el nav.
mostrarnNav.addEventListener("click", function(){
    section.style.display = "block"
});
// Oculta el nav.
ocutarNav.addEventListener("click", function(){
    section.style.display = "none"
});

planes.addEventListener("click", function(){
    if(menuDesplegable.style.opacity == 1){
        menuDesplegable.style.opacity = 0
        menuDesplegable.style.pointerEvents = "none";
    } else {
        menuDesplegable.style.opacity = 1
        menuDesplegable.style.pointerEvents = "auto";
    }
})

enlaces.forEach((el) => {
    el.addEventListener("click", function(){
        section.style.display = "none"
    })
})