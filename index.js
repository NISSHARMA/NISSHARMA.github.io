
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}


function openResume(){
  window.open(
    'https://drive.google.com/file/d/1Wpj4rOUpaMb5GvW60u-jds_l7IsifFx-/view?usp=share_link',
    '_blank' 
  );
}