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
