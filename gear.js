alert("AssalomuAlekum подождите немного пока интернет включится тогда и предметы в продаже появятся!")
let gear__json = document.querySelector(".gear__json")
let api_url = "https://razer-api.onrender.com/devices"


const getApi = async() => {
    const res = await fetch(api_url)
    const erray = await res.json()
    console.log(erray);
    AddApi(erray)
}

getApi()

    function AddApi(newErray) {
        let htmel = "";
        const newFilter = newErray.filter(el => el.category === "Gear")
        newFilter.slice(0,6).map((el) => {
            htmel += `
                <div class="laptop__card">
                    <img class="laptop__card__rasm" src=${el.image}>
                      <div class="laptop__card__div">
                        <h1 class="laptop__card__h2">${el.name}</h1> <br>
                        <h3 class="laptop__card__h5">${el.desc}</h3> 
                        <br>
                        <p class="headset__card__p1">USD: ${el.price}$</p>
                        <button class="laptop__card__div__btn">BUY</button> 
                      </div>
                </div>
                <hr class="laptop__hr">
            `;
            gear__json.innerHTML = htmel;
        })
    }