function calculimc() {
  let poids = +prompt("entrez votre poids");
  let taille = +prompt("entrez votre taille");
  let imc = poids / (taille * taille);
  console.log(imc);
  alert("votre imc est de :" + imc);
  if (imc < 16.5) {
    alert("famine");
  } else if (imc <= 18.5) {
    alert("maigreur");
  } else if (imc <= 25) {
    alert("normal");
  } else if (imc <= 30) {
    alert("surpoids");
  } else if (imc <= 35) {
    alert("obésité modéree");
  }
}
