let txt = document.getElementById("texte");
let btn = document.querySelectorAll("a");
btn[0].addEventListener("click", buttonOne);
btn[1].addEventListener("click", buttonTwo);
function buttonOne() {
  txt.style.display = "flex";
}
function buttonTwo() {
  txt.style.display = "none";
}
