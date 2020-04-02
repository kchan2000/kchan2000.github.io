// variables are like a box, the following thing is the variable

var life = 0;


$(document).ready(function () {

  $(".scene").hide();
  $("#s1").show();

  $("#option1").click(function(){
      $("#s1").hide();
      $("#s2").show();
      life = life +1;
      $("#life").html(life);


  });

  // var++ is the same as var=var +1



  $("#option2").click(function(){
      $("#s1").hide();
      $("#s3").show();

  });


});

// . and # to call classes and // ids respectiviley
// reads top to bottom, so whatever is at the top overrides what is below it
