// Script Navbar
function navbarMobile() {
    var n = document.getElementsById("navId");
    if (n.className === "navClass") {
        n.className += " responsive";
    } else {
        n.className = "navClass";
    }
  }


// Script Slides
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("titik");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" letak", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " letak";
}

