//! --------------------  OBEJTOS  -------------------- !//
//? 1) Defino el constructor para crear dinamicamente cada auto.

class Vehiculos {
    constructor(fotos, precio, marca, modelo, id, detalles, especificaciones){
        this.fotos = fotos
        this.precio = precio
        this.marca = marca
        this.modelo = modelo
        this.id = id
        this.detalles = detalles
        this.especificaciones = especificaciones
    }
} 

class Vehiculos_fotos {
    constructor(completo, lateral){
        this.completo = completo
        this.lateral = lateral
    }
}

class Vehiculos_detalle {
    constructor(combustible, caja, puertas, plan, cuotas, unidad){
        this.combustible = combustible
        this.caja = caja
        this.puertas = puertas
        this.plan = plan
        this.cuotas = cuotas
        this.unidad = unidad
    }
}


//? 2) Creo cada vehiculo condistintos nombres.
// ______ VEHICULOS DE FIAT:
let miVehiculo = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto1.png", "../imgs/index/section4/fiat6.png"), "21.400.000", "fiat", "Cronos Drive 1.3", "cronos", new Vehiculos_detalle("nafta", "automatica", 5, "100", 221500, "auto"), detalle);
let miVehiculo2 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto2.png", "../imgs/index/section4/fiat5.png"), "21.400.000", "fiat", "Cronos Drive 1.3", "cronos", new Vehiculos_detalle("nafta", "automatica", 5, "70", 181000, "auto"), detalle2);
let miVehiculo3 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto3.png", "../imgs/index/section4/fiat4.png"), "23.800.000", "fiat", "Cronos Precision 1.3 CVT", "cronos", new Vehiculos_detalle("nafta", "automatica", 5, "60", 257000, "auto"), detalle3);
let miVehiculo4 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto4.png", "../imgs/index/section4/fiat3.png"), "27.300.000", "fiat", "Toro Freedom 1.8 AT6", "toro", new Vehiculos_detalle("nafta", "automatica", 4, "60", 350000, "camioneta"), detalle4);
let miVehiculo5 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto5.png", "../imgs/index/section4/fiat1.png"), "24.300.000", "fiat", "Pulse Drive 1.3", "pulse", new Vehiculos_detalle("nafta", "automatica", 5, "70", 343000, "auto"), detalle5);
let miVehiculo6 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto6.png", "../imgs/index/section4/fiat2.png"), "20.800.000", "fiat", "Strada Freedom 1.4", "strada", new Vehiculos_detalle("nafta", "manual", 4, "70", 298000, "camioneta"), detalle6);
let miVehiculo7 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto7.png", "../imgs/index/section4/fiat7.png"), "17.400.000", "fiat", "Fiorino Endurance 1.4", "fiorino", new Vehiculos_detalle("nafta", "manual", 4, "70", 250000, "utilitario"), detalle7);

// ______ VEHICULOS DE VOLKSWAGEN:
let miVehiculo8 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto8.png", "../imgs/index/section4/vw3.png"), "22.035.000", "vw", "Virtus MSI 1.6 Trendline", "virtus", new Vehiculos_detalle("nafta", "manual", 5, "100", 310000, "auto"), detalle8);
let miVehiculo9 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto9.png", "../imgs/index/section4/vw2.png"), "33.700.000", "vw", "Amarok DC Trendline 4x2 2.0", "amarok", new Vehiculos_detalle("diesel", "manual", 4, "60", 355000, "camioneta"), detalle9);
let miVehiculo10 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto10.png", "../imgs/index/section4/vw1.png"), "38.380.000", "vw", "Taos Comfortline 250 TSI AT", "taos", new Vehiculos_detalle("nafta", "automatica", 5, "60", 405000, "auto"), detalle10);
let miVehiculo11 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto11.png", "../imgs/index/section4/vw4.png"), "22.900.000", "vw", "Saveiro Cab Simple Trendline", "saveiro", new Vehiculos_detalle("nafta", "manual", 2, "80", 270000, "camioneta"), detalle11);
let miVehiculo12 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto12.png", "../imgs/index/section4/vw5.png"), "19.570.000", "vw", "Polo Track MSI MT", "polo", new Vehiculos_detalle("nafta", "manual", 5, "80", 234000, "auto"), detalle12);

// ______ VEHICULOS DE PEUGEOT:
let miVehiculo13 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto13.png", "../imgs/index/section4/peugeot1.png"), "21.060.000", "peugeot", "Active PK AM24 (plan easy)", "208", new Vehiculos_detalle("nafta", "automatica", 5, "70", 146000, "auto"), detalle13);
let miVehiculo14 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto14.png", "../imgs/index/section4/peugeot2.png"), "20.350.000", "peugeot", "Partner Confort HDI", "partner", new Vehiculos_detalle("diesel", "manual", 5, "70", 218000, "utilitario"), detalle14);

// ______ VEHICULOS DE RENAULT:
let miVehiculo15 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto25.png", "../imgs/index/section4/r1.png"), "22.438.850", "renault", "Sandero Life", "sandero", new Vehiculos_detalle("nafta", "manual", 5, "100", 186000, "auto"),detalle15);
let miVehiculo16 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto26.png", "../imgs/index/section4/r2.png"), "22.000.000", "renault", "Logan Life 1.6", "logan", new Vehiculos_detalle("nafta", "manual", 5, "100", 186000, "auto"), detalle16);
let miVehiculo17 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto28.png", "../imgs/index/section4/r3.png"), "24.400.000", "renault", "Stepway Intens", "sandero", new Vehiculos_detalle("nafta", "automatica", 5, "100", 200000, "auto"), detalle17);
let miVehiculo18 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto29.png", "../imgs/index/section4/r4.png"), "30.650.000", "renault", "Kangoo II Express confort Sce", "kangoo", new Vehiculos_detalle("nafta", "manual", 3, "100", 255000, "utilitario"), detalle18);
let miVehiculo19 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto30.png", "../imgs/index/section4/r5.png"), "27.850.000", "renault", "Duster Intens 1.6", "duster", new Vehiculos_detalle("nafta", "manual", 5, "100", 310000, "auto"), detalle19);
let miVehiculo20 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto32.png", "../imgs/index/section4/r6.png"), "38.450.000", "renault", "Alaskan Confort 2.3 ", "alaskan", new Vehiculos_detalle("diesel", "manual", 4, "100", 390000, "camioneta"), detalle20);
let miVehiculo21 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto31.png", "../imgs/index/section4/r7.png"), "27.700.000", "renault", "Kangoo II Express Confort 1.6", "kangoo", new Vehiculos_detalle("nafta", "manual", 3, "70", 210000, "utilitario"), detalle21);
let miVehiculo22 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto33.png", "../imgs/index/section4/r8.png"), "37.630.000", "renault", "Oroch Emotion 1.6 SCe 114 2WD", "oroch", new Vehiculos_detalle("nafta", "manual", 4, "70", 340000, "camioneta"), detalle22);
let miVehiculo23 = new Vehiculos(new Vehiculos_fotos("../imgs/catalogo/foto27.png", "../imgs/index/section4/r9.png"), "22.438.850", "renault", "Sandero Life", "sandero", new Vehiculos_detalle("nafta", "manual", 5, "60", 147000, "auto"), detalle23);


//? 3) Agrego ese vehiculo a una constante que almacene todos mis vehiculos.
const productos = [
    miVehiculo,
    miVehiculo2,
    miVehiculo3,
    miVehiculo4,
    miVehiculo5,
    miVehiculo6,
    miVehiculo7,
    miVehiculo8,
    miVehiculo9,
    miVehiculo10,
    miVehiculo11,
    miVehiculo12,
    miVehiculo13,
    miVehiculo14,
    miVehiculo15,
    miVehiculo16,
    miVehiculo17,
    miVehiculo18,
    miVehiculo19,
    miVehiculo20,
    miVehiculo21,
    miVehiculo22,
    miVehiculo23,
]