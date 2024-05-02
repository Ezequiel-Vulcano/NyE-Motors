//! --------------------  OBEJTOS  -------------------- !//
//? 1) Defino el constructor para crear dinamicamente cada auto.

class Adjudicados {
    constructor(foto, titulo, detalles){
        this.foto = foto
        this.titulo = titulo
        this.detalles = detalles
    }
} 

class Detalles {
    constructor(modalidad, cuotas, restantes, avance, anticipo){
        this.modalidad = modalidad
        this.cuotas = cuotas
        this.restantes = restantes
        this.avance = avance 
        this.anticipo = anticipo
    }
} 


//? 2) Creo cada vehiculo condistintos nombres.
// ______ VEHICULOS DE FIAT:

let miAdjudicado = new Adjudicados("../imgs/catalogo/foto16.png" ,"TRACKER MT", new Detalles("100", "$ 200.000", 54, "30/84", "$ 11.000.000"));
let miAdjudicado2 = new Adjudicados("../imgs/catalogo/foto17.png" ,"BERLINGO FURGON HDI", new Detalles("80/20", "$ 240.000", 72, "12/84", "$ 9.500.000"));
let miAdjudicado3 = new Adjudicados("../imgs/catalogo/foto18.png" ,"C3 FEEL LOOK", new Detalles("80/20", "$ 290.000", 62, "22/84", "$ 11.400.000"));
let miAdjudicado4 = new Adjudicados("../imgs/catalogo/foto1.png" ,"CRONOS 1.3 PACK PLUS", new Detalles("80/20", "$ 220.000", 55, "29/84", "$ 12.500.000"));
let miAdjudicado5 = new Adjudicados("../imgs/catalogo/foto2.png" ,"CRONOS DRIVE 1.3", new Detalles("70/30", "$ 190.000", 76, "8/84", "$ 10.700.000"));
let miAdjudicado6 = new Adjudicados("../imgs/catalogo/foto3.png" ,"CRONOS 1.3 PRECISION CVT", new Detalles("80/20", "$ 240.000", 73, "11/84", "$ 10.700.000"));
let miAdjudicado7 = new Adjudicados("../imgs/catalogo/foto6.png" ,"TORO FREEDOM 4X2 1.8 AT", new Detalles("100", "$ 320.000", 37, "47/84", "$ 16.300.000"));
let miAdjudicado8 = new Adjudicados("../imgs/catalogo/foto5.png" ,"PULSE DRIVE 1.3 MT", new Detalles("100", "$ 300.000", 46, "38/84", "$ 15.700.000"));
let miAdjudicado9 = new Adjudicados("../imgs/catalogo/foto20.png" ,"RANGER XL D/C 4X2 MT 2.0", new Detalles("80/20", "$ 330.000", 79, "5/84", "$ 13.300.000"));
let miAdjudicado10 = new Adjudicados("../imgs/catalogo/foto19.png" ,"MAVERICK XLT AT", new Detalles("80/20", "$ 330.000", 79, "5/84", "$ 13.300.000"));
let miAdjudicado11 = new Adjudicados("../imgs/catalogo/foto9.png" ,"AMAROK TRENDLINE D/C 4X2 TDI 140CV", new Detalles("60/40", "$ 270.000", 78, "6/84", "$ 20.300.000"));
let miAdjudicado12 = new Adjudicados("../imgs/catalogo/foto10.png" ,"TAOS COMFORTLINE 250 TSI AT", new Detalles("60/40", "$ 320.000", 74, "10/84", "$ 23.300.000"));
let miAdjudicado13 = new Adjudicados("../imgs/catalogo/foto11.png" ,"SAVEIRO C/SIMPLE", new Detalles("80/20", "$ 240.000", 62, "22/84", "$ 13.300.000"));
let miAdjudicado14 = new Adjudicados("../imgs/catalogo/foto12.png" ,"POLO TRACK 1.6", new Detalles("80/20", "$ 220.000", 69, "15/84", "$ 10.700.000"));
let miAdjudicado15 = new Adjudicados("../imgs/catalogo/foto12.png" ,"POLO TRACK 1.6", new Detalles("80/20", "$ 220.000", 69, "15/84", "$ 10.700.000"));
let miAdjudicado16 = new Adjudicados("../imgs/catalogo/foto21.png" ,"RENEGADE SPORT PLUS AT 1.8", new Detalles("100", "$ 420.000", 54, "30/84", "$ 10.700.000"));
let miAdjudicado17 = new Adjudicados("../imgs/catalogo/foto22.png" ,"RENEGADE SPORT AT 1.8", new Detalles("100", "$ 270.000", 49, "35/84", "$ 15.700.000"));
let miAdjudicado18 = new Adjudicados("../imgs/catalogo/foto23.png" ,"HILUX 4X4 D/C DX CD", new Detalles("100", "$ 440.000", 60, "24/84", "$ 14.500.000"));
let miAdjudicado19 = new Adjudicados("../imgs/catalogo/foto24.png" ,"HILUX 4X4 D/C DX 2.4 MT", new Detalles("100", "$ 490.000", 43, "41/84", "$ 22.700.000"));

const articulos = [
    miAdjudicado,
    miAdjudicado2,
    miAdjudicado3,
    miAdjudicado4,
    miAdjudicado5,
    miAdjudicado6,
    miAdjudicado7,
    miAdjudicado8,
    miAdjudicado9,
    miAdjudicado10,
    miAdjudicado11,
    miAdjudicado12,
    miAdjudicado13,
    miAdjudicado14,
    miAdjudicado15,
    miAdjudicado16,
    miAdjudicado17,
    miAdjudicado18,
    miAdjudicado19,
]

function imprimirDetallesVehiculo2(auto) {

    let conedorPadre = document.createElement("div")
    conedorPadre.setAttribute("class", "col-10 contenedor-autos-adjudicados mt-4")

    let foto = document.createElement("img")
    foto.setAttribute("class", "img-fluid")
    foto.setAttribute("alt", "foto del vehiculo 0km")
    foto.setAttribute("src", auto.foto)

    let titulo = document.createElement("h3")
    titulo.innerText = auto.titulo

    let contenedor2 = document.createElement("div")
    contenedor2.setAttribute("class", "d-flex flex-column")


    //! HIJOS DEL CONTENEDOR (5 spans) -------
    let modalidad = document.createElement("span")
    modalidad.setAttribute("class", "contenedor-detalles")
    modalidad.innerText = "● Modalidad: " + auto.detalles.modalidad

    let cuota = document.createElement("span")
    cuota.setAttribute("class", "contenedor-detalles")
    cuota.innerText = "● Cuota: " + auto.detalles.cuotas

    let faltantes = document.createElement("span")
    faltantes.setAttribute("class", "contenedor-detalles")
    faltantes.innerText = "● Cuotas faltantes: " + auto.detalles.restantes

    let avance = document.createElement("span")
    avance.setAttribute("class", "contenedor-detalles")
    avance.innerText = "● Avance: " + auto.detalles.avance

    let anticipo = document.createElement("span")
    anticipo.setAttribute("class", "contenedor-detalles")
    anticipo.innerText = "● Anticipo: " + auto.detalles.anticipo
    //! HIJOS DEL CONTENEDOR (5 spans) -------


    let contenedor3 = document.createElement("div")
    contenedor3.setAttribute("class", "d-flex justify-content-center align-items-center w-75 m-auto mt-4")

    let recibirInfo = document.createElement("a")
    recibirInfo.setAttribute("class", "info-boton")
    recibirInfo.setAttribute("href", "https://api.whatsapp.com/send?phone=5491128188055&text=Hola, quiero mas información sobre la unidad adjudicada " + auto.titulo)
    recibirInfo.innerText = "Recibir asesoramiento"


    //!TODO AGREGO ELEMENTOS A LOS CONTENEDORES
    
    contenedor2.append(modalidad, cuota, faltantes, avance, anticipo)
    contenedor3.append(recibirInfo)

    conedorPadre.append(foto, titulo, contenedor2, contenedor3)
    final.append(conedorPadre)
}

    



//! --------------------  VARIABLES  -------------------- !//
//?  _____________ FILTROS VER MAS _____________
let final = document.querySelector(".contenedor-adjudicados")
let verMas = document.getElementById("verMas")
let tope = 8

//! Se ecarga de delimitar cuando voy a ocultar el boton de "ver mas"
let cantidadMaximaDeProductos = 19
//! ----------

// Funcion que muestra la tarjeta generada dinamicamente "imprimirDetallesVehiculo2"
function tarjetaContenedor2(objeto){
    for(let i = 0; i < tope && i < objeto.length; i++){
        imprimirDetallesVehiculo2(objeto[i]);
    }
}

// Funcion que genera el "Ver mas"
verMas.addEventListener("click", function(){

    if(articulos.length > tope) {
        tope += 5
        if (cantidadMaximaDeProductos < tope) {
            verMas.style.display = "none"
        }
    } 
    final.innerHTML = ""
    tarjetaContenedor2(articulos)
})

document.addEventListener("DOMContentLoaded", function(){
    // Se encarga de mostrar cada tarjeta de vehiculo
    tarjetaContenedor2(articulos) 
})