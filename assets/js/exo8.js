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
