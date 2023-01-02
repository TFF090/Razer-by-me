alert("подождите немного пока интернет включится тогда и предметы в продаже появятся!")
let headset__json = document.querySelector(".headset__json")
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
    const yengFilter = newArray.filter(el => el.category === "Headsets")
    yengFilter.slice(0,6).map((el) => {
        html += `
        <div class="headset__card1">
            <img class="headset__card__img" src=${el.image}>
            <h2 class="headset__card__h2">${el.name}</h2>
            <p class="headset__card__p">${el.desc}</p>
            <br>
            <p class="headset__card__p1">USD: ${el.price}$</p>
            <button class="laptop__card__div__btn">BUY</button> 
        </div>
        
        `;
        headset__json.innerHTML = html;
    })
}

