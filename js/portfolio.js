document.body.className += ' fade-out';
    $(function() {
      $('body').removeClass('fade-out');
    }
  );

// The following function adds a smooth scrolling to all links

$(document).ready(function(){   
  $("a").on('click', function(event) {
	  
    // Make sure this.Link has a value before overriding default behavior
    if (this.Link !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store Link
      var Link = this.Link;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (2000) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(Link).offset().top
      }, 2000, function(){
   
        // Add Link (#) to URL when done scrolling (default click behavior)
        window.location.Link = Link;
      });
    } // End if
  });
});

// These functions open and close the contact form 
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  this.Close();
}

function PlayThorVideo() {
	document.getElementById("CookieVideo").style.display = "none";
	document.getElementById("ThreeSixtyVideo").style.display = "none";
  	document.getElementById("ThorVideo").style.display = "block";
	document.getElementById("ThorVid").currentTime = 0;
	document.getElementById("ThorVid").play();
}

function Play360RoomVideo() {
	document.getElementById("ThorVideo").style.display = "none";
	document.getElementById("CookieVideo").style.display = "none";
  	document.getElementById("ThreeSixtyVideo").style.display = "block";
	document.getElementById("ThreeSixtyVid").currentTime = 0;
	document.getElementById("ThreeSixtyVid").play();
}

function PlayCookieRoomVideo() {
	document.getElementById("ThorVideo").style.display = "none";
	document.getElementById("ThreeSixtyVideo").style.display = "none";
	document.getElementById("CookieVideo").style.display = "block";
	document.getElementById("CookieVid").currentTime = 0;
	document.getElementById("CookieVid").play();
}

function VideoOver() {
	document.getElementById("ThorVideo").style.display = "none";
	document.getElementById("ThreeSixtyVideo").style.display = "none";
	document.getElementById("CookieVideo").style.display = "none";
}
