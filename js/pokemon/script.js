const url = "https://pokeapi.co/api/v2/pokemon/"
let next
let prev 




const verPokemones = async (array)=>{
    try {
        // let urlsPokemons = []
        let caja = document.getElementById("caja")
        // caja.classList.toggle("ooooooooooooo")
        for (let i = 0; i < array.length; i++) {
            const pokemon = array[i];
            // urlsPokemons.push(pokemon.url)
            let response = await fetch(pokemon.url)
            let convert = await response.json()
            // console.log(convert);
            caja.innerHTML += `
            <div class="card ">
                <div class="card-border-top">
                </div>
                <div class="img">
                    <img class="imge " src="${convert.sprites.other.dream_world.front_default}" alt="">
                </div>

                <div class="">
                    <span>${convert.name}</span>
                    <p class="job">${convert}</p>

                </div>
                <button> Click </button>
            </div>`
        }


        // console.log(urlsPokemons);
        
    } catch (error) {
        console.log(error);
    }
}

const pokemon = async (urlApi) => {

    try {
        let solicitud = await fetch(urlApi)
        let data = await solicitud.json()
        let dataApi = data.results
        next = data .next
        prev = data .previous
        console.log(next, prev);
        
        verPokemones(dataApi)
// caja.classList.toggle("ooooooooooooo")
    } catch (error) {
        console.log(error);
    }

}

pokemon(url)




let btns = document.getElementsByClassName("button-3d")
for (let i = 0; i < btns.length; i++) {
    const element = btns[i];
    element.addEventListener("click", (evento) => {
        caja.innerHTML = ""
        if (evento.target.innerHTML == "❮") {
            pokemon(prev)
        } else {
            pokemon(next)
        }

        
    })
}

flashy('Next page!', {
type: 'default',
position: 'top-center',
duration: 1000,
});




// let botonX = document.getElementById("x")

// botonX.addEventListener("click", (evento) => {
//     console.log("1");
//     check

//     if (check.checked) {
//         console.log("marcado");
        
//     }
//     pokemon(url)
    
// })
