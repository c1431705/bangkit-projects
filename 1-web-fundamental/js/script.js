// Script Navbar
function navbarMobile() {
    var n = document.getElementsByTagName("nav");
    if (n.className === "navbar") {
        n.className += " responsive";
    } else {
        n.className = "navbar";
    }
  }