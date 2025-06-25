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

let arraysAnidads = [[2, 4, 5, 6], [8, 5, 6], [10, 20, 7 ]]
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
array = [2, true, "Carlos", {nombre: "Juan", apellido:"Perez", edad: 35, idiomas:["ingles", "español"]}]
array[3].nombre = "Fuancho"
// console.log(array[3]);

delete array[3].apellido
console.log(array[3]);
