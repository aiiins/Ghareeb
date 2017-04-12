// show/hide menu
"use strict"
var button = document.getElementById("john");

var imgArray = {
"achar-ghost": "achar-ghost.jpg",
"aloo-palak": "aloo-palak-2.jpg"
}

button.onclick = function() {
  var menu = document.getElementById("menu_img");
  
  if (menu.style.display !== "block") {
    menu.style.display = "block"
  } else {
    menu.style.display = "none"
  }
}

// needs to be resversed
// Should move around pcitures if Need Be
