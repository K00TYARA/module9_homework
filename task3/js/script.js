const inp = document.querySelector("input");
const btn = document.querySelector("button");
const text = document.querySelector("#error");
const result = document.querySelector("#result")

function useRequest(url, callback){
    let xhr = new XMLHttpRequest();
    console.log("Работает1");
    xhr.open("GET", url);
    xhr.onload = function () {
        if (xhr.status != 200) {
            alert(`Статус ответа: ${xhr.status}`);
        } else {
            if (callback) {
                callback(JSON.parse(xhr.response));
                console.log("Работает2");
            }
        }
    }

    xhr.onerror = function () {
        console.log(`Ошибка! Статус ответа: ${xhr.status}`);
    }

    xhr.send();
}

function displayResult(apiData){
    let cards = "";
    apiData.forEach(item => {
        let cardBlock = `
        <div class="card">
            <img src="${item.download_url}" class="card-image"/>
            <p>${item.author}</p>
        </div>
        `;
        cards += cardBlock;
    })
    result.innerHTML = cards;
}



btn.addEventListener("click", () => {
    let num = Number(inp.value);
    if (typeof num === "number" && !isNaN(num)){
        if (num >= 1 && num <= 10){
            text.innerHTML = "";
            useRequest(`https://picsum.photos/v2/list?limit=${num}`, displayResult);
        } else {
            result.innerHTML = "";
            text.innerHTML = "Число вне диапазона от 1 до 10";
        }
    }
})