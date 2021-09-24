// Global variables

var total = 0;

// Items 
var espresso = 0;
var latte = 0;
var cappuccino = 0;
var coffee = 0;
var biscotti = 0;
var scone = 0;

// List count 

let countEspresso = 0;
let countLatte = 0;
let countCap = 0;
let countCoffee = 0;
let countBis = 0;
let countScone = 0;

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

    document.getElementById("order").selectedIndex = 0;
}


// Selection menu -- Adds to grand total

document.getElementById("images/espresso_info.jpg").onclick = () => {

    countEspresso += 1;

    total += 1.95;

    document.getElementById("total").innerText = "$ " + total.toFixed(2);

    document.getElementById('order').selectedIndex = 0;
    document.getElementById('e').textContent = 'Espresso: ' + countEspresso;

}

document.getElementById("images/latte_info.jpg").onclick = () => {
    
    countLatte += 1;

    total += 2.95;

    document.getElementById("total").innerText = "$ " + total.toFixed(2);
    document.getElementById('l').textContent = 'Latte: ' + countLatte;
}

document.getElementById("images/cappuccino_info.jpg").onclick = () => {
    
    countCap += 1;

    total += 3.45;

    document.getElementById("total").innerText = "$ " + total.toFixed(2);
    document.getElementById('Cap').textContent = 'Cappuccino: ' + countCap;
}

document.getElementById("images/coffee_info.jpg").onclick = () => { 

    countCoffee += 1;

    total += 1.75;

    document.getElementById("total").innerText = "$ " + total.toFixed(2);
    document.getElementById('Cof').textContent = 'Coffee: ' + countCoffee;
}

document.getElementById("images/biscotti_info.jpg").onclick = () => {   

    countBis += 1;

    total += 1.95;

    document.getElementById("total").innerText = "$ " + total.toFixed(2);
    document.getElementById('Bis').textContent = 'Biscotti: ' + countBis;
}

document.getElementById("images/scone_info.jpg").onclick = () => {

    countScone += 1;

    total += 2.95;

    document.getElementById("total").innerText = "$ " + total.toFixed(2);
    document.getElementById('Scone').textContent = 'Scone: ' + countScone;
    
}

// Place order button

document.getElementById("place_order").onclick =() => {
  

    // This Button needs to send this info to a server.

    window.location.href = "checkOut.html";

    document.getElementById("total").innerText = "$ " + total.toFixed(2);

}

// Clear order button 

document.getElementById("clear_order").onclick = () => {

    total = 0;

    countEspresso = 0;
    countLatte = 0;
    countCap = 0;
    countCoffee = 0;
    countBis = 0;
    countScone = 0;

    document.getElementById('e').textContent = 'Espresso: ' + countEspresso;
    document.getElementById('l').textContent = 'Latte: ' + countLatte;
    document.getElementById('Cap').textContent = 'Cappuccino: ' + countCap;
    document.getElementById('Cof').textContent = 'Coffee: ' + countCoffee;
    document.getElementById('Bis').textContent = 'Biscotti: ' + countBis;
    document.getElementById('Scone').textContent = 'Scone: ' + countScone;

    document.getElementById("total").innerText = `$: ${total}`;

}