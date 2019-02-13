function test() {
  let x = document.getElementById("premier_nombre").value;

  let y = document.getElementById("deuxieme_nombre").value;

  a = Math.trunc(x);
  b = a * y;
  alert("solution: " + b);
}
