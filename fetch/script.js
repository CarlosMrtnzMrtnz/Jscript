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
