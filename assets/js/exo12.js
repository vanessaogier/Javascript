function calculConversion() {
  let choix = +prompt(
    "choisissez dans le menu les options suivantes  \n 0. Fin du programme \n 1. De Celcius à Farenheit \n 2. De Celsius vers Kelvin \n 3. De Fahrenheit vers Celsius \n 4. De Fahrenheit vers Kelvin \n 5. De Kelvin vers Celsius \n 6. De Kelvin vers Fahrenheit"
  );

  switch (choix) {
    case 0:
      alert("End of the game");
      break;
    case 1:
      let temperature = +prompt("temperature en C° :");
      farenheit = (temperature * 9) / 5 + 32;
      alert(farenheit + " Farenheit");
      break;
    case 2:
      temp = +prompt("temperature en C° :");
      kelvin = temp + 273.15;
      alert(kelvin + " Kelvin");
      break;
    case 3:
      let C = prompt("temperature en F° :");
      C = (farenheit * 9) / 5 + 32;
      alert(C + " Farenheit");
      break;
    case 4:
      alert("conversion:");
      break;
    case 5:
      alert("conversion");
      break;
    case 6:
      alert("conversion");
      break;
  }
}
