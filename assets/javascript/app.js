$(document).ready(function() {

var correctAnswers = 0;
var incorrectAnswers = 0;
var questions = document.getElementsByTagName("question");
var answers = ["A", "A", "A", "A", "A"]
var counter = 60;

$("#quiz").hide();

$(".btn").click(function(){
  $("#quiz").show();
    setInterval(function() {
      counter--;
       if (counter >= 0) {
          span = document.getElementById("timer");
          span.innerHTML = counter;
       }
       if (counter === 0) {
          alert("Sorry, time's up!");
          clearInterval(counter);
        }
      }, 1000);
 });
});

// if the user clicks the "A" radio button then the correct answers tally will go up by one, if the user clicks any other choice, the incorrect answers tally will go down by one
// correct and incorrect answers score will alert after clicking submit
// button[type='button']

