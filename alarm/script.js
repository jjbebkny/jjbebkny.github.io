$(document).ready(function(){

	$("audio")[0].play();
  
  setTimeout(function() {
    $(".gif").addClass("alarm");
    $(".snooze").addClass("alarm");
    $(".orange").addClass("alarm");
  }, 8000);
});