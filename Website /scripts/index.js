"use strict";

const toyCategoryDropdown =document.getElementById("toyCategoryDropdown");
const toyList = document.getElementById("toyList");
const toyDetailRow = document.getElementById("toyDetailRow");
const toyManufacturer = document.getElementById("toyManufacturer");
const toyAge  = document.getElementById("toyAge");

window.onload = () => {
    toyCategoryDropdown.onchange = onToyCategoryDropdownChange;
    toyList.onchange = onToyListChange;
}

function onToyCategoryDropdownChange(){
    console.log("onToyCategoryDropdownChange")

    //figure out what value was selected (which category)

    

    //clear out toylist from previous selction

    //loop through correct array and add vlaes to the toylist one at a time.
}

function onToyListChange(){
    console.log("onToyListChange")

    //loop up selected toy

    //show detail row 

    //set detail row elements to represent this toy.
}

