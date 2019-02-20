let weapon = [
    (Epee = {
      name: " Epee supreme",
      damage: 50,
      magic: 50,
      minLevel: 3,
      available: true
    }),
  
    (Hache = {
      name: " hache magique",
      damage: 60,
      magic: 20,
      minLevel: 15,
      available: false
    }),
  
    (Couteau = {
      name: " couteau magique",
      damage: 80,
      magic: 10,
      minLevel: 5,
      available: true
    })
  ];
let mainCharacter = {

name :"Léo",
level:20,
life:10,
weapon:Epee = {
    name : "Epee Suprême",
    damage : 60,
},
attack :function attack(){}

}


function attack(){
    console.log( mainCharacter.name +" attaque avec l'"+ mainCharacter.weapon.name + " et crée " + (mainCharacter.weapon.damage * mainCharacter.level) + " de dommage" );
}
attack()

// léo epee supreme level*damage