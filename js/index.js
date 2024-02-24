const hamburger = document.querySelector("button#hamburger")
const close = document.querySelector("button#close")
const list = document.querySelector("ul.list")


function displayMenu() {
     hamburger.style.display = "none"
     close.style.display = "block"
     list.style.display = "block";

}

function closeMenu() {
     console.log("display!");
     hamburger.style.display = "block"
     close.style.display = "none"
     list.style.display = "none";
} 