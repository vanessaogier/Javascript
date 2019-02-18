let x = document.querySelector("button");
x.addEventListener("click", reset);
function reset() {
  document.getElementById("nom").value = " ";
  document.getElementById("prenom").value = " ";
  document.getElementById("ville").value = " ";
}
