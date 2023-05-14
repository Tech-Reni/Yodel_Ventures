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

var add_sale = document.querySelector(".add_sale");
var sale_info = document.querySelector(".sale_info");
add_sale.addEventListener('click', () => {
    add_sale.classList.toggle("active");
    sale_info.classList.toggle("active");
})

var addSale_info = document.getElementById("add_sale_info");
var num_of_crates = document.getElementById("num_of_crates"); //THE NUMBER OF CRATES BOUGHT
var price_per_crate = document.getElementById("price_per_crate"); //THE PRICE PER EACH CRATE BOUGHT(CAUSE PRICES OF EGG VARIES)
var date_bought = document.getElementById("date_bought"); //THE DATE THAT THE EGG WAS BOUGHT

var form = document.querySelector("form");

let Sales = [];


const addSale = () => {

    let sale = {
        numberOfCrates: num_of_crates.value,
        pricePerCrate: price_per_crate.value,
        dateBought: date_bought.value,
        Total: num_of_crates.value * price_per_crate.value
    }

    Sales.push(sale)

    // To clear the inputs
    num_of_crates.value = "";
    price_per_crate.value = "";
    date_bought.value = ""
        //Clearing the input ends here

    //Saving to LocalStorage
    localStorage.setItem('Sales', JSON.stringify(sale));
    buildTable([sale])

    console.log(Sales);
}


var table = document.getElementById('tbl');


function buildTable(data) {

    for (let i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td>${data[i].numberOfCrates}</td>
                        <td>${data[i].pricePerCrate}</td>
                        <td>${data[i].dateBought}</td>
                        <td>${data[i].Total}</td>
                  </tr>`

        table.innerHTML += row
    }
}

document.addEventListener("DOMContentLoaded", () => {
    addSale_info.addEventListener('click', () => {
        addSale();
    })
})
