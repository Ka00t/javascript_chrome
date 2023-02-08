const h1 = document.querySelector(".hello:first-child h1");

function handletitleclick() {
    const clickedclass = "clicked";
    if(h1.className === "clicked") {
        h1.className = "";
    } else {
        h1.className = "clicked";
    }
}


h1.addEventListener("click",handletitleclick);
