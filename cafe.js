// Global variables

var sum = 0;
var total;

// Items 
var espresso = 2.75;
var latte = 2.50;
var cappuccino = 4.50;
var coffee = 3.00;
var biscotti = 3.75;
var scone = 3.50;

// new images 

const newImagesEspresso = new Image();
newImagesEspresso.src = "images/espresso.jpg"

document.getElementById("images/espresso_info.jpg").onclick = () => {


   document.getElementById("order").innerHTML = espresso;
}

document.getElementById("images/espresso_info.jpg").onmouseover = () => {
    console.log("This is hovering");
}

document.getElementById("images/latte_info.jpg").onclick = () => {
    console.log("This is latte.")

    total =+ latte;
}

document.getElementById("images/cappuccino_info.jpg").onclick = () => {
    console.log("This is cappuccino.")

    total =+ cappuccino;
}

document.getElementById("images/coffee_info.jpg").onclick = () => {
    console.log("This is coffee.")

    total =+ coffee;
}

document.getElementById("images/biscotti_info.jpg").onclick = () => {
    console.log("This is biscotti.")

    total =+ biscotti;
}

document.getElementById("images/scone_info.jpg").onclick = () => {
    console.log("This is scone.")

    total =+ scone;
}

// Place order button

document.getElementById("buttons").onclick =() => {
    console.log("total.")

    document.getElementById("order")

    console.log(total)
}

// Clear order button 

document.getElementById("clear_order").onclick = () => {

}