"use strict";

let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
   ];

// part A , list the items 

   function getItemsList(arrayElement){
    return arrayElement.item;
   }

   function displayList(arrayElement){
    console.log(arrayElement);
   }

   let cartItems = cart.map(getItemsList);

   cartItems.forEach(displayList);

   console.log("-----------------");


// part B , find the total cost of everything

function getTotalCost(currentTotal, arrayElement){
    return currentTotal + (arrayElement.price * arrayElement.quantity);
}

let total = cart.reduce(getTotalCost,0);
console.log(total);

console.log("------------------");

// part c , sort list from part A before displaying it


function getSortedItemsList(arrayElement){
    return arrayElement.item;
   }

   function displaySortedList(arrayElement){
    console.log(arrayElement);
   }

   let cartItems2 = cart.map(getSortedItemsList);

   cartItems2.sort().forEach(displaySortedList);

  

   console.log("-----------------");