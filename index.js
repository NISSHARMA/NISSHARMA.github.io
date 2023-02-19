
function myfunction(){
  console.log("res")
  let x=document.getElementById("responsive_navbar")
  if(x.style.display=="none"){
    x.style.display="block"
  }else{
    x.style.display="none"
  }
}


function handleclose(){
  let y=document.getElementById("responsive_navbar")
    y.style.display="none"
  
}

function openResume(){
  window.open(
    'https://drive.google.com/file/d/1Wpj4rOUpaMb5GvW60u-jds_l7IsifFx-/view?usp=share_link',
    '_blank' // <- This is what makes it open in a new window.
  );
}