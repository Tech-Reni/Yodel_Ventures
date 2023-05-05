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

var addCust_info = document.getElementById("add_customer_info");
var custName = document.getElementById("cust_name"); //THE CUSTOMER'S NAME
var custAddress = document.getElementById("cust_address"); //THE CUSTOMER'S ADDRESS
var custPhone = document.getElementById("cust_phoneNum"); //THE CUSTOMER'S PHONE NUMBER
var custPurchase = document.getElementById("Num_of_eggs"); //HOW MANY EGGS THE CUSTOMER BOUGHT

var form = document.querySelector("form");

let Sales = [];

const addSale = () => {
    let sale = {
        customersName: custName.value,
        customersAddress: custAddress.value,
        customersPhone: custPhone.value,
        customersPurchase: custPurchase.value
    }

    Sales.push(sale)

    // To clear the inputs
    custName.value = "";
    custAddress.value = "";
    custPhone.value = "";
    custPurchase.value = "";
    //Clearing the input ends here

    //Saving to LocalStorage
    localStorage.setItem('Sales', JSON.stringify(sale));

    console.log(Sales);
}


document.addEventListener("DOMContentLoaded", () => {
    addCust_info.addEventListener('click', () => {
        addSale();
    })
})
