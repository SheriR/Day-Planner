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
          
    $("data").each(function () {
        var addHour = parseInt($(this).attr("id"));
        console.log(addHour);
   
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

// Each timeblock contains an input field and save button.

// $(".saveBtn").on("click", function() {
//     let textInput = $(this).siblings(".text").val();
//     let time = $(this).parent().attr("id");
//     localStorage.setItem(time, textInput)

//     console.log(textInput)
// })


$(".saveBtn").click(function() {
    textInput = $(this).siblings(".text").val();
    console.log(textInput);
    timeInfo = $(this).siblings(".time").text();
    console.log(timeInfo);
    localStorage.setItem(timeInfo, JSON.stringify(textInput));
    
    
})

// Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.













});  // closes the ready function at the top of the page