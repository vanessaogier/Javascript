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
