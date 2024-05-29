"use strict";

let lockerAndAccessCode = [
    ["Locker 1", 135],
    ["Locker 2", 159],
    ["Locker 3", 642]
    ];
    // access the first element
    console.log(lockerAndAccessCode[0]); // ["Locker 1", 135]
    // access the first inner elemet of the second element
    console.log(lockerAndAccessCode[1][0]); // "Locker 2"
    console.log("-------------------");
    console.log(lockerAndAccessCode[2][1]);
    console.log(lockerAndAccessCode[1]);