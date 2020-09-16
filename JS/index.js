$(document).ready(function(){
    $(".ctaGridArea button").hover(function(){
      $(this).css("background-color", "#2464A4");
      }, function(){
      $(this).css("background-color", "#373737");
    });
  });


  var i = 0;
  var txt = "Art Historian.";
  var speed = 150;

  function typeWriter() {
    if (i < txt.length) {
    document.getElementById("art").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
  }
  
typeWriter();

