function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


for(var i=0; i<document.querySelectorAll(".download-button").length;i++)
{
document.querySelectorAll(".download-button")[i].addEventListener("click",function ()
{
  alert("The game is currently under maintanance. Please check back with us later.");
}

);
}
