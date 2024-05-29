"use strict";

let candies = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Life Savers", price: 2.50},
    {product: "Sour Worms", price: 4.25},
    {product: "Hersheys", price: 5.00},
    {product: "Nerds", price: 3.25},
    {product: "Twix", price:6.25},
    {product: "KitKat", price: 4.75}
]

// which candies costs less than $4.00?

let matchingcandies = [];
let candyProducts = candies.filter(candy => candy.price < 4.00);

if(candyProducts.length > 0){
    for(let i = 0; i < candyProducts.length; i++){
        matchingcandies.push(candyProducts[i].product);
    }
}

   
console.log("The matching candies that cost less than $4.00 are " + matchingcandies);
console.log("---------------");

//which candies has "M&M" in its name?

let matchingCandyNames = [];

let candyNames = candies.filter(candy => candy.product.indexOf("M&M") >= 0);

if(candyNames.length > 0 ){
    for(let i = 0; i < candyNames.length; i++){
        matchingCandyNames.push(candyNames[i].product);
    }
}
console.log("The products that have 'M&M' in their name are " + matchingCandyNames);
console.log("---------------");

//do we carry "Sweedish Fish" ?

let yesOrNo = "no"; 
     let swedishFish = candies.filter(candy => candy.product === "Swedish Fish");
     let carryCandy = swedishFish.length > 0;

     if(carryCandy){
        yesOrNo = "yes"
     }
        
   console.log("Do we carry Sweedish Fish? " + yesOrNo);  



