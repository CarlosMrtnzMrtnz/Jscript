// alert("alert")
console.log("Hello World!");


//------- Declarar variables y tipos de datos ----

const pi = 3.1416

// pi = 5 error no puedo volver asignar valor a una constante
console.log(pi);
let nombre = "Fuancho "
let apellido = "Martinez'' Martinez"
const nombreComple = nombre +  apellido

// nombreCompleto = "CArlos "
// console.log(nombreCompleto);

let edad = nombre + " " + apellido

console.log(edad)
edad = 50
edad = `${nombre} ${apellido} "tiene' ${edad} años
de nacido
`
console.log(edad)

let number = 2025
let buleano = false
let nullo = null
let indefinido 
nombre = 'Fonceca'
console.log(typeof indefinido)
console.log(typeof nullo)
console.log(typeof buleano)
console.log(typeof number)
console.log(typeof nombre)


// --------------- Operadores aritmeticos -------

// ---- suma

let numOne = 4
let numTwo = "4"

const sumaTotal = numOne.toString() + parseInt(numTwo)

console.log(sumaTotal);
console.log(numOne == numTwo);
console.log(numOne === numTwo);
console.log("********************");

console.log(numOne !== numTwo);
// console.log(numOne === numTwo);

numOne = 9.9

console.log(parseInt(numOne));

// ---- Resta

numOne = 5
numTwo = 11

let resta =  numOne - numTwo
console.log(resta);

// ---- Multiplicacion --

let Multiplicacion = numOne * numTwo
console.log(Multiplicacion)


// ---Division ---

let Division = numOne / numTwo
console.log(Division);

// --- Resto ---

let resto = 6 % 2

console.log(resto);
// --------------------------
 resta++

console.log(++resta);
console.log(--resta);


resta += 5
console.log(resta);

resta -= 5
// resta = resta - 5 ---->igual al anterior
console.log(resta);


console.log("-----------Multiplicacion-------");
console.log(Multiplicacion);

Multiplicacion = Multiplicacion * 2
Multiplicacion *= 2
console.log(Multiplicacion);

console.log(Division);

Division = Division / 0.25
Division /= 0.5
console.log(Division);

// ------------------

if (!(resta == -6)) {
    console.log("entro en el bloque 'if' quiere decir que esto es verdadero");
    
} else if(!(numTwo == 11) ) {
    console.log("entro en el else if")

} else {
    console.log("entro en el bloque 'else' quiere decir que esto es falso");
}

// ---- mayor y menor 
console.log("---- mayor y menor ");


console.log(numOne < numTwo);
console.log(numOne > numTwo);


console.log(numOne <= 5);
console.log(numOne >= 5);

if ((true && true ) || (false && true)   ) {
    console.log("probando operador && 'IF'");
    
} else {
        console.log("probando operador && 'ELSE '");

}
if ( (false || true) && true) {
    console.log("probando operador || 'IF'");
    
} else {
        console.log("probando operador || 'ELSE '");
}
let text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum reiciendis ipsam similique quo itaque dignissimos distinctio, facere vitae, temporibus vero eveniet laboriosam esse quas nemo voluptates aut labore id delectus.sdfghjklñ{asdftgyjmhtuikjhgu7uuh"
console.log("ALPHABET".toLowerCase())
console.log("alpaha".toUpperCase())

console.log(text.length-1)
console.log(text[text.length-1]);


// let ingresoNombre = prompt("Ingresa tu nombre")
// let ingresoApellido = prompt("Ingresa tu Apellido")

// let a = `Biwnvenido ${ingresoNombre} ${ingresoApellido} a nuetra pagina`
// console.log(a);
//  let numO = parseInt(prompt("ingrese numero"))
//  let numT = parseInt(prompt("ingrese numero"))
// let result = numO + numT
// console.log(`sumaste ${numO} con ${numT} y el resultado fue ${result}`);
// alert(`sumaste ${numO} con ${numT} y el resultado fue ${result}`)


// let age = prompt("ingrese su edad")


// let sexo =""
// if (age >= 18) {
//         sexo = prompt("ingrese su sexo 'M' o 'F'")
//         if (sexo == "M") {
//             sexo = "Eres Hombre"
//         console.log("Eres Mayor de edad y eres Hombre");
        
//         } else if( sexo == "F") {
//                         sexo = "Eres Mujer"
//         console.log("Eres Mayor de edad y eres Mujer");
//         } else {
//             console.log("ingresa un sexo no binario");
            
//         }
// } else {
//        console.log("Menor de edad");
// }

// console.log(sexo);

// Solicita una nota (de 0 a 10) e indica si es "Insuficiente", "Suficiente", "Bien", "Notable" o "Sobresaliente":

// Rango 0 a 5 = "Insuficiente", mayor que 5 a 6 = "Suficiente", mayor que 6 a 7 = "Bien"
// mayor que 7 a 9 = "Notable" mayor que 9 = "Sobresaliente"


// calcular el descunto segun cantidad de la compra; el usuario debe ingresar la cantidad del producto a comprar y el precio del producto es 500, si lantidad es 10 a 20 hacer descuento del 10% mayor a 20 hacer descuento del 20%, mostrar cantidad de productos, precio total, descunto y valor a pagar

    // let precio = 500
    // let descuento = 0
    // let cantidad = parseInt(prompt("Ingrese la cantidad de productos"))

    // if (cantidad >= 1 ) {
    //     if (cantidad >= 10 && cantidad <= 20 ) {
    //         console.log(`Cantidad: ${cantidad}, Precio total: ${cantidad * precio}, descuento del 10% : ${(cantidad * precio) * 0.1 }, total a pagar: ${(cantidad * precio) * .9}`);
            
    //     } else if (cantidad <= 9) {
    //         console.log(`Cantidad: ${cantidad}, Precio total: ${cantidad * precio}, No tiene descuento 1, total a pagar: ${cantidad * precio}`);
    //     }  else {
    //             console.log(`Cantidad: ${cantidad}, Precio total: ${cantidad * precio}, descuento del 20% : ${(cantidad * precio) * 0.2 }, total a pagar: ${(cantidad * precio) * .8}`);
    //     }
    // } else {
    //     console.log("Ingresa una cantidad igual o mayor a 1");
    // }



// el usuario debe ingresar una cantidad para ser retirada del cajero, los valores deben ser múltiplos de 10000, debe advertir si el valor es mayor a la cantidad disponible, si el valor no es valido y debe mostrar el saldo final.

// let saldo = 600000 
// let retiro = parseInt(prompt("Ingrese monto del retiro"))

// if ((retiro <= 600000) && retiro >= 10000 ) {
//     console.log(retiro % 10000);
    
// } else {
//     console.log("Saldo insuficiente")
// }










// -------- Cambio de color ---------
// let cambioColor = document.getElementById("casco")

// let botones = document.querySelectorAll(".btn")

// botones.forEach(element => {
//     element.addEventListener('click', (evento)=> {
//         let valor = evento.target.innerText
//         // console.log(evento.target.innerText);
//         if (valor == "Naranja") {
//             cambioColor.style.color = "#FFCA2C"
//         } else if(valor == "Celeste" ) {
//             cambioColor.style.color = "#0DCAF0"
//         } else {
//             cambioColor.style.color = "#157347"
//         }
//     })
// });


// let color = document.getElementById("R")

// color.addEventListener('input', (evento)=>{
//     console.log(evento.target.value);
//     cambioColor.style.color = evento.target.value
// }
// )


// let array = []
// let persona = {nombre: "Juan", apellido: "Cardenas"}
// array.push(1, 2) // arega al final del array
// array.push("carlos") 
// array.unshift(true) //agrega al inicio del array
// array.pop() // elimina al final del array   
// array.shift() // elimina al inicio del array

// array.push(persona)
// array.push({nombre: "Daniel", apellido: "Rativa"})

// array.splice(2, 0, "Carlos")


// console.log(array[3].apellido)
//  array = [
// {nombre: "Hamburgruesa", precio: 100},
// {nombre: "Pizza", precio: 200},
// {nombre: "perro", precio: 300}
// ]
// for (let I = 0; I < array.length; I++) {
//     const element = array[I];
//     console.log(element.nombre);
    
//     if (element.precio == 200) {
//         console.log(element.precio);
//     }
    
// }



//   
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");

let array = [2, true, "Carlos", {nombre: "Juan", apellido:"Perez", edad: 35, idiomas:["ingles", "español"]}]


console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[3].apellido);
console.log(array[3]["apellido"]);
console.log(array[3].idiomas);
console.log(array[3].idiomas[1]);

console.log("+++++++++++++++++++++++++++++++++{{{{{{{{{{{{{{++++++++++++++++++");

let arraysAnidads = [
                    [2, 4, 5],
                    [8, 5, 6],
                    [10,20,7]
                ]
let suma = 0
for (let i = 0; i < arraysAnidads.length; i++) {
    const element = arraysAnidads[i];
    // console.log(element);
    
    // element = [2, 4, 5, 6] // cuando i = 0
    // element = [8, 5, 6] // cuando i = 1
    // element = [10, 20, 7] // cuando i = 2

    for (let i = 0; i < element.length; i++) {
        const elemento = element[i];
        console.log(elemento);
        suma += elemento
        // elemento = element[0] // = 2
        // elemento = element[1] // = 4
        // elemento = element[2] // = 5
        // elemento = element[3] // = 6
    console.log(`segundo for ${suma}`);

    }
    
}
console.log("-----------------------------------------------------------------------");

// console.log(suma);
// suma = 20
// console.log(suma);
// array = [2, true, "Carlos", {nombre: "Juan", apellido:"Perez", edad: 35, idiomas:["ingles", "español"]}]
// array[3].nombre = "Fuancho"
// // console.log(array[3]);

// delete array[3].apellido
// console.log(array[3]);


const productos = [ 
    {nombre: "Televisor", precio: 300},
        {nombre: "Celular", precio: 200},
        {nombre: "Laptop", precio: 1000},
        {nombre: "Tablet", precio: 150} 
    ];


    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.precio > 200 ) {
            element.precio *= 0.9
        }
    }


    //Tienes una lista de usuarios y necesitas filtrar aquellos que están activos.
	const usuarios = [ 
	    {nombre: "Laura", activo: true},
	    {nombre: "Pedro", activo: false}, 
	    {nombre: "Marta", activo: true},
	    {nombre: "Jorge", activo: false}
];
        let userActivos = []

	    for (let i = 0; i < usuarios.length; i++) {
            const element = usuarios[i];
            if (element.activo == true) {
                userActivos.unshift(element)
            }
        }

        console.log(userActivos);
        

//•	Dado un array de usuarios que contiene su nombre, edad y estado (activo o inactivo), debemos filtrar los usuarios que están activos y luego calcular el promedio de edad de esos usuarios.
console.log("-----------------------------------------------------------------------");

const usuarios2 = [
   {nombre: "Laura", edad: 30, activo: true},
   {nombre: "Pedro", edad: 25, activo: false},
   {nombre: "Marta", edad: 28, activo: true},
   {nombre: "Jorge", edad: 35, activo: false},
   {nombre: "Ana", edad: 40, activo: true} 
  ];

  let arrayActivos = []
  let sumaEdades = 0
for (let i = 0; i < usuarios2.length; i++) {
    const element = usuarios2[i];
        if (element.activo == true) {
            arrayActivos.push(element)
        }



}

        for (let i = 0; i < arrayActivos.length; i++) {
            const element = arrayActivos[i];
                sumaEdades += element.edad
                console.log(element.edad);
                
        }

console.log(arrayActivos);
console.log(sumaEdades );
console.log(sumaEdades / arrayActivos.length);


// Identificar si un objeto tiene o no una propiedad, saber todos las propiedades y valores

let user = {nombre: "Laura", edad: 30, activo: true, idiomas: ["ingles", "español"]}

console.log(user.hasOwnProperty("apellido")); // hasOwnProperty() recibe un valor y entrega un booleano si esta o no la propiedad

console.log(Object.keys(user)); // entrega todas las propiedades del objeto en una array
console.log(Object.values(user)); // entrega todas las valores de las propiedades en un array
console.log(Object.entries(user)); // entrega propiedad y valor en una array independiente para cada propiedad

user.apellido = "Martinez" // de esta manera se agrega una propiedad si no existe o edita si ya existe



// function consola () {
//     let hola = "hello worl"
//     if (hola =="hello world") {
//         return hola
//     }
//     return console.log("holita");

// }

// console.log(consola());
// console.log(consola());

// let pron = parseInt(prompt("ingrese numero a sumar con 10"))
// let pron2 = parseInt(prompt("ingrese numero a sumar con 10"))
// // suma = (a, b) => a + b arrow funtion en una linea
// const sumaSum = (a, b) => {
//     a + b
//  }
// console.log(sumaSum(pron, pron2));
// console.log(suma(pron));

// console.log(suma(20));
// console.log(suma(10));
// console.log(suma(80));


// const usuarios2 = [
//    {nombre: "Laura", edad: 30, activo: true},
//    {nombre: "Pedro", edad: 25, activo: false},
//    {nombre: "Marta", edad: 28, activo: true},
//    {nombre: "Jorge", edad: 35, activo: false},
//    {nombre: "Ana", edad: 40, activo: true} 
//   ];

//   let arrayActivos = []
//   let sumaEdades = 0
// for (let i = 0; i < usuarios2.length; i++) {
//     const element = usuarios2[i];
//         if (element.activo == true) {
//             arrayActivos.push(element)
//         }



// }

// migrar ejercio a una funcion 

const descuentos = (array) => {
    let arrayActivos = [] 
    
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
            if (element.activo == true) {
                arrayActivos.push(element) 
            }
    }
    return arrayActivos
}
// Array 1
const usuariosA = [
   {nombre: "Sofía", edad: 22, activo: true},
   {nombre: "Diego", edad: 31, activo: false},
   {nombre: "Valentina", edad: 27, activo: true},
   {nombre: "Carlos", edad: 45, activo: false},
   {nombre: "Gabriela", edad: 38, activo: true}
];

// Array 2
const usuariosB = [
   {nombre: "Andrés", edad: 29, activo: true},
   {nombre: "Patricia", edad: 33, activo: false},
   {nombre: "Sebastián", edad: 24, activo: true},
   {nombre: "Mariana", edad: 41, activo: false},
   {nombre: "Ricardo", edad: 36, activo: true}
];

// Array 3
const usuariosC = [
   {nombre: "Camila", edad: 26, activo: true},
   {nombre: "Fernando", edad: 39, activo: false},
   {nombre: "Lucía", edad: 30, activo: true},
   {nombre: "Oscar", edad: 34, activo: false},
   {nombre: "Paula", edad: 42, activo: true}
];
console.log(descuentos(usuariosA), descuentos(usuariosB), descuentos(usuariosC));
let covertir = JSON.stringify(usuariosC)
console.log(` ${covertir}`);
let x = JSON.parse(covertir)

console.log(`${x}`);

console.log("+++++++++++++++++++++++++++++++++++++++++");

console.log(descuentos(x));


// ejercicio de matrix de "*"


const matrix = (columnas, filas)=> {
    let cols = ""
    let rows = ""

    for (let i = 0; i < columnas; i++) {
    cols += "*"
    }
    for (let i = 0; i < filas; i++) {
        rows += cols + "\n"
    }
    console.log(rows);
}

// let columnas = parseInt(prompt("numeroo de columnas"))
// let filas = parseInt(prompt("numeroo de filas"))
// matrix(columnas,filas)

const mtx = (cols, rows) => {
    let array = []
    for (let i= 0; i< cols; i++){
        let dato = parseInt(prompt("ingresa dato del array"))
        array.push(dato)
    }

    console.log(array);
    
}
// let columns = parseInt(prompt("ingrese las columnas"))
mtx(columns)