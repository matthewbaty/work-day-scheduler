// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //   // TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs().format("dddd, MMM DD YYYY");
  $("#currentDay").text(currentDate);
  // get the current hour using dayjs
  var currentHour = dayjs().hour();
  // var currentHour = 12
  //   console.log(currentHour);

  // loop through all time-block divs
  $(".time-block").each(function () {
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
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val().trim();
    var id = $(this).parent().attr("id");
    localStorage.setItem(id, text);
  });

  // load any saved text from local storage
  $(".time-block").each(function () {
    var id = $(this).attr("id");
    var text = localStorage.getItem(id);

    if (text) {
      $(this).children(".description").val(text);
    }
  });
});