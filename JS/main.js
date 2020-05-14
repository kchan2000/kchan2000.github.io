// variables are like a box, the following thing is the variable
$(document).ready(function () {

// how to make it so that it shuts down any page it's on

$("#b1").click(function(){
  console.log("hellos");
    $("#crow").trigger("play");
    $(".frontpage").hide();
    $(".wbpt").show();
  });

  // WALK BIKE PT

  $("#b").click(function(){
      $(".wbpt").hide();
      $(".bike1").show();
    });

  $("#w").click(function(){
      $(".wbpt").hide();
      $(".walk1").show();
    });

// BUS VS TRAIN

    $("#pt").click(function(){
        $(".wbpt").hide();
        $(".busortrain").show();
      });

// BUS CHOICES
    $("#bus").click(function(){
        $(".busortrain").hide();
        $(".seat").show();
      });

      $("#gma").click(function(){
          $(".seat").hide();
          $(".hs2").show();
          $("#hspretty").get(0).play();
        });

    $("#ignore2").click(function(){
        $(".seat").hide();
        $(".badend2").show();
          $("#tpwk").get(0).play();
      });


  // TRAIN CHOICES
      $("#metro").click(function(){
          $(".busortrain").hide();
          $(".napornah").show();
        });

      $("#zzz").click(function(){
          $(".napornah").hide();
          $(".nap").show();
        });

      $("#awake").click(function(){
          $(".napornah").hide();
          $(".awake").show();
        });

      $("#busagain").click(function(){
          $(".awake").hide();
          $(".seat").show();
        });

      $("#runningman").click(function(){
          $(".awake").hide();
          $(".busker").show();
        });

        $("#coin").click(function(){
            $(".busker").hide();
            $(".hs3").show();
            $("#hsbusker").get(0).play();
          });

        $("#runningwoman").click(function(){
            $(".busker").hide();
            $(".keeprunning").show();
            $("#tpwk").get(0).play();
          });

// ENDLINE CHOICES

      $("#endline").click(function(){
          $(".nap").hide();
          $(".birdvrun").show();
        });

      $("#womanrun").click(function(){
          $(".birdvrun").hide();
          $(".busker").show();
        });

        $("#bird").click(function(){
            $(".birdvrun").hide();
            $(".birdvcat").show();
          });

        $("#bird2").click(function(){
            $(".birdvcat").hide();
            $(".birdbad").show();
            $("#tpwk").get(0).play();
          });




        $("#cat").click(function(){
            $(".birdvcat").hide();
            $(".hs4").show();
            $("#hscat").get(0).play();

          });


// WALK CHOICES

  $("#walkgirl").click(function(){
      $(".walk1").hide();
      $(".end1").show();
      $("#clown").get(0).play();
    });

$("#coffee").click(function(){
    $(".walk1").hide();
    $(".coffee1").show();
  });

// COFFEE ORDER, CLICK COFFEE

  $("#ilovec").click(function(){
      $(".coffee1").hide();
      $(".wallet").show();
    });

// COFFEE HS ENDING
    $("#purse").click(function(){
        $(".wallet").hide();
        $(".hs1").show();
        $("#adoreyou").get(0).play();
      });

// COFFEE BAD ENDING
    $("#ignore1").click(function(){
        $(".wallet").hide();
        $(".burntongue").show();
        $("#tpwk").get(0).play();
      });

      $("#w2").click(function(){
          $(".bike1").hide();
          $(".walk1").show();
        });

        $("#pt2").click(function(){
            $(".bike1").hide();
            $(".busortrain").show();
          });

          $(".reset").click(function(){
            $(".scene").hide();
            $(".frontpage").show();
            $(".playbutton").show();
            location.reload();
          })


});
