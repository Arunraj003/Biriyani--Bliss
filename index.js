function toggleNavbar() {
  var navbarLinks = document.getElementById("navbarLinks");
  if (navbarLinks.style.display === "block") {
    navbarLinks.style.display = "none";
  } else {
    navbarLinks.style.display = "block";
  }
}
function addToCart(event){
  var btn = document.getElementById("foods");
  btn.innerHTML = alert("Your order Recieved successfully");
  location.reload();
}