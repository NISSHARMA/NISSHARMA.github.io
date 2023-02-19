
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
    './public/Nisha-Sharma-Resume.pdf',
    '_blank' // <- This is what makes it open in a new window.
  );
}