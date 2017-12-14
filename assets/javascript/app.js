$(document).ready(function() {

var correctAnswers = 0;
var incorrectAnswers = 0;
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



// button[type='button']

