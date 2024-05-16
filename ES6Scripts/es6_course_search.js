"use strict";

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];



//when does the PROG200 course start?

   //first version

//  let theStartDate;

//    for (let i = 0; i < courses.length; i++) {
//     let course = courses[i];
//     if (course.CourseId === specificCourseId) {
//         theStartDate = course.StartDate;
//         break; // Exit the loop once the course is found
//     }
// }


function getCourseStartDate(specificCourseId){
    let theStartDate;

    let matchingCourse = courses.find(course => course.CourseId === specificCourseId);

    if(matchingCourse){
        theStartDate = matchingCourse.StartDate;
    }
    return theStartDate;

}

console.log("The start date for PROG200 Course is " + getCourseStartDate("PROG200"));


// What is the title of the PROJ500 Course?

function getCourseTitle(specificCourseId){
    let theTitle;

    let matchingCourse = courses.find(course => course.CourseId === specificCourseId);

    if (matchingCourse){
        theTitle = matchingCourse.Title;
    }
     return theTitle;
       
}

console.log("The title of the PROJ500 Course is " + getCourseTitle("PROJ500"));