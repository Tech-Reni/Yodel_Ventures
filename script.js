/*window.addEventListener('DOMContentLoaded', () => {
    var pass = prompt("What is the Pass Key");
    if (pass == 'Yodel') {
        alert("Access Granted");
    } else {
        alert("Access Denied")
        document.body.style.display = 'none';
        document.body.style.backgroundColor = 'white';
    }
})*/


const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}));

var add_customer = document.querySelector(".add_customer");
var cust_info = document.querySelector(".customer_info");
add_customer.addEventListener('click', () => {
    add_customer.classList.toggle("active");
    cust_info.classList.toggle("active");
})