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
