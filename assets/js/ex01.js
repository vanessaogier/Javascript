Ex 1

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

ex2
function surfacecercle() {
  let x = document.getElementById("rayon").value;
  y = x * 3.14 * 2;
  alert("resultat= " + y);
}

ex3
let a = 3;
let b = 2;
function triple(x) {
  return x * 3;
}
function affiche() {
  alert(triple(a));
  alert(triple(b));
}
ex 4
let tab = [-2, 1, 4];
function ad(x) {
  return x + 2;
}
function affiche() {
  alert(ad(tab[0]));
  alert(ad(tab[2]));
}


ex 6
let tab = [-2, 1, 4];
function soustrait(x) {
  Solution = x - 2;
  if (Solution > 0) {
    alert(Solution);
  } else {
    alert("nombre negatif");
  }
}
function affiche() {
  soustrait(tab[0]);
  soustrait(tab[2]);
}



ex 7
function faire_choix() {
  let choix = Number(prompt(" faite un choix "));
  switch (choix) {
    case 1:
      alert("1.merci");
      break;
    case 2:
      alert("2.bonjour");
      break;
    case 3:
      alert("3.aurevoir");
      break;

    default:
      alert("pardon???");
      break;
  }
}

ex 8

function JourDeLaSemaine() {
  let jjour = new Date();
  alert(jjour);

  let jour = jjour.getDay();
  alert(jour);

  switch (jour) {
    case 0:
      alert("Aujourd’hui c’est  Dimanche");
      break;
    case 1:
      alert("Aujourd’hui c’est  Lundi");
      break;
    case 2:
      alert("Aujourd’hui c’est  Mardi");
      break;
    case 3:
      alert("Aujourd’hui c’est  Mercredi");
      break;
    case 4:
      alert("Aujourd’hui c’est  Jeudi");
      break;
    case 5:
      alert("Aujourd’hui c’est  Vendredi");
      break;
    case 6:
      alert("aujuord'hui c'est samedi");
      break;
    case 7:
      alert("Enfin c’est dimanche");
      break;
  }
}
ex 9

function testwhile() {
  let x = prompt("veuillez saisir un caractère contenant la lettre P");
  while (x.search("p") === -1) {
    x = prompt("veuillez saisir un caractère contenant la lettre P");
  }
  alert("votre chaine: " + x);
}
ex 10

function somme() {
  let x = Number(prompt("veuillez entrer un chiffre"));
  let y = Number(prompt("veuillez entrer un chiffre"));
  let z = Number(prompt("veuillez entrer un chiffre"));

  a = Number(x + y + z);

  alert("la somme est" + a);
}

ex11

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


