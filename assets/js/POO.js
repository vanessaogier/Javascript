// //let table = {}; // nouvelle manière de déclarer

// //let main_color = "#FF0000";

// //let chair = {
// //color: main_color,
// //feets: 4,
// //things: ["papier", "telecommande", "clé usb"],
//knock: function() {
// // console.log("TAP TAP ! ");
// // console.log(chair.things); // ["papier",..] si on utilise des références
// // console.log(this.things); // ["papier",...] si on utilise d'autres instances
// // }
// //};

// let charactere = {
//   name: "vanessa",
//   age: 43,
//   items_to_give: ["balle", "mouchoir", "pince"],

//giveltem: function() {
//return charactere.items_to_give[
//Math.floor(Math.random() * charactere.items_to_give.length)
///];
// }

// console.log("GIVE IT" + charactere.giveltem());

// for (let key in charactere) {
//   console.log(charactere[key]);
// }
console.log("hello");
let shop = [
  (Epee = {
    title: " Epee magique",
    physic: 50,
    magic: 50,
    minLevel: 3,
    available: true
  }),

  (Hache = {
    title: " hache magique",
    physic: 60,
    magic: 20,
    minLevel: 15,
    available: false
  }),

  (Couteau = {
    title: " couteau magique",
    physic: 80,
    magic: 10,
    minLevel: 5,
    available: true
  })
];
function all() {
  console.log(shop);
}
all();

function Available() {
  for (let i in shop)
    if (shop[i].available === true) {
      console.log(shop[i]);
    }
}
Available();

function level() {
  for (let i in shop)
    if (shop[i].minLevel >= 10) {
      console.log(shop[i]);
    }
}
level();

// }
// console.log(charactere);

// lol: function(){console.log(hello)},
// myArray: ["vanessa", "laplus belle"]
//
//console.log(charactere.myArray[0])
//
//console.log(chair.feets); // -> 4
// console.log(chair["feets"]); // -> 4
//
//chair.knock(); // lance la méthode knock
//
//for (let key in chair) {
//boucle
//   console.log(typeof key); // affiche le type de key ici String
//   console.log(key); // affiche chaque clé de mon objet ("color", "feets",...)
//   console.log(chair[key]); // affiche chaque valeur ("#FF0000", 4,...);
//
