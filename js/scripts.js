$(document).ready(function() {
  $("#formsWrapper form").submit(function(event) {
      event.preventDefault();

      var answerOne = parseInt($("input:radio[name=question1]:checked").val());
      var answerTwo = parseInt($("input:radio[name=question2]:checked").val());
      var answerThree = parseInt($("input:radio[name=question3]:checked").val());
      var answerFour = parseInt($("input:radio[name=question4]:checked").val());
      var answerFive = parseInt($("input:radio[name=question5]:checked").val());

      var answerTotal = answerOne + answerTwo + answerThree + answerFour + answerFive

      if (answerTotal > 0 && answerTotal <= 10) {
        console.log("I'm working Option 1"); // For Debugging
        $("#option2").hide();
        $("#option3").hide();
        $("#option4").hide();
        $("#option1").show();
      } else if (answerTotal > 10 && answerTotal <= 20) {
        console.log("I'm working Option 2"); // For Debugging
        $("#option1").hide();
        $("#option3").hide();
        $("#option4").hide();
        $("#option2").show();
      } else if (answerTotal > 20){
        console.log("I'm working Option 3"); // For Debugging
        $("#option1").hide();
        $("#option2").hide();
        $("#option4").hide();
        $("#option3").show();
      } else {
        $("#option1").hide();
        $("#option2").hide();
        $("#option3").hide();
        $("#option4").show();
      };
  });
});
