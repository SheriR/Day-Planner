$(document).ready(function() {
    

let currentDate= dateTime();

// The current day/timw is displayed at the top of the calendar.
   
function dateTime() {
    $("#dateTime").text(moment().format('MMMM Do YYYY, h:mm a'));
};


// The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).
const now = moment();
const currentHour = moment().format('h a');
const nowHour = now.get('hour');
const currentTime = moment().hours();
    // console.log("Time test" + timeTest);
console.log(currentTime); //military time
console.log(now); //full moment time
console.log(currentHour); //not military time
console.log(nowHour); //military time

// Each timeblock is color coded to indicate whether it is in a past, present, or future hour.

function rowColor () {          
    $(".text").each(function () {
        var addHour = parseInt($(this).attr("id"));
        console.log(addHour)

        if (nowHour > addHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
         else if (nowHour < addHour) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } 
        else if (nowHour === addHour) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

rowColor();


// Each timeblock contains an input field and save button.
$(".saveBtn").click(function() {
    textInput = $(this).siblings(".text").val();
    event.preventDefault();
    timeInfo = $(this).siblings(".time").text();
    localStorage.setItem(timeInfo, JSON.stringify(textInput));   

    console.log(textInput);
    console.log(timeInfo);
})

// Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.

// function getText () {
//     // let userInput10 = localStorage.getItem("time10");
//     // $("#10").text(userInput10);
    
//     var savedText9 = JSON.parse(localStorage.getItem("time9"));
//     $("#9").val("");
//     $("#9").val(savedText9);

// };

// getText()

function grabTextInput() {
let savedText9 = document.getElementById("9")
    if(localStorage.9)  {
    savedText9.innerHTML = localStorage.9
};




// let userInput10 = localStorage.getItem("time10");
// $("#10").text(userInput10);

// let userInput11 = localStorage.getItem("time11");
// $("#11").text(userInput11);

// let userInput12 = localStorage.getItem("time12");
// $("#12").text(userInput12);

// let userInput13 = localStorage.getItem("time13");
// $("#13").text(userInput13);

// let userInput14 = localStorage.getItem("time14");
// $("#14").text(userInput14);

// let userInput15 = localStorage.getItem("time15");
// $("#15").text(userInput15);

// let userInput16 = localStorage.getItem("time16");
// $("#16").text(userInput16);

// let userInput17 = localStorage.getItem("time17");
// $("#17").text(userInput17);


// clear button
$(".clearButton").click(function(){
    $("#9, #10, #11, #12, #13, #14, #15, #16, #17").val("");
    localStorage.clear();
});



});  // closes the ready function at the top of the page