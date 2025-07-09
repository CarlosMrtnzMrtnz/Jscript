const url = "https://pokeapi.co/api/v2/pokemon/"




const pokemon = async (urlApi) => {

    try {
        let solicitud = await fetch(urlApi)
        let data = await solicitud.json()
        let dataApi = data.results
            
    } catch (error) {
        console.log(error);
    }

}



pokemon(url)