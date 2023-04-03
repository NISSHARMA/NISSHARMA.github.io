let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});


function openResume() {
  window.open(
    'https://drive.google.com/file/d/1Wpj4rOUpaMb5GvW60u-jds_l7IsifFx-/view?usp=share_link',
    '_blank'
  );
}

function paddingFunction() {
  let x = doccument.getElementById("home")
  x.style.padding = "100px"
}

document.getElementById("submit").addEventListener("click", saveFile() );



function saveFile(e) {

  e.preventDefault()


  let Formdata = JSON.parse(localStorage.getItem("portfolioData")) || []

  let name = doccument.getElementById("fname")
  let email = doccument.getElementById("email")
  let text = document.getElementById("subject")
  let data = {
    "name": name.value,
    "email": email.value,
    "text": text.value
  }
  console.log(data)
  Formdata.push(data)
  localStorage.setItem("portfolioData", JSON.stringify(Formdata))
}



