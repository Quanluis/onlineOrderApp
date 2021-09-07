// Global variables


let total = 0;


// Items 

document.getElementById("images/espresso_info.jpg").onclick = () => {
    console.log("This is espresso.")

}

document.getElementById("images/latte_info.jpg").onclick = () => {
    console.log("This is latte.")
}

document.getElementById("images/cappuccino_info.jpg").onclick = () => {
    console.log("This is cappuccino.")
}

document.getElementById("images/coffee_info.jpg").onclick = () => {
    console.log("This is coffee.")
}

document.getElementById("images/biscotti_info.jpg").onclick = () => {
    console.log("This is biscotti.")
}

document.getElementById("images/scone_info.jpg").onclick = () => {
    console.log("This is scone.")
}



// Place order button

document.getElementById("place_order").onclick = () => {
    console.log("You clicked this button");

    console.log(total);

};

// Clear order button 

document.getElementById("clear_order").onclick = () => {

}