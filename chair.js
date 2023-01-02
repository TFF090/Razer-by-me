alert("подождите немного пока интернет включится тогда и предметы в продаже появятся!")
let chairs__json = document.querySelector(".chairs__json")
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
    const yengFilter = newArray.filter(el => el.category === "Chairs")
    yengFilter.slice(0,6).map((el) => {
        html += `
        <div class="chair__card1">
            <img class="chair__card__img" src=${el.image}> 
            <hr>
            <h2 class="chair__card__h2">${el.name}</h2>
            <p class="chair__card__p">${el.desc}</p>
            <br>
            <p class="chair__card__p1">USD: ${el.price}$</p>
            <button class="mice__card__div__btn">BUY</button> 
        </div>
        
        `;
        chairs__json.innerHTML = html;
    })
}