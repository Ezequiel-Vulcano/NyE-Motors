//! --------------------  VARIABLES  -------------------- !//
//? ___ Variables para armar la navegacion de mobil.
let filtrar = document.getElementById("ventanaFiltrar")
let abrirFiltro = document.querySelector(".filtro-categoria")
let cerrarFiltro = document.querySelector("#cerrarFiltro") 
let overdrive = document.querySelector(".overdrive")


//? ___ Variable para Mostrar y Ocultar todos los filtros dentro del nav.
let mostrarnFiltro = document.querySelectorAll(".titulo-simbolo") 


//? ___ Variables para los filtros.
let boton = document.querySelectorAll(".boton")
let contenedor = document.querySelector(".contenedor-autos")
//let filtrarbtn = document.querySelector("#filtrar")
//let restablecerrbtn = document.querySelector("#restablecer")
let cantidadProductos = document.querySelector(".cantidadProductos")

//? ___ Variables para ordenar elementos ---------- CELULAR
let ordenarPor = document.querySelector("#ordenar")
let contenedorOrdenar = document.querySelector(".contenedor-ordenar")
let simboloOrdenar = document.getElementById("simboloOrdenar")


//? ___ Variables para ordenar elementos ---------- COMPUTADORA
let ordenarPorCompu = document.querySelector(".ordenarPor")
let ordenarMenor = document.querySelectorAll(".menor-precio")
let ordenarMayor = document.querySelectorAll(".mayor-precio")


//! --------------------  OBEJTOS  -------------------- !//
//? ___ Objeto con los productos filtrados.
let filtrosCatalogo = []
let filtroprovisorio = []
let productosFiltrados = []
let cheackboxContent = []


//! --------------------  FUNCIONES / EVENTOS -------------------- !//

//? ___ Funcion para Mostrar Y Ocultar el navbar en la version mobile.
// Agregar la funcion que se encarga de mostrar la navegacion de los filtros

// Muestra el nav.
filtrar.addEventListener("click", function(){
    abrirFiltro.style.transform = "translateX(0%)"
    overdrive.style.display = "block"
})
// Oculta el nav.
cerrarFiltro.addEventListener("click", function(){
    abrirFiltro.style.transform = "translateX(100%)"
    overdrive.style.display = "none"
})


//? Funcion que se encarga de mostrar todos los vehiculos apenas se abre el archivo
function mostrarDetallesVehiculo(){
    productos.forEach((el) => {
        imprimirDetallesVehiculo(el)
    })
}


//? Funcion que se encarga de mostrar la cantidad total de productos "14 vehiculos"
function mostrarcantidadProductos(){
    let numero = document.querySelectorAll(".contenedor-autos .card-auto")
    cantidadProductos.innerText = `${numero.length} vehiculos`
}

//? _____________ FUNCIONES DE LOS FILTROS _____________

// Muestra y oculta los filtros al hacer click en el simbolo "+" o "-"
mostrarnFiltro.forEach((el) => {
    el.addEventListener("click", function(){
        let spanHijo = el.querySelector('span');

        spanHijo.innerText === "+" ? spanHijo.innerText = "-" : spanHijo.innerText = "+"

        // Situa al "el" en el contenedor padre (el que tiene la clase ".titulo-simbolo")
        let tituloSimbolo = this.closest('.titulo-simbolo');
        // Situa al "el" en el contenedor hermano (el hermano de ".titulo-simbolo" que seria ".contenedor-filtros")
        let contenedorFiltros = tituloSimbolo.nextElementSibling;

        // Una vez situado en ".contenedor-filtros" cambia su display
        contenedorFiltros.style.display === "none" ? contenedorFiltros.style.display = "block" : contenedorFiltros.style.display = "none"
    })
})

boton.forEach((el) => {
    el.addEventListener("click", function(){
        probando2()
    })
})

// Funcion que se encarga de filtrar los autos
function probando2(){
    cheackboxContent = []
    filtroprovisorio = []
    productosFiltrados = []
    let copiaProductosFiltrados;
    let condicion1 = 0, condicion2 = 0, condicion3 = 0, condicion4 = 0, condicion5 = 0;

    let checkboxesMarcados = document.querySelectorAll('input[type="checkbox"]:checked');
    
    checkboxesMarcados.forEach((checkbox) => {
        let idCheckbox = checkbox.name;
        cheackboxContent.push(idCheckbox)
    });    
    verificarMarcaSeleccionada();
    
    checkboxesMarcados.forEach((checkbox) => {
        let idCheckbox = checkbox.name;
        // Para comparar los porductos con las marcas
        let data = checkbox.getAttribute('data')
        
        switch (idCheckbox) {
            case "miMarca":
                // aca el data Vale el data del cheakbox Marca
                agregarDirecto(data, "marca", productosFiltrados)
                break;
            case "miModelo":
                if (condicion1 == 0) {
                    copiaProductosFiltrados = [...productosFiltrados];
                    condicion1++
                    filtroprovisorio = []
                }
                if(productosFiltrados.length == 0){ 
                    agregarDirecto(data, "id", productosFiltrados)
                }
                agregarDirecto2(data, "id", copiaProductosFiltrados) 
                productosFiltrados = [...filtroprovisorio];
                break;
            case "miCombustible":
                if (condicion2 == 0) {
                    copiaProductosFiltrados = [...productosFiltrados];
                    condicion2++
                    filtroprovisorio = []
                }
                if(productosFiltrados.length == 0){ 
                    agregarDirecto(data, "combustible", productosFiltrados)
                }
                agregarDirecto2(data, "combustible", copiaProductosFiltrados) 
                productosFiltrados = [...filtroprovisorio];
                break;
            case "miCaja":
                if (condicion3 == 0) {
                    copiaProductosFiltrados = [...productosFiltrados];
                    condicion3++
                        filtroprovisorio = []
                }
                if(productosFiltrados.length == 0){ 
                    agregarDirecto(data, "caja", productosFiltrados)
                }
                agregarDirecto2(data, "caja", copiaProductosFiltrados) 
                productosFiltrados = [...filtroprovisorio];
                break;
            case "miPuerta":
                if (condicion4 == 0) {
                    copiaProductosFiltrados = [...productosFiltrados];
                    condicion4++
                        filtroprovisorio = []
                }
                if(productosFiltrados.length == 0){ 
                    agregarDirecto(data, "puertas", productosFiltrados)
                }
                agregarDirecto2(data, "puertas", copiaProductosFiltrados) 
                productosFiltrados = [...filtroprovisorio];
                break;
            case "miPlan":
                if (condicion5 == 0) {
                    copiaProductosFiltrados = [...productosFiltrados];
                    condicion5++
                        filtroprovisorio = []
                }
                if(productosFiltrados.length == 0){ 
                    agregarDirecto(data, "plan", productosFiltrados)
                }
                agregarDirecto2(data, "plan", copiaProductosFiltrados) 
                productosFiltrados = [...filtroprovisorio];
                break;
        }
    });

    generarFiltro()
    mostrarcantidadProductos()
}

// 1º Filtro y Filtro en caso de que no alla ningun contenido cargado
function agregarDirecto(x, comparador, arreglo){
    productos.forEach(el => {
        if(x == el[comparador]){
            arreglo.push(el)
        } else if (comparador === x) {
            if (x == el.detalles[comparador]) {
                arreglo.push(el);
            }
        }
    })
}
// 2º Filtro (si el anterior tiene contenido)
function agregarDirecto2(x, comparador, arreglo) {
    arreglo.forEach(el => {
        if(x == el[comparador]){
            filtroprovisorio.push(el)
        } else{
            if (x == el.detalles[comparador]) {
                filtroprovisorio.push(el);
            }
        }
    })
    //Muevo todo el contenido del filtro creado provistoriamente al filtro original
}

// Verificar si en los cheackbox se selecciono una marca
// Si no tiene ninguna marca seleccionada (fiat, peugeot, vw, etc..) arroja error
function verificarMarcaSeleccionada() {
    let contieneMiMarca = cheackboxContent.includes("miMarca");
    if (!contieneMiMarca) {
        Swal.fire({
            text: 'Debe seleccionar al menos una marca.',
            icon: 'warning',
            zIndex: "9999",
            iconColor: "#02539c",
            confirmButtonText: 'ok',
            confirmButtonColor: "#02539c",
        },
        {
            
        })
    
        // Detener la ejecución del programa
        contenedor.innerHTML = ""
        mostrarDetallesVehiculo()
        mostrarcantidadProductos()
        throw new Error("No se ha seleccionado ninguna marca.");
    }
}

// Funcion que se encarga de crear los elementos dinamicamente:
function imprimirDetallesVehiculo(vehiculo) {
    let contenedorFinal = document.querySelector(".contenedor-autos")

    let contenedor1 = document.createElement("div")
    contenedor1.setAttribute("data-Marca", vehiculo.marca)
    contenedor1.setAttribute("class", "col-8 col-lg-3 card-auto pb-3 mt-3 mt-sm-0")

    let imagen = document.createElement("img")
    imagen.setAttribute("class", "img-fluid mt-3")
    imagen.setAttribute("alt", "foto del vehiculo")
    imagen.setAttribute("src", vehiculo.fotos.completo)

    let titulo = document.createElement("h3")
    titulo.textContent = vehiculo.marca + " " + vehiculo.modelo

    let contenedor2 = document.createElement("div")
    contenedor2.setAttribute("class", "d-flex flex-column mt-1 mb-4")
    
    let span1 = document.createElement("span")
    span1.textContent = "Modelo: 2024"

    let span2 = document.createElement("span")
    span2.textContent = "0Km"

    let span3 = document.createElement("span")
    span3.textContent = "$ " + vehiculo.precio

    contenedor2.append(span1, span2)
    contenedor1.append(imagen, titulo, contenedor2, span3)

    contenedorFinal.append(contenedor1)

    
    //TODO "Funcion que se encarga de guardar el vehiculo para el LOCAL STORAGE"

    contenedor1.addEventListener("click", function() {

        //! Guardo el objeto en el localStorage para generarlo dinamicamente en la proxima pagina de detalles
        const local = vehiculo;
        const textoJSON = JSON.stringify(local);
        localStorage.setItem("objeto", textoJSON);

        // Me redirecciono a la pagina de detalle
        window.location.href = "../pages/page_2.html"; 

    })
}

// Funcion para agregar todo el contenido generdo dinamicamente en "imprimirDetallesVehiculo"
function generarFiltro(){
    contenedor.innerHTML = ""
    productosFiltrados.forEach((el) => {
        imprimirDetallesVehiculo(el)
    })

    contenedor.innerHTML == "" && crearMensaje()
}

// Funcion que se encarga de crear un mensaje en caso de que el contenedor no muestre ningun auto
function crearMensaje(){
    let mensaje = document.createElement("span")
    mensaje.innerText = "No se encuentran vehiculos relacionados con los filtros"
    contenedor.append(mensaje)
}

// Funcion que se encarga de ordenar los filtros por precio (mayor y menor) y marca
ordenarPor.addEventListener("click", function(){
    if(contenedorOrdenar.style.opacity == 1){
        contenedorOrdenar.style.opacity = 0
        contenedorOrdenar.style.pointerEvents = "none";
        simboloOrdenar.innerText = "+"
    } else {
        contenedorOrdenar.style.opacity = 1
        contenedorOrdenar.style.pointerEvents = "auto";
        simboloOrdenar.innerText = "-"
    }
    
})


//? _____________ FUNCIONES PARA ORDENAR POR MAYOR Y MENOR PRECIO _____________
let contadorCerrar = 0

// MUESTRA LOS BOTONES PARA ELEGIR COMO ORDENAR LA FUNCION
ordenarPorCompu.addEventListener("click", function(){
    let desplegable = document.querySelector(".menu-desplegable2")

    if (contadorCerrar == 0) {
        desplegable.style.opacity = 1
        desplegable.style.pointerEvents = "auto";
        contadorCerrar++
    } else {
        desplegable.style.opacity = 0
        desplegable.style.pointerEvents = "none";
        contadorCerrar--
    }
    
})

// LE CAMBIA EL "font-wehigth" A LOS BOTONES PARA SABER CUAL ESTA SELECCIONADO
function cambiarEspesor(x, y){
    x.style.fontWeight = 700
    y.style.fontWeight = 400
}

// SE ENCARGA DE ORDENAR LOS ELEMENTOS
function ordenarElementos(x){
    let contenedor = document.querySelector(".contenedor-autos")
    let probamos = document.querySelectorAll(".contenedor-autos .card-auto")
    //Array.from combierte en un array mi elemento para darme las funciones de ellos
    let creo = Array.from(probamos)

    let ordenarMenorTexto = document.querySelector(".menor-precio span")
    let ordenarMayorTexto = document.querySelector(".mayor-precio span")

    creo.sort(function(a, b) {

        // Saca los simbolos de mis precios ($ y .) devolviendo un number
        var precioA = parseInt(a.children[3].innerText.replace(/\D/g, ''));
        var precioB = parseInt(b.children[3].innerText.replace(/\D/g, ''));
        //

        if (x === 'ascendente') {
            cambiarEspesor(ordenarMenorTexto, ordenarMayorTexto )
            return precioA - precioB; // Ordena de menor a mayor
        } else {
            cambiarEspesor(ordenarMayorTexto, ordenarMenorTexto)
            return precioB - precioA; // Ordena de mayor a menor
        }
    });
    
    contenedor.innerHTML = ""
    creo.forEach((el)=> {
        contenedor.append(el)
    })
    
    contenedor.innerHTML == "" && crearMensaje()
}

// FUNCIONES PARA ORDENAR MIS ELEMENTOS DE MENOR A MAYOR PRECIO -------------
ordenarMenor.forEach((el) => {
    el.addEventListener("click", function() {
        ordenarElementos("ascendente");
    });
})

ordenarMayor.forEach((el) => {
    el.addEventListener("click", function() {
        ordenarElementos("descendente");
    });
})



//! --------------------  COMIENZO DEL PROGRAMA  -------------------- !//

document.addEventListener("DOMContentLoaded", function(){

    // Se encarga de mostrar todos los vehiculos de todas las marcas cuando abre la pagina
    mostrarDetallesVehiculo()
    mostrarcantidadProductos()

    
})

