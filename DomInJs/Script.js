let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor="red"

let green=document.getElementById("green")

green.style.backgroundColor="green"

let q=document.querySelectorAll(".box")
console.log(q)

q.forEach(e=>{
    e.style.backgroundColor="yellow"
})

let t=document.getElementsByTagName("div")
console.log(t)