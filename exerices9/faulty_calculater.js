let random = Math.random();
let a = prompt("Enetr first number");
let b = prompt("Enetr oparetion");
let c = prompt("Enetr second number");

let o = {
    "+": "-",
    "-": "*",
    "*": "/",
    "/": "+",
}


if (random > 0.1) {
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
else {
    b = o[b]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}