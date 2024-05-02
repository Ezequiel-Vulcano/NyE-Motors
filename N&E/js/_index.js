//! --------------------  VARIABLES  -------------------- !//
//?  _____________ FILTROS VER MAS _____________
let contenedorFinal2 = document.querySelector(".contenedor-filtros-2")
let verMas = document.getElementById("verMas")
let tope = 5
// Se ecarga de delimitar cuando voy a ocultar el boton de "ver mas"
let cantidadMaximaDeProductos = 23
// ----------

//?  _____________ VARIABLES PARA EL CARRUSEL DE RESEÑAS _____________

let carruselReseñas = document.getElementById("carruselReseñas")


//! --------------------  OBJETOS  -------------------- !//

let reseñas = [
    {
        nombre: "Sophie Dream's",
        imagen: "../imgs/index/section6/perfil.avif",
        estrellas: 5,
        fecha: "23/09/2023",
        parrafo: "Si querés un usado en muy muy muy buen estado, no lo dudes. Los chicos te atienden bárbaro, son súper atentos y te sacan todas las dudas.Excelente atención y calidad humana. Gracias por hacer que mi sueño se haga realidad",
        activacion: "active"
    },
    {
        nombre: "Romina Battistotti",
        imagen: "../imgs/index/section6/perfil.avif",
        estrellas: 5,
        fecha: "10/02/2024",
        parrafo: "Excelente todo!!!! El trato, las explicaciones detalladas y todo el proceso hasta la entrega. Cumplieron con todo como lo habían dicho. Los eligiria nuevamente sin duda"
    },
    {
        nombre: "Yuneibys Fajardo",
        imagen: "../imgs/index/section6/perfil.avif",
        estrellas: 5,
        fecha: "15/10/2023",
        parrafo: "Excelente atención ! Gente profesional, compre con Ana Arriola, muy atenta en cada uno los pasos a seguir. Me acompaño hasta el momento del retiro y me respeto lo pactado. Recomiendo"
    },
    {
        nombre: "Maria Lucia Gomez",
        imagen: "../imgs/index/section6/perfil.avif",
        estrellas: 5,
        fecha: "17/12/2023",
        parrafo: "Tuve un pequeño inconveniente y se pusieron a disposición para solucionarlo, buena atención resolvieron todas mis inquietudes y estoy a gusto con eso... Excelente recomiendo!!"
    },
    {
        nombre: "Martin Digiglio",
        imagen: "../imgs/index/section6/perfil.avif",
        estrellas: 5,
        fecha: "23/06/2023",
        parrafo: "Tienen excelente forma y trato para con los clientes, me cumplieron con todo lo pactado me entregaron en forma inmediata. Súper recomendable si Tenes q comprar o vender vehículo."
    }
]


//! --------------------  FUNCIONES / EVENTOS -------------------- !//
//?  _____________ FUNCIONES DE LOS FILTROS _____________

// Funcion que genera dinamicamenta la tarjeta de cada auto
function imprimirDetallesVehiculo2(vehiculo) {
    
    let tarjeta = document.createElement("div")
    tarjeta.setAttribute("class", "contenedor-filtros-2-tarjetas col-xl-4 col-md-10 col-lg-5")
    tarjeta.setAttribute("data-unidad", vehiculo.detalles.unidad)

    let tarjetaContenedor1 = document.createElement("div")
    let imagen = document.createElement("img")
    imagen.setAttribute("src", vehiculo.fotos.lateral)
    imagen.setAttribute("alt", `Foto del ${vehiculo.modelo}`)
    imagen.setAttribute("class", `img-fluid`)

    let tarjetaContenedor2 = document.createElement("div")
    tarjetaContenedor2.setAttribute("class", "flex-column descripcion")

    let titulo = document.createElement("h3")
    titulo.setAttribute("class", "m-0")
    titulo.textContent = vehiculo.marca + " " + vehiculo.modelo

    let precio = document.createElement("span")
    precio.textContent = "Desde $" + vehiculo.precio

    let enlace = document.createElement("a")
    enlace.setAttribute("href", "./pages/page_1.html")
    enlace.setAttribute("class", "mt-3")
    enlace.textContent = "Mas informacion"

    let separador = document.createElement("div")
    separador.setAttribute("class", "separador mt-3 d-lg-none")

    tarjetaContenedor1.append(imagen)
    tarjetaContenedor2.append(titulo, precio, enlace);
    tarjeta.append(tarjetaContenedor1, tarjetaContenedor2, separador);

    contenedorFinal2.append(tarjeta);
}

// Funcion que muestra la tarjeta generada dinamicamente "imprimirDetallesVehiculo2"
function tarjetaContenedor2(objeto){
    for(let i = 0; i < tope && i < objeto.length; i++){
        imprimirDetallesVehiculo2(objeto[i]);
    }
}

// Funcion que genera el "Ver mas"
verMas.addEventListener("click", function(){
    
    if(productos.length > tope) {
        tope += 5
        if (cantidadMaximaDeProductos < tope) {
            verMas.style.display = "none"
        }
    } 
    contenedorFinal2.innerHTML = ""
    tarjetaContenedor2(productos)
    borrarBarra()
})


//?  _____________ FUNCIONES DE LAS RESEÑAS _____________ 
function generarReseñas(objeto){
    let padre = document.createElement("div")
    padre.setAttribute("class", `carousel-item ${objeto.activacion}`)

    let nombre = document.createElement("span")
    nombre.setAttribute("class", `d-flex justify-content-center mt-3`)
    nombre.textContent = objeto.nombre

    let contenedorImagen = document.createElement("div")
    contenedorImagen.setAttribute("class", `d-flex justify-content-center`)

    let imagen = document.createElement("img")
    imagen.setAttribute("src", `${objeto.imagen}`)
    imagen.setAttribute("alt", `icono del perfil`)

    let contenedorEstrellas = document.createElement("div")
    contenedorEstrellas.setAttribute("class", `d-flex justify-content-center`)

    for (let i = 0; i < objeto.estrellas; i++){
        let estrella = document.createElement("i")
        estrella.setAttribute("class", "fi fi-ss-star")

        contenedorEstrellas.append(estrella)
    }

    let fecha = document.createElement("span")
    fecha.setAttribute("class", "d-flex justify-content-center")
    fecha.textContent = objeto.fecha

    let parrafo = document.createElement("p")
    parrafo.setAttribute("class", "text-center p-2")
    parrafo.textContent = objeto.parrafo

    //! Agrego los elementos a los contenedores

    contenedorImagen.append(imagen)
    padre.append(nombre, contenedorImagen, contenedorEstrellas, fecha, parrafo)
    carruselReseñas.append(padre)
}


//? FUNCIONES PARA PODER ENCONTRAR EL BORDE GRIS ALA ULTIMA TARJETA DE AUTOS

//! --------------------  COMIENZO DEL PROGRAMA  -------------------- !//

document.addEventListener("DOMContentLoaded", function(){
    // Se encarga de mostrar cada tarjeta de vehiculo
    tarjetaContenedor2(productos)

    reseñas.forEach((el) => {
        generarReseñas(el)
    })

    borrarBarra()
})

function borrarBarra(){
    let busqueda = document.querySelectorAll(".contenedor-filtros-2-tarjetas:last-of-type");
    let ultimoDiv = busqueda[busqueda.length - 1];
    let barraSeparador = ultimoDiv.querySelector(".separador");
    barraSeparador.style.display = "none"
}
