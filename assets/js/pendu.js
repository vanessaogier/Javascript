let tab = ["b", "o", "n", "j", "o", "u", "r"];
let tab2 = ["*", "*", "*", "*", "*", "*", "*"];
console.log("hello");
// alert("bienvenu au jeu du pendu! trouve le mot -------");
do {
  alert(tab2);
  let reponse = prompt("donne une lettre");
  console.log(reponse);
  switch (reponse) {
    case "b":
      reponse == tab[0];
      alert("bravo vous avez choisi b");
      tab2[0] = "b";
      break;

    case "o":
      reponse == tab[1];
      reponse == tab[4];
      alert("bravo vous avez choisi o");
      tab2[1] = "o";
      tab2[4] = "o";
      break;

    case "n":
      reponse == tab[2];
      alert("bravo vous avez choisi la lettre n");
      tab2[2] = "n";
      break;

    case "j":
      reponse == tab[3];
      alert("bravo vous avez choisi la lettre j");
      tab2[3] = "j";
      break;

    case "u":
      reponse == tab[5];
      alert("bravo vous avez choisi la lettre u");
      tab2[5] = "u";
      break;
    case "r":
      reponse == tab[6];
      alert("bravo vous avez choisi la lettre r");
      tab2[6] = "r";
      break;

    default:
      alert("reessaie");
      break;
  }
} while (tab2.indexOf("*") != -1);
{
  alert("victoire");
}
