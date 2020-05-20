const display = document.querySelector(".display");
const displayText = document.querySelector("h1");
const images = Array.from(document.querySelectorAll(".image"));

images.forEach(image => {
    image.addEventListener("mouseover", e => {
        displayText.innerHTML = e.target.alt;
        display.style.background = "url('" + e.target.src + "') no-repeat center center/cover";
    })
    image.addEventListener("mouseout", e => {
        displayText.innerHTML = "Make another pick";
        display.style.background = "rgb(0, 255, 115)";
    })
})