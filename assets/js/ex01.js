function SurfaceRectangle() {
  let x = document.getElementById("longueur").value;

  let y = document.getElementById("largeur").value;

  b = x * y;
  alert("surface= " + b);
}
function PeriRectangle() {
  let x = document.getElementById("Longueur").value;

  let y = document.getElementById("Largeur").value;

  b = x * 2 + y * 2;
  alert("périmetre= " + b);
}
