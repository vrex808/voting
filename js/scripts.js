$(document).ready(function(){
  const age = parseInt(prompt("How old are you?"));

  if (age >= 21) {
    $('#age21').show();
  } else {
    $('#under21').show();
  }
});