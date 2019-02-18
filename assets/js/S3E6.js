document.getElementById("image1").addEventListener("mouseover", over1);
document.getElementById("image1").addEventListener("mouseout", out1);
document.getElementById("image2").addEventListener("mouseover", over2);
document.getElementById("image2").addEventListener("mouseout", out2);
document.getElementById("image3").addEventListener("mouseover", over3);
document.getElementById("image3").addEventListener("mouseout", out3);
document.getElementById("image4").addEventListener("mouseover", over4);
document.getElementById("image4").addEventListener("mouseout", out4);
document.getElementById("image5").addEventListener("mouseover", over5);
document.getElementById("image5").addEventListener("mouseout", out5);
function over1() {
  document.getElementById("image1").src = "image1_2.jpg";
}
function over2() {
  document.getElementById("image2").src = "image2_2.jpg";
}
function over3() {
  document.getElementById("image3").src = "image3_2.jpg";
}
function over4() {
  document.getElementById("image4").src = "image4_2.jpg";
}
function over5() {
  document.getElementById("image5").src = "image5_2.jpg";
}
function out1() {
  document.getElementById("image1").src = "image1.jpg";
}
function out2() {
  document.getElementById("image2").src = "image2.jpg";
}
function out3() {
  document.getElementById("image3").src = "image3.jpg";
}
function out4() {
  document.getElementById("image4").src = "image4.jpg";
}
function out5() {
  document.getElementById("image5").src = "image5.jpg";
}
