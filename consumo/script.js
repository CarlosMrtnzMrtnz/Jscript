const url = "https://rickandmortyapi.com/api/character?page=";

// let cart = document.getElementById("box");
// fetch(url)
//   .then((response) => response.json())
//   .then((dataApi) => {
//     dataApi.results;
//     // console.log(dataApi.results);
//     for (let i = 0; i < dataApi.results.length; i++) {
//       const element = dataApi.results[i];
//       if (element.status == "Dead") {
//         cart.innerHTML += `
//                 <div class="cart">
//                 <div class="tools">
//                     <div class="circle">
//                     <span class="red box"></span>
//                     </div>
//                 </div>
//                 <div class="card__content">
//                     <div class="">
//                     <div class="d-flex justify-content-center" >
//                     <h2>ID:${element.id}</h2>
//                 </div>
//                     <img class="w-100" src="${element.image}" alt="">

//                     <div class="d-flex justify-content-center">
//                                 <h2 class="nombre">
//                         ${element.name}
//                     </h2>
//                     <p class="text-success">${element.status}</p>
//                     </div>
//                     </div>
//                 </div>
//                 </div>`;
//       } else if (element.status == "Alive") {
//         cart.innerHTML += `
//                 <div class="cart">
//                 <div class="tools">
//                     <div class="circle">
//                     <span class="green box"></span>
//                     </div>
    
//                 </div>
//                 <div class="card__content">
//                     <div class="">
//                     <div class="d-flex justify-content-center" >
//                     <h2>ID:${element.id}</h2>
//                 </div>
//                     <img class="w-100" src="${element.image}" alt="">

//                     <div class="d-flex justify-content-center">
//                                 <h2 class="nombre">
//                         ${element.name}
//                     </h2>
//                     <p class="text-success">${element.status}</p>
//                     </div>
//                     </div>
//                 </div>
//                 </div>`;
//       }
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// // ---------------------------------------------------------------------------

// try {
// } catch (error) {}
const renderCart = (array) => {
    let cart = document.getElementById("box");
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
                cart.innerHTML += `
                <div class="cart">
                <div class="tools">
                    <div class="circle">
                    <span class="red box"></span>
                    </div>
                </div>
                <div class="card__content">
                    <div class="">
                    <div class="d-flex justify-content-center" >
                    <h2>ID:${element.id}</h2>
                </div>
                    <img class="w-100" src="${element.image}" alt="">

                    <div class="d-flex justify-content-center">
                                <h2 class="nombre">
                        ${element.name}
                    </h2>
                    <p class="text-success">${element.status}</p>
                    </div>
                    </div>
                </div>
                </div>`;
    }
}

const solicitudApi = async (url, num) => {

    try {

        let solicitud = await fetch(url+num)
        let convert = await solicitud.json()
        let arr = convert.results
        console.log(convert.info.prev);
        renderCart(arr)
    } catch (error) {
        console.log("Catch del trycatch " + error);
    }
};



solicitudApi(url, 42)

