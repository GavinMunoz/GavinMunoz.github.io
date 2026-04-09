$(document).ready(function(){

  // Get modal elements
  var modal = document.getElementById("odin-modal");
  var btn = document.getElementById("odin-button");
  var span = document.getElementsByClassName("close-button")[0];

  // Open modal on button click
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // Close modal on 'x' click
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Close modal on click outside the image
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

});
