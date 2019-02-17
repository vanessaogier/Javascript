function calculMoyenne() {
  let result = 0;
  let count = 0;
  let x = +prompt("entre un nombre entier");
  if (isNaN(x)) {
    console.log(x);
    while (isNaN(x)) {
      alert(" Ceci n'est pas correct");
      x = +prompt("entre un nombre entier");
      console.log(x);
    }
  }
  for (let i = 0; x >= 0; i++) {
    alert("nombre choisi" + x);
    console.log(x);
    if (isNaN(x)) {
      while (isNaN(x)) {
        alert(" Ceci n'est pas correct");
        x = +prompt("entre un nombre entier");
      }
    }
    count++;
    result += x;
    console.log(result);
    x = +prompt("entre un nombre entier");
  }
  let b = result / count;
  console.log(b);
  alert("La moyenne est de " + b);
  console.log(count);
}
