"use strict";

const toyCategoryDropdown =document.getElementById("toyCategoryDropdown");
const toyList = document.getElementById("toyList");
const toyDetailRow = document.getElementById("toyDetailRow");
const toyname = document.getElementById("toyname");
const toyManufacturer = document.getElementById("toyManufacturer");
const toyAge  = document.getElementById("toyAge");

window.onload = () => {
    toyCategoryDropdown.onchange = onToyCategoryDropdownChange;
    toyList.onchange = onToyListChange;
}

function onToyCategoryDropdownChange(){
    console.log("onToyCategoryDropdownChange")

    //figure out what value was selected (which category)

    let selectedCategory = toyCategoryDropdown.value 
    console.log(selectedCategory);
    

    //clear out toylist from previous selction

    toyList.options.length = 0;

    //loop through correct array and add vlaes to the toylist one at a time.

    let toysInCategory = getToysForCategoryCode(selectedCategory);
    console.log(toysInCategory)

    
    for(let toy of toysInCategory){
    addToyNameToToyList(toy.name)
    }

}

function addToyNameToToyList(toyName){
   
        let newOption = document.createElement("option");
        newOption.value = toyName;
        newOption.innerHTML = toyName;
        toyList.appendChild(newOption); 
    
}

function getToysForCategoryCode(categoryCode){
   
 if(categoryCode == "action_figures"){
        return toys.Toys["Action Figures"];
    }
    else if (categoryCode == "educational_toys"){
        return toys.Toys["Educational Toys"];
    }
    else if ( categoryCode == "outdoor_toys"){
       return toys.Toys["Outdoor Toys"];
    }
    else{
        console.log("unrecognized category")
    }


    return [];
}

function getToyByName(){
    let selectedCategory = toyCategoryDropdown.value 
    let toys= getToysForCategoryCode(selectedCategory);

    return toys.find((toy) => toy.name == toyName);
    
}

function onToyListChange(){
    console.log("onToyListChange")

    let selectedToyName = toyList.value;

//look up selected toy
    let selectedToy = getToyByName(selectedToyName);

    //show detail row 
    showDetailRow();

    //set detail row elements to represent this toy.

    toyname.innerHTML = selectedToy.name;
    toyManufacturer.innerHTML = selectedToy.manufacturer;
    toyAge.innerHTML = selectedToy.age_range;

}

function showDetailRow(){
    toyDetailRow.style.display = "block"
}

function hideDetailRow(){
    toyDetailRow.style.display = "none";
    toyname.innerHTML = "";
    toyManufacturer.innerHTML = "";
    toyAge.innerHTML = "";
}