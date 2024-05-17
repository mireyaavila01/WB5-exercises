"use strict";

let kids = [
    { first : "Natalie", last : "Plyers" },
     { first: "Brittany", last: "Ray" },
     { first: "Zachary", last: "Westly" }
    ];
    function buildFullName(arrayElement) {
     return arrayElement.first + " " + arrayElement.last;
    }
    function displayName(arrayElement) {
     console.log(arrayElement);
    }
    
    let namesList = kids.map(buildFullName);
    namesList.forEach(displayName);