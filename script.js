
// Go to top button
function gototop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

// Navbar stuff with scrolling 
const navbarafter = document.getElementById("navbar")
var pixels = window.innerHeight;
var prevScrollpos = window.pageYOffset;
// Set some elements by scratch
document.getElementById("navbar").style.top = "0";
document.getElementById("menuchange").style.top = "10px";
document.getElementById("ddc").style.margin =  "15px 0 0 0"

window.onscroll = function() {
  var scrollTop = $(window).scrollTop();
  var pixels = window.innerHeight;
  if (prevScrollpos > pixels * 1/7) {
      document.getElementById("navbar").style.background = "#0E1B31";
    } else {
      document.getElementById("navbar").style.background = "transparent";
    }
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || prevScrollpos < pixels - 100) {
    document.getElementById("navbar").style.visibility = "visible";
    document.getElementById("navbar").style.top = "0";
    document.getElementById("menuchange").style.top = "10px";
    document.getElementById("ddc").style.margin =  "15px 0 0 0"
  } else {
    document.getElementById("navbar").style.top = "-80px";
    document.getElementById("navbar").style.visibility = "hidden";
    document.getElementById("menuchange").style.top = "-80px";
    document.getElementById("ddc").style.margin =  "-23em 0 0 0"
  }
  prevScrollpos = currentScrollPos;
}

// Menu button checked change nav header on pixel count

  // Disable Scroll on Checkbox

  $('#active').change(function() {
    if ($('#active').is(":checked")) { 
      $('html').css('overflow','hidden');
    }
      else {
      $('html').css('overflow','auto');
    }
  });
  
document.getElementById('subscribe').onclick = function() {
  console.log("hi!")
}

