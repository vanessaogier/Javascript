document.getElementById("image1").addEventListener("mouseover", op1);
document.getElementById("image1").addEventListener("mouseout", op2);
function op1() {
  document.getElementById("image1").style.border = "thick solid red";
}
function op2() {
  document.getElementById("image1").style.border = "none";
}
