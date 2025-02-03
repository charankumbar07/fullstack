function getcolor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);

    return `rgb(${val1},${val2},${val3})`
}
// let boxes=document.getElementsByClassName("box")

let boxes = document.querySelector(".container").children

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getcolor()
    e.style.color = getcolor()
})