const url = "https://pokeapi.co/api/v2/pokemon/"


const verPokemones = async (array)=>{
    try {
        // let urlsPokemons = []
        let caja = document.getElementById("caja")
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

        verPokemones(dataApi)

    } catch (error) {
        console.log(error);
    }

}

pokemon(url)






let botonX = document.getElementById("x")

botonX.addEventListener("click", (evento) => {
    
    pokemon(url)

})