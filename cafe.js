// Global variables

var total = 0;

// Items 
var espresso = 0;
var latte = 0;
var cappuccino = 0;
var coffee = 0;
var biscotti = 0;
var scone = 0;

// Mouse over/out functions

function setNewImageEspresso(){
    document.getElementById("images/espresso_info.jpg").src = "images/espresso_info.jpg";
}
function setOldImageEspresso(){
    document.getElementById("images/espresso_info.jpg").src = "images/espresso.jpg";
}
function setNewImageLatte(){
    document.getElementById("images/latte_info.jpg").src = "images/latte_info.jpg";
}

function setOldImageLatte(){
    document.getElementById("images/latte_info.jpg").src = "images/latte.jpg";
}

function setNewImageCap(){
    document.getElementById("images/cappuccino_info.jpg").src = "images/cappuccino_info.jpg";
}

function setOldImageCap(){
    document.getElementById("images/cappuccino_info.jpg").src = "images/cappuccino.jpg";
}

function setNewImageCof(){
    document.getElementById("images/coffee_info.jpg").src = "images/coffee_info.jpg";
}
function setOldImageCof(){
    document.getElementById("images/coffee_info.jpg").src = "images/coffee.jpg";
}

function setNewImageBis(){
    document.getElementById("images/biscotti_info.jpg").src = "images/biscotti_info.jpg"
}

function setOldImageBis(){
    document.getElementById("images/biscotti_info.jpg").src = "images/biscotti.jpg"
}

function setNewImageScone(){
    document.getElementById("images/scone_info.jpg").src = "images/scone_info.jpg"
}

function setOldImageScone(){
    document.getElementById("images/scone_info.jpg").src = "images/scone.jpg"
}


// Selection menu -- Adds to grand total

document.getElementById("images/espresso_info.jpg").onclick = () => {

    total += 1.95;
}

document.getElementById("images/latte_info.jpg").onclick = () => {
    console.log("This is latte.")

    total += 2.95;
}

document.getElementById("images/cappuccino_info.jpg").onclick = () => {
    console.log("This is cappuccino.")

    total += 3.45;
}

document.getElementById("images/coffee_info.jpg").onclick = () => {
    console.log("This is coffee.")

    total += 1.75;
}

document.getElementById("images/biscotti_info.jpg").onclick = () => {
    console.log("This is biscotti.")

    total += 1.95;
}

document.getElementById("images/scone_info.jpg").onclick = () => {
    console.log("This is scone.")

    total += 2.95;
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