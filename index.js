function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav_menu") {
    x.className += " responsive";
  } else {
    x.className = "nav_menu";
  }
}
