let x = document.getElementById("mot de passe");
let y = document.getElementById("confirmation");
let inp = document.getElementsByTagName("input");
let button = document.querySelector("button");

button.addEventListener("click", function comparaison() {
  if (inp[0].value !== inp[1].value) {
    inp[0].style.border = "2px solid red";
    inp[1].style.border = "2px solid red";
  } else {
    inp[0].style.border = "2px solid green";
    inp[1].style.border = "2px solid green";
  }
});
