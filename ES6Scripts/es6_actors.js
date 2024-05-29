"use strict"

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
    ];

    // Who is the Academy Member whose ID is 187?

    function getMember(memberID){
        let memberName;

        let matchingMmemebr = academyMembers.find(member => member.memID === memberID);

        if(matchingMmemebr){
            memberName = matchingMmemebr.name;
        }
        return memberName;
    }
    console.log(getMember(187));

    // Who has been in at least 3 films?
    function getFilmLength(academyMembers, lookFilmNumber){
    
        let matching = [];
        let filmNumber = lookFilmNumber;
       for (let i = 0; i < academyMembers.length; i++){
        if(academyMembers[i].films.length >= filmNumber){
            matching.push(academyMembers[i].name);
        }
            
       }
        return matching;
       }
       console.log("The ones that been in at least 3 films are " + getFilmLength(academyMembers, 3));


     //  Who has a name that starts with "Bob"?     

     function getname(academyMembers){
        let matchingMembers = [];

       let members = academyMembers.filter(member => member.name.substring(0, 3) === "Bob");

       if(members.length > 0 ){
        members.forEach(member => matchingMembers.push(member.name));
       }
       return matchingMembers;

     }
    
     console.log(getname(academyMembers) + "start with 'bob'");
    