//! --------------------  OBJETOS  -------------------- !//
//? OBJETOS PARA ARMAR LA FICHA TECNICA DE CADA UNIDAD

class detalles {
    constructor(especificaciones, confort, informacion, rendimiento, entretenimiento, seguridad, exterior, fondo){
        this.especificaciones = especificaciones
        this.confort = confort
        this.informacion = informacion
        this.rendimiento = rendimiento
        this.entretenimiento = entretenimiento
        this.seguridad = seguridad
        this.exterior = exterior
        this.fondo = fondo
    }
}

class especificaciones {
    constructor(marca, modelo, año, versión, combustibleTipo, puertas, transmisión, motor, carroceria, km){
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.versión = versión
        this.combustibleTipo = combustibleTipo
        this.puertas = puertas
        this.transmisión = transmisión
        this.motor = motor
        this.carroceria = carroceria
        this.km = km
    }
}

class confort {
    constructor(aire, compu, sensorLLuvia, portaVasos){
        this.aire = aire
        this.compu = compu
        this.sensorLLuvia = sensorLLuvia
        this.portaVasos = portaVasos
    }
}

class informacion {
    constructor(direccion, alarma){
        this.direccion = direccion
        this.alarma = alarma
    }
}

class rendimiento {
    constructor(traccion, capacidadPersonas, potencia, dimensiones, distanciaEjes, capacidadTanque, valvulasCilindro){
        this.traccion = traccion
        this.capacidadPersonas = capacidadPersonas
        this.potencia = potencia
        this.dimensiones = dimensiones
        this.distanciaEjes = distanciaEjes
        this.capacidadTanque = capacidadTanque
        this.valvulasCilindro = valvulasCilindro
    }
}

class seguridad {
    constructor(freno, airbag, traccion){
        this.freno = freno
        this.airbag = airbag
        this.traccion = traccion
    }
}

class exterior {
    constructor(llantas){
        this.llantas = llantas
    }
}

class entretenimiento {
    constructor(radio, android, apple){
        this.radio = radio
        this.android = android
        this.apple = apple
    }
}

class fondo {
    constructor(a, b, c, d, e, f, g, h, principal){
        this.a = a
        this.b = b
        this.c = c
        this.d = d
        this.e = e
        this.f = f
        this.g = g
        this.h = h
        this.principal = principal
    }
}


//! --------------------  VARIABLES  -------------------- !//

//? Creo cada vehiculo condistintos nombres.
// ______ VEHICULOS DE FIAT:

//! CRONOS DRIVE
let detalle = new detalles(
    new especificaciones("fiat", "cronos", "2024", "Drive 1.3", "nafta", "5", "manual", "1.3", "sedan", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("electrica", "si"), 
    new rendimiento("delantera", "5", "99 hp", "4364 mm x 1508 mm x 1724 mm", "2521 mm", "48 L", "2"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/cronos1/1.png", "../imgs/detalles/cronos1/2.png", "../imgs/detalles/cronos1/3.png", "../imgs/detalles/cronos1/4.webp", "../imgs/detalles/cronos1/5.webp", "../imgs/detalles/cronos1/6.webp", "../imgs/detalles/cronos1/7.webp", "../imgs/detalles/cronos1/8.webp", "../imgs/detalles/cronos1/principal.png")
);
//! CRONOS PRECISION
let detalle2 = new detalles(
    new especificaciones("fiat", "cronos", "2024", "Precision CVT 1.3", "nafta", "5", "automatica", "1.3", "sedan", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("electrica", "si"), 
    new rendimiento("delantera", "5", "99 hp", "4364 mm x 1508 mm x 1724 mm", "2521 mm", "48 L", "2"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/cronos2/1.png", "../imgs/detalles/cronos2/2.png", "../imgs/detalles/cronos2/3.png", "../imgs/detalles/cronos2/4.png", "../imgs/detalles/cronos2/5.png", "../imgs/detalles/cronos2/6.png", "../imgs/detalles/cronos2/7.webp", "../imgs/detalles/cronos2/8.webp", "../imgs/detalles/cronos2/principal.png")
);
//! CRONOS DRIVE
let detalle3 = new detalles(
    new especificaciones("fiat", "cronos", "2024", "Precision CVT 1.3", "nafta", "5", "automatica", "1.3", "sedan", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("electrica", "si"), 
    new rendimiento("delantera", "5", "99 hp", "4364 mm x 1508 mm x 1724 mm", "2521 mm", "48 L", "2"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/cronos3/1.png", "../imgs/detalles/cronos3/2.png", "../imgs/detalles/cronos3/3.png", "../imgs/detalles/cronos3/4.png", "../imgs/detalles/cronos3/5.png", "../imgs/detalles/cronos3/6.png", "../imgs/detalles/cronos3/7.webp", "../imgs/detalles/cronos3/8.webp", "../imgs/detalles/cronos3/principal.png")
);
//! TORO
let detalle4 = new detalles(
    new especificaciones("fiat", "toro", "2024", "freedom 1.8", "nafta", "4", "automatica", "1.8", "Pick-Up", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("electrica", "si"), 
    new rendimiento("4x2", "5", "130 hp", "4945 mm x 1735 mm x 1845 mm", "2990 mm", "60 L", "4"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/toro/1.png", "../imgs/detalles/toro/2.png", "../imgs/detalles/toro/3.png", "../imgs/detalles/toro/4.png", "../imgs/detalles/toro/5.png", "../imgs/detalles/toro/6.png", "../imgs/detalles/toro/7.png", "../imgs/detalles/toro/8.png", "../imgs/detalles/toro/principal.png")
);
//! PULSE
let detalle5 = new detalles(
    new especificaciones("fiat", "pulse", "2024", "drive gse mt 1.3", "nafta", "5", "manual", "1.3", "suv", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("electrica", "si"), 
    new rendimiento("4x2", "5", "99 hp", "4099 mm x 1547 mm x 1989 mm", "2532 mm", "47 L", "2"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/pulse/1.png", "../imgs/detalles/pulse/2.png", "../imgs/detalles/pulse/3.png", "../imgs/detalles/pulse/4.png", "../imgs/detalles/pulse/5.png", "../imgs/detalles/pulse/6.png", "../imgs/detalles/pulse/7.png", "../imgs/detalles/pulse/8.png", "../imgs/detalles/pulse/principal.png")
);
//! STRADA
let detalle6 = new detalles(
    new especificaciones("fiat", "strada", "2024", "Freedom Cd 1.4", "nafta", "3", "manual", "1.4", "Pick-Up", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Hidráulica", "si"), 
    new rendimiento("Delantera", "5", "85 hp", "4474 mm x 1554 mm x 1950 mm", "2737 mm", "55 L", "2"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/strada/1.png", "../imgs/detalles/strada/2.png", "../imgs/detalles/strada/3.png", "../imgs/detalles/strada/4.png", "../imgs/detalles/strada/5.png", "../imgs/detalles/strada/6.png", "../imgs/detalles/strada/7.png", "../imgs/detalles/strada/8.png", "../imgs/detalles/strada/principal.png")
);
//! FIORINO
let detalle7 = new detalles(
    new especificaciones("fiat", "fiorino", "2024", "endurance 1.4", "nafta", "3", "manual", "1.4", "Furgón", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Hidráulica", "si"), 
    new rendimiento("Delantera", "2", "85 hp", "1888 mm x 1284 mm x 1086 mm", "1174 mm", "58 L", "2"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/fiorino/1.png", "../imgs/detalles/fiorino/2.png", "../imgs/detalles/fiorino/3.png", "../imgs/detalles/fiorino/4.png", "../imgs/detalles/fiorino/5.png", "../imgs/detalles/fiorino/6.png", "../imgs/detalles/fiorino/7.png", "../imgs/detalles/fiorino/8.png", "../imgs/detalles/fiorino/principal.png")
);



//! VIRTUS
let detalle8 = new detalles(
    new especificaciones("vw", "virtus", "2024", "MSI 1.6 Trendline", "nafta", "5", "manual", "1.6", "sedan", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Hidráulica", "si"), 
    new rendimiento("Delantera", "5", "110 hp", "4480 mm x 1468 mm x 1751 mm", "2650 mm", "50 L", "4"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/virtus/1.png", "../imgs/detalles/virtus/2.png", "../imgs/detalles/virtus/3.png", "../imgs/detalles/virtus/4.png", "../imgs/detalles/virtus/5.png", "../imgs/detalles/virtus/6.png", "../imgs/detalles/virtus/7.png", "../imgs/detalles/virtus/8.png", "../imgs/detalles/virtus/principal.png")
);
//! AMAROK
let detalle9 = new detalles(
    new especificaciones("vw", "amarok", "2024", "DC Trendline 4x2 2.0", "diesel", "4", "manual", "2.0", "sedan", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Hidráulica", "si"), 
    new rendimiento("4x2", "5", "180 hp", "5254 mm x 1834 mm x 1944 mm", "3095 mm", "80 L", "4"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/amarok/1.png", "../imgs/detalles/amarok/2.png", "../imgs/detalles/amarok/3.png", "../imgs/detalles/amarok/4.png", "../imgs/detalles/amarok/5.png", "../imgs/detalles/amarok/6.png", "../imgs/detalles/amarok/7.png", "../imgs/detalles/amarok/8.png", "../imgs/detalles/amarok/principal.png")
);
//! TAOS
let detalle10 = new detalles(
    new especificaciones("vw", "taos", "2024", "Comfortline 250 TSI AT", "nafta", "5", "automatica", "1.4", "SUV", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Eléctrica", "si"), 
    new rendimiento("4x2", "5", "150 hp", "4468 mm x 1624 mm x 1841 mm", "2651 mm", "50 L", "4"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/taos/1.png", "../imgs/detalles/taos/2.png", "../imgs/detalles/taos/3.png", "../imgs/detalles/taos/4.png", "../imgs/detalles/taos/5.png", "../imgs/detalles/taos/6.png", "../imgs/detalles/taos/7.png", "../imgs/detalles/taos/8.png", "../imgs/detalles/taos/principal.png")
);
//! SAVEIRO
let detalle11 = new detalles(
    new especificaciones("vw", "saveiro", "2024", "Cab Simple Trendline", "nafta", "2", "manual", "1.6", "Pick-Up", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Hidráulica", "si"), 
    new rendimiento("Delantera", "2", "110 hp", "4474 mm x 1520 mm x 1890 mm", "2753 mm", "55 L", "2"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/saveiro/1.png", "../imgs/detalles/saveiro/2.png", "../imgs/detalles/saveiro/3.png", "../imgs/detalles/saveiro/4.png", "../imgs/detalles/saveiro/5.png", "../imgs/detalles/saveiro/6.png", "../imgs/detalles/saveiro/7.png", "../imgs/detalles/saveiro/8.png", "../imgs/detalles/saveiro/principal.png")
);
//! POLO
let detalle12 = new detalles(
    new especificaciones("vw", "polo", "2024", "Track MSI MT", "nafta", "5", "manual", "1.6", "Hatchback", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Eléctrica", "si"), 
    new rendimiento("Delantera", "5", "110 hp", "4384 mm x 1465 mm x 1699 mm", "2552 mm", "50 L", "4"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/polo/1.png", "../imgs/detalles/polo/2.png", "../imgs/detalles/polo/3.png", "../imgs/detalles/polo/4.png", "../imgs/detalles/polo/5.png", "../imgs/detalles/polo/6.png", "../imgs/detalles/polo/7.png", "../imgs/detalles/polo/8.png", "../imgs/detalles/polo/principal.png")
);



//! 208
let detalle13 = new detalles(
    new especificaciones("peugeot", "208", "2024", "Active PK AM24", "nafta", "5", "manual", "1.6", "Hatchback", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Asistida", "si"), 
    new rendimiento("Delantera", "5", "115 hp", "4075 mm x 1453 mm x 1738 mm", "2538 mm", "47 L", "4"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/208/1.png", "../imgs/detalles/208/2.png", "../imgs/detalles/208/3.png", "../imgs/detalles/208/4.png", "../imgs/detalles/208/5.png", "../imgs/detalles/208/6.png", "../imgs/detalles/208/7.png", "../imgs/detalles/208/8.png", "../imgs/detalles/208/principal.png")
);
//! PARTNER
let detalle14 = new detalles(
    new especificaciones("peugeot", "partner", "2024", "Hdi Furgon Confort", "diesel", "3", "manual", "1.6", "Furgón", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Hidráulica", "si"), 
    new rendimiento("Delantera", "2", "92 hp", "4137 mm x 1800 mm x 1960 mm", "2693 mm", "55 L", "2"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/partner/1.png", "../imgs/detalles/partner/2.png", "../imgs/detalles/partner/3.png", "../imgs/detalles/partner/4.png", "../imgs/detalles/partner/5.png", "../imgs/detalles/partner/6.png", "../imgs/detalles/partner/7.png", "../imgs/detalles/partner/8.png", "../imgs/detalles/partner/principal.png")
);


//! SANDERO
let detalle15 = new detalles(
    new especificaciones("renault", "sandero", "2024", "Sandero Life", "nafta", "5", "manual", "1.6", "Hatchback", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Asistida", "si"), 
    new rendimiento("Delantera", "5", "115 hp", "4060 mm x 1536 mm x 1733 mm", "2590 mm", "50 L", "4"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/sandero1/1.png", "../imgs/detalles/sandero1/2.png", "../imgs/detalles/sandero1/3.png", "../imgs/detalles/sandero1/4.png", "../imgs/detalles/sandero1/5.png", "../imgs/detalles/sandero1/6.png", "../imgs/detalles/sandero1/7.png", "../imgs/detalles/sandero1/8.png", "../imgs/detalles/sandero1/principal.png")
);
//! LOGAN
let detalle16 = new detalles(
    new especificaciones("renault", "logan", "2024", "Life 1.6", "nafta", "5", "manual", "1.6", "Sedán", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Hidráulica", "si"), 
    new rendimiento("Delantera", "5", "115 hp", "4350 mm x 1529 mm x 1733 mm", "2635 mm", "50 L", "4"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/logan/1.png", "../imgs/detalles/logan/2.png", "../imgs/detalles/logan/3.png", "../imgs/detalles/logan/4.png", "../imgs/detalles/logan/5.png", "../imgs/detalles/logan/6.png", "../imgs/detalles/logan/7.png", "../imgs/detalles/logan/8.png", "../imgs/detalles/logan/principal.png")
);
//! STEPWAY
let detalle17 = new detalles(
    new especificaciones("renault", "sandero", "2024", "Stepway Intens", "nafta", "5", "automatica", "1.6", "Hatchback", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Hidráulica", "si"), 
    new rendimiento("Delantera", "5", "115 hp", "4066 mm x 1559 mm x 1761 mm", "2590 mm", "50 L", "4"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/stepway/1.png", "../imgs/detalles/stepway/2.png", "../imgs/detalles/stepway/3.png", "../imgs/detalles/stepway/4.png", "../imgs/detalles/stepway/5.png", "../imgs/detalles/stepway/6.png", "../imgs/detalles/stepway/7.png", "../imgs/detalles/stepway/8.png", "../imgs/detalles/stepway/principal.png")
);
//! KANGOO
let detalle18 = new detalles(
    new especificaciones("renault", "Kangoo", "2024", "Express confort 5A 1.6 Sce", "nafta", "3", "automatica", "1.6", "Hatchback", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Hidráulica", "si"), 
    new rendimiento("Delantera", "2", "115 hp", "4010 mm x 1860 mm x 1672 mm", "2600 mm", "50 L", "4"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/kangoo2/1.png", "../imgs/detalles/kangoo2/2.png", "../imgs/detalles/kangoo2/3.png", "../imgs/detalles/kangoo2/4.png", "../imgs/detalles/kangoo2/5.png", "../imgs/detalles/kangoo2/6.png", "../imgs/detalles/kangoo2/7.png", "../imgs/detalles/kangoo2/8.png", "../imgs/detalles/kangoo2/principal.png")
);
//! DUSTER
let detalle19 = new detalles(
    new especificaciones("renault", "duster", "2024", "Intens 1.6", "nafta", "5", "manual", "1.6", "SUV", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Hidráulica", "si"), 
    new rendimiento("4x2", "5", "110 hp", "4329 mm x 1683 mm x 1822 mm", "2674 mm", "50 L", "4"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/duster/1.png", "../imgs/detalles/duster/2.png", "../imgs/detalles/duster/3.png", "../imgs/detalles/duster/4.png", "../imgs/detalles/duster/5.png", "../imgs/detalles/duster/6.png", "../imgs/detalles/duster/7.png", "../imgs/detalles/duster/8.png", "../imgs/detalles/duster/principal.png")
);
//! ALASKAN
let detalle20 = new detalles(
    new especificaciones("renault", "alaskan", "2024", "Confort Mt 4x2", "diesel", "4", "manual", "2.3", "Pick-Up", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Hidráulica", "si"), 
    new rendimiento("4x2", "5", "160 hp", "5230 mm x 1775 mm x 1850 mm", "3200 mm", "80 L", "4"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/alaskan/1.png", "../imgs/detalles/alaskan/2.png", "../imgs/detalles/alaskan/3.png", "../imgs/detalles/alaskan/4.png", "../imgs/detalles/alaskan/5.png", "../imgs/detalles/alaskan/6.png", "../imgs/detalles/alaskan/7.png", "../imgs/detalles/alaskan/8.png", "../imgs/detalles/alaskan/principal.png")
);
//! KANGOO
let detalle21 = new detalles(
    new especificaciones("renault", "Kangoo", "2024", "Express confort 5A 1.6 Sce", "nafta", "3", "automatica", "1.6", "Hatchback", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Hidráulica", "si"), 
    new rendimiento("Delantera", "2", "115 hp", "4010 mm x 1860 mm x 1672 mm", "2600 mm", "50 L", "4"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/Kangoo1/1.png", "../imgs/detalles/Kangoo1/2.png", "../imgs/detalles/Kangoo1/3.png", "../imgs/detalles/Kangoo1/4.png", "../imgs/detalles/Kangoo1/5.png", "../imgs/detalles/Kangoo1/6.png", "../imgs/detalles/Kangoo1/7.png", "../imgs/detalles/Kangoo1/8.png", "../imgs/detalles/Kangoo1/principal.png")
);
//! OROCH
let detalle22 = new detalles(
    new especificaciones("renault", "oroch", "2024", "Emotion 1.6 SCe 114 2WD", "nafta", "4", "manual", "1.6", "SUV", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Hidráulica", "si"), 
    new rendimiento("4x2", "5", "115 hp", "4719 mm x 1695 mm x 1834 mm", "2829 mm", "45 L", "4"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/oroch/1.png", "../imgs/detalles/oroch/2.png", "../imgs/detalles/oroch/3.png", "../imgs/detalles/oroch/4.png", "../imgs/detalles/oroch/5.png", "../imgs/detalles/oroch/6.png", "../imgs/detalles/oroch/7.png", "../imgs/detalles/oroch/8.png", "../imgs/detalles/oroch/principal.png")
);
//! SANDERO
let detalle23 = new detalles(
    new especificaciones("renault", "sandero", "2024", "Sandero Life", "nafta", "5", "manual", "1.6", "Hatchback", "0km"), 
    new confort("si", "si", "si", "si"), 
    new informacion("Asistida", "si"), 
    new rendimiento("Delantera", "5", "115 hp", "4060 mm x 1536 mm x 1733 mm", "2590 mm", "50 L", "4"), 
    new entretenimiento("si", "si", "si"), 
    new seguridad("si", "si", "si"), 
    new exterior("si"),
    new fondo ("../imgs/detalles/sandero2/1.png", "../imgs/detalles/sandero2/2.png", "../imgs/detalles/sandero2/3.png", "../imgs/detalles/sandero2/4.png", "../imgs/detalles/sandero2/5.png", "../imgs/detalles/sandero2/6.png", "../imgs/detalles/sandero2/7.png", "../imgs/detalles/sandero2/8.png", "../imgs/detalles/sandero2/principal.png")
);



