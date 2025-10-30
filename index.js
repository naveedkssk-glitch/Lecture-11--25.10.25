

const toggleBtn = document.getElementById("btn-toggle")
toggleBtn.addEventListener("click", () => {
    console.log("Hi this is me")

    const bodyRef = document.querySelector("body")

    if (bodyRef.style.backgroundColor == "black") {
        bodyRef.style.backgroundColor = "white"
        bodyRef.style.color = "black"

    } else {
        bodyRef.style.backgroundColor = "black"
        bodyRef.style.color = "white"
    }
})


const paraRef = document.querySelector("#para")
paraRef.addEventListener("mouseout", () => {
    alert("I am inside para a theif came")
})
const form = document.querySelector("#userform")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("sunmtied")
})


