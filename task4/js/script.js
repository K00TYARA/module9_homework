const text = document.querySelector("#text");
const image = document.querySelector(".result")

function useRequest (url) {
    const xhr = new XMLHttpRequest();

    xhr.responseType = "json";

    xhr.open("GET", url, true);

    xhr.onload = () => {
        if (xhr.status >= 400) {
            console.error(xhr.response)
        } else console.log(xhr.response);
    }

    xhr.onerror = err => console.error(err);

    xhr.send()
}

btn.addEventListener("click", () => {
    const value1 = document.querySelector("#inp1").value;
    const value2 = document.querySelector("#inp2").value;

    if (value1 < 100 || value1 > 500 || value2 < 100 || value2 > 500){
        text.innerHTML = "Число вне диапазона от 100 до 500"
    } else {
        text.innerHTML = "";
        useRequest(`https://loremflickr.com/json/g/${value1}/${value2}/all`)
    }
})