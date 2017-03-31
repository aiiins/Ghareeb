// show/hide menu
var button = document.getElementById("john");
var menu = document.getElementById("menu_img");

button.onclick = function() {
  if (menu.style.display !== "block") {
    menu.style.display = "block"
  } else {
    menu.style.display = "none"
  }
}

// needs to be resversed
