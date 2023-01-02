// let card = document.querySelector(".card")

alert("подождите немного пока интернет включится тогда и предметы в продаже появятся!")
let mice__json = document.querySelector(".mice__json");
let laptop__json = document.querySelector(".laptop__json")
let api_url = "https://razer-api.onrender.com/devices"

const getApiUrl = async() => {
    const responsiv = await fetch(api_url);
    const array = await responsiv.json();
    console.log(array);
    AddApiUrl(array)
}

getApiUrl();

function AddApiUrl(newArray) {
    let html = "";
    const yengFilter = newArray.filter(el => el.category === "MICE")
    yengFilter.slice(0,6).map((el) => {
        html += `
        <div class="card1">
            <img class="card__img" src=${el.image}>
            <h2 class="card__h1">${el.name}</h2>
            <p class="card__p">${el.desc}</p>
            <br>
            <p class="card__p1">USD: ${el.price}$</p>
            <button class="mice__card__div__btn">BUY</button>
        </div>
        
        `;
        mice__json.innerHTML = html;
    })
}




//  const getApi = async() => {
//         const res = await fetch(api_url)
//         const erray = await res.json()
//         console.log(erray);
//         AddApi(erray)
//     }
    
//     getApi()
    
//         function AddApi(newErray) {
//             let htmel = "";
//             const newFilter = newErray.filter(el => el.category === "Laptop")
//             // const newFilter = newArray.filter(el => el?.title === "White Gold Plated Princess01")
//             newFilter.slice(0,6).map((el) => {
//                 htmel += `
//                     <div class="laptop__card>
//                         <img class="laptop__card__rasm" src=${el.image}>
//                         <h2 class="laptop__card__h2">${el.title}</h2>
//                         <p class="laptop__card__p">${el.id}</p>
//                         <p class="laptop__card__p1">${el.albumId}</p>
//                     </div>
//                 `;
//                 laptop__json.innerHTML = htmel;
//             })
//         }

