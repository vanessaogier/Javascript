let champs = document.getElementById("nom");
champs.value;
champs.onblur = afficherMessage;

function afficherMessage() {
  alert(champs.value);
}
