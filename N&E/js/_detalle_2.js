//! --------------------  COMIENZO DEL PROGRAMA  -------------------- !//

document.addEventListener("DOMContentLoaded", function(){
    
    //! ------------- VARIABLES ------------- !//
    // SELECCIONA TODOS LOS SPANS PARA MODIFICAR SU CONTENIDO
    let referencia = document.querySelectorAll(".contenedor-especificacion .accordion-collapse div span > span:last-child");
    let nuevoArray = []
    let fondos = document.querySelectorAll(".contenedor-fondos-js")
    let fondos2 = document.querySelectorAll(".contenedor-fondos-js-2")
    let titulo = document.querySelector(".section_1 div h2")
    let nombre = document.querySelectorAll(".nombre-especificaciones")
    let cuotas = document.querySelectorAll(".cuota-especificaciones")
    let precio = document.querySelectorAll(".precio-especificaciones")
    let foto = document.querySelector(".foto-principal")
    let sugerencias = document.querySelectorAll(".carousel-sugerencia")
    let sugerencias2 = document.querySelectorAll(".carousel-sugerencia-2")

    //? RECUPERO EL OBJETOJSON
    const objetoJSON = localStorage.getItem("objeto");
    //? ME DEVUELVE EL OBJETO DEL ELEMENTO SELECCIONADO
    const objeto = JSON.parse(objetoJSON);


    if (!objetoJSON) {
        // Si no hay nada en el almacenamiento local, mostrar alerta
        // Guardar el primer objeto de tu array de productos en el almacenamiento local
        const primerProductoJSON = JSON.stringify(productos[0]);
        localStorage.setItem("objeto", primerProductoJSON);

        // Establecer objeto con el primer producto
        const objeto = productos[0];
        location.reload();
        // Luego puedes continuar con el resto de tu lógica utilizando este objeto.
    }

    //! ------------- FUNCIONES ------------- !//

    //? Funcion que se encarga de almacenar los valores de mi objeto "30 valores"
    function almacenarValores(){
        window.onload = function() {
            if (window.innerWidth >= 992) {
                foto.src = objeto.especificaciones.fondo.a
            } else {
                foto.src = objeto.especificaciones.fondo.principal
            }
        };
        titulo.innerText = objeto.marca + " " + objeto.modelo

        //! FUNCIONES QUE SE ENCARGAN DE MODIFICAR EL CUADRO CON INFORMACION DEL VEHICULO
        //!-----------------------
        nombre.forEach((el) => {
            el.innerText = objeto.marca + " " + objeto.modelo
        })
        precio.forEach((el) => {
            el.innerText = "$ " + objeto.precio
        })
        cuotas.forEach((el) => {
            el.innerText = "$ "+ objeto.detalles.cuotas + " "
        })
        //!-----------------------




        for (let elemento in objeto.especificaciones) {
            // Obtener el objeto interior (confort, entretenimiento, etc.)
            let subObjeto = objeto.especificaciones[elemento];
            // Iterar sobre cada propiedad del objeto interior
            for (let subElemento in subObjeto) {
                // Agregar el valor al nuevo array
                nuevoArray.push(subObjeto[subElemento]);
            }
        }
    }

    function generarNumerosAleatorios() {
        let numeros = [];
        while (numeros.length < 10) {
            let numeroAleatorio = Math.floor(Math.random() * 14);
            if (!numeros.includes(numeroAleatorio)) {
                numeros.push(numeroAleatorio);
            }
        }
        return numeros;
    }
    
    let numerosGenerados = generarNumerosAleatorios();
    almacenarValores()
    console.log(numerosGenerados)
    sugerencias.forEach((el, index) => {
        let valor = numerosGenerados[index]
        let producto = productos[valor]
        imprimirDetallesVehiculo2(producto, el)
    })

    sugerencias2.forEach((el, index) => {
        let valor = numerosGenerados[index]
        let producto = productos[valor]
        imprimirDetallesVehiculo3(producto, el)
    })

    function imprimirDetallesVehiculo2(vehiculo, elemento){

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

        elemento.append(contenedor1)

        
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

    function imprimirDetallesVehiculo3(vehiculo, elemento){
        let final = document.querySelector(".carousel-item-2")

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

        final.append(contenedor1)

        
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

    referencia.forEach((el, index) => {
        el.innerText = nuevoArray[index];
    });

    fondos2.forEach((el, index) => {
        // convierte la letra del objeto en un valor numerico
        let fondoKey = String.fromCharCode(97 + index); 
        el.style.backgroundImage = `url(${objeto.especificaciones.fondo[fondoKey]})`;
    });

    fondos.forEach((el, index) => {

        let fondoKey = String.fromCharCode(97 + index); 
        el.style.backgroundImage = `url(${objeto.especificaciones.fondo[fondoKey]})`;
        el.addEventListener("click", function(){
            foto.src = objeto.especificaciones.fondo[fondoKey]
        })
    });

})