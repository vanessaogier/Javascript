let champs = document.getElementById("nom");
//champs.addEventListener ("blur", function(){})

champs.onblur = afficherMessage;

function afficherMessage() {
  alert("merci de votre participation");
}
