function testwhile() {
  let x = prompt("veuillez saisir un caractère contenant la lettre P");
  while (x.search("p") === -1) {
    x = prompt("veuillez saisir un caractère contenant la lettre P");
  }
  alert("votre chaine: " + x);
}
