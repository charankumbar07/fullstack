function card(tital, cName, viwes, manthsAgo, duration, thumbnail) {
    let viwe;
    if (viwes < 1000) {
        viwe = viwes
    }
    else if (viwes > 1000000) {
        viwe = viwes / 1000000 + "M";
    } else {
        viwe = viwes / 1000 + "K";
    }
    let html = `
        <div class="container">
        <div class="image">
            <img src="${thumbnail}" alt="">
            <div class="capsul">${duration}</div>
        </div>
        <div class="details">
            <h2>${tital}</h2>
            <p>${cName}. ${viwe} viwes. ${manthsAgo} months ago</p>
        </div>
    </div>`

    document.querySelector(".con").innerHTML = document.querySelector(".con").innerHTML + html
}

card("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");