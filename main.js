"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee col-6">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for (let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    div1.innerHTML = renderCoffees(filteredCoffees);
}
// filtered search bar code

function myFunction() {
    // Declare variables
    let input, filter, div, h1, a, i, txtValue, p;
    input = document.getElementById('filtered');
    filter = input.value.toUpperCase();
    div = document.getElementById("coffees");
    h1 = div.getElementsByTagName('h1');
    p = document.getElementsByTagName('p');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < h1.length; i++) {
        a = h1[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            h1[i].style.display = "";
            p[i].style.display = "";
        } else {
            h1[i].style.display = "none";
            p[i].style.display = "none";

        }
    }
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let div1 = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let filteredSearch = document.querySelector('#filtered')

div1.innerHTML = renderCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);
filteredSearch.addEventListener('keyup', myFunction)


