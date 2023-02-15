
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