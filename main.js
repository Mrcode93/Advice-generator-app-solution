let btn = document.querySelector("button");
btn.addEventListener("click", fetchData);
//make function to fetch the data from api and display it in the DOM
function fetchData() {
    fetch("https://api.adviceslip.com/advice").then((response) =>
        response.json().then((data) => {
            let txt = document.querySelector(".text p");
            let txtId = document.querySelector(".advice-id p span");
            txt.innerHTML = data.slip.advice;
            txtId.innerHTML = data.slip.id;
        })
    );
}