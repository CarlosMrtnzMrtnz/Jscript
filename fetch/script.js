const url = "https://rickandmortyapi.com/api/character"
let data = "1"

fetch(url)
.then((response)=> response.json())
.then((dataApi) => {
    data = dataApi
}  )
.catch((error) =>  console.log(error))

// getElementById(),
// getElementsByClassName(),
// getElementsByTagName(),
// querySelector()
// querySelectorAll()

let getPorID = document.getElementById("one")

console.log(getPorID.innerHTML);

getPorID.innerHTML = "Fuancho"
console.log(getPorID);
one.innerHTML = "ss"

let getPorClass = document.getElementsByClassName("box")

console.log("++getElementsByClassName()++");
console.log(getPorClass);

let getPorTag = document.getElementsByTagName("button")

console.log("++getElementsByTagName()++");
console.log(getPorTag);

for (let i = 0; i < getPorTag.length; i++) {
    const element = getPorTag[i];
    element.style.backgroundColor = "red"
    // element.innerHTML = "enviar"
    if (element.id == "two" || element.id == "three") {
        element.setAttribute("class", "btn")
    }


}

let getByQuery = document.querySelector("h1")

console.log(getByQuery);

let getByQueryAll = document.querySelector(".box")

console.log(getByQueryAll);

let body = document.body

let input = document.getElementById("input")
console.log(input);

input.addEventListener("input", (evento)=> {
    body.style.backgroundColor = evento.target.value
})



let color = document.getElementById("red")
let colorTwo = document.getElementById("green")
let colorThree = document.getElementById("blue")
    let rojo 
    let verde
    let azul

color.addEventListener('input', (evento)=> {
    // body.style.backgroundColor = evento.target.value
     rojo = evento.target.value
     verde = green.value
     azul = blue.value

    body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`

    let text = document.getElementById("h1")
text.innerHTML = `rgb(${rojo}, ${verde}, ${azul})`
})

colorTwo.addEventListener('input', (evento)=> {
         rojo = red.value
     verde = evento.target.value
     azul = blue.value

    body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`
let text = document.getElementById("h1")
text.innerHTML = `rgb(${rojo}, ${verde}, ${azul})`
})
colorThree.addEventListener('input', (evento)=> {
     rojo = red.value
     verde = green.value
     azul = evento.target.value

    body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`
let text = document.getElementById("h1")
text.innerHTML = `rgb(${rojo}, ${verde}, ${azul})`
})

//------------------- Math ---------------------

console.log("//------------------- Math ---------------------");
console.log(Math);

//Math.metodo(valor)

//10 metodos basicos

//math.round() = redondea al entero mas cercano}
console.log(Math.round(4.5));//5

// math.floor() redondea hacia abajo
console.log(Math.floor(4.9));

//math.ceil() redondea hacia arriba
console.log( Math.ceil(4.1));

//math.random() num aleatorio 0 y 1
console.log( Math.random ()  );

let numDado = 6
let minimo= 20
let maximo = 25
const tirarDado = (a,b) => {
    return Math.floor(Math.random () * (b-a+1) ) +a
}
console.log(tirarDado(minimo ,maximo));

//----------------------------------------------
// [0,1,2,3,4,5,6,7,8,9,10,a,b,c,d,e,f]

let posibles = ["0","1","2","3","4","5","6","7","8","9","10","a","b","c","d","e","f"]

posibles[Math.floor(Math.random()*16)]


cambio.addEventListener('click', (evento)=>{

    // body.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
    let r = posibles[Math.floor(Math.random()*16)]
    let g = posibles[Math.floor(Math.random()*16)]
    let b = posibles[Math.floor(Math.random()*16)]
    console.log(`#${r+b}${g+r}${b+g}`);
    
    document.body.style.backgroundColor = `#${r+b}${g+r}${b+g}`
    let text = document.getElementById("h1")
text.innerHTML =`#${r+b}${g+r}${b+g}`
})

