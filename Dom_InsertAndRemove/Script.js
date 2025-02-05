let div = document.createElement("div")
div.setAttribute("class","jsele")
div.innerHTML="i am ele from js"
document.querySelector(".container").append(div)

let cont =document.querySelector(".container")
cont.insertAdjacentHTML("beforeend","I am ele from adjacent")
