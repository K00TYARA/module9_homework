const text = document.querySelector("#text");
const images = document.querySelector("#images");
images.innerHTML = localStorage.getItem("cards")

function useRequest (url) {
    return fetch(url)
        .then(response => {
            return response.json()
        }).catch(err => {
            console.error(err);
        })
}

function displayResult(apiData) {
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
        cards = cards + cardBlock;
    });

    images.innerHTML = cards;
    localStorage.setItem("cards", images.innerHTML);
}

btn.addEventListener("click", async () => {
    const value1 = document.querySelector("#inp1").value;
    const value2 = document.querySelector("#inp2").value;


    if ((isNaN(value1) || value1 < 1 || value1 > 10) && (isNaN(value2) || value2 < 1 || value2 > 10)) {
        text.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
        images.innerHTML = "";
        localStorage.setItem("cards", images.innerHTML);
    } else if (isNaN(value1) || value1 < 1 || value1 > 10) {
        text.innerHTML = "Номер страницы вне диапазона от 1 до 10";
        images.innerHTML = "";
        localStorage.setItem("cards", images.innerHTML);
    } else if (isNaN(value2) || value2 < 1 || value2 > 10) {
        text.innerHTML = "Лимит вне диапазона от 1 до 10";
        images.innerHTML = "";
        localStorage.setItem("cards", images.innerHTML);
    } else {
        text.innerHTML = "";
        const request = await useRequest(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`);
        displayResult(request)
    }
})