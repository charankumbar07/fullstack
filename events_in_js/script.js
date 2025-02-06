let button = document.getElementById("btn");

button.addEventListener("click", () => {
    document.querySelector(".child").innerHTML = "<b>Hey I Am Clicked</b>"
})

document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("child has been clicked")
})
document.querySelector(".perent").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("perent has been clicked")
})
document.querySelector(".container").addEventListener("click", (e) => {
    e.stopPropagation()
    alert("container has been clicked")
})

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

setInterval(() => {
    document.querySelector(".perent").style.background = getRandomColor();
}, 1000);

setInterval(() => {
    document.querySelector(".child").style.background = getRandomColor();
}, 1000);

setInterval(() => {
    document.querySelector(".container").style.background = getRandomColor();
}, 1000);

// setTimeout(() => {
//     document.querySelector(".child").style.background = getRandomColor();
// }, 5000);
