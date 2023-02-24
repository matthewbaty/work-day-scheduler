// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// // in the html.
// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// });

// get the current hour using dayjs
// var currentHour = dayjs().hour();
var currentHour = 
console.log(currentHour);

// loop through all time-block divs
$(".time-block").each(function() {
  //get the hour from the div's id attribute
  var hour = parseInt($(this).attr("id").split("-")[1]);

  // check if the hour is in the past, present, or future and add the corresponding class
  if (hour < currentHour) {
    $(this).addClass("past");
  } else if (hour == currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

// listen for save button clicks and save the textarea's value to local storage
$(".saveBtn").on("click", function() {
  var text = $(this).siblings(".description").val().trim();
  var id = $(this).parent().attr("id");
  localStorage.setItem(id, text);
});

// load any saved text from local storage
$(".time-block").each(function() {
  var id = $(this).attr("id");
  var text = localStorage.getItem(id);

  if (text) {
    $(this).children(".description").val(text);
  }
});