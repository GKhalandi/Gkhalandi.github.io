var mtoets = document.querySelector('article#text > svg > g#Modiano > path#_letter_M.cls-6');

var otoets = document.querySelector('article#text > svg > g#Modiano > path#letter_o2.cls-10');

var o2toets = document.querySelector('article#text > svg > g#Modiano > path#letter_O.cls-11');

var dtoets = document.querySelector('article#text > svg > g#Modiano > path#letter_D.cls-7');

var itoets = document.querySelector('article#text > svg > g#Modiano > path#letter_I.cls-8');

var atoets = document.querySelector('article#text > svg > g#Modiano > path#letter_A.cls-9');

var ntoets = document.querySelector('article#text > svg > g#Modiano > g#letter_N >path.cls-12');



// M wordt rood
// mtoets.addEventListener('click', function(){
//       // if (e.keyCode === 77){
//           console.log('M wordt rood');
//           mtoets.classList.toggle('Mtoetsenbord');
//         // }
// });

// met dank aan Sanne de docent
document.addEventListener('keydown', function(event){
  if (event.code == 'KeyM') {
    mtoets.classList.toggle('Mtoetsenbord');
  }
  else if (event.code == 'KeyO') {
    otoets.classList.toggle('Otoetsenbord');
  }
  else if (event.code == 'KeyQ') {
    o2toets.classList.toggle('O2toetsenbord');
  }
  else if (event.code == 'KeyI') {
    itoets.classList.toggle('Itoetsenbord');
  }
  else if (event.code == 'KeyA') {
    atoets.classList.toggle('Atoetsenbord');
  }
  else if (event.code == 'KeyN') {
    ntoets.classList.toggle('Ntoetsenbord');
  }
  else if (event.code == 'KeyD') {
    console.log("letter d wordt anders");
    dtoets.classList.toggle('Dtoetsenbord');

  }

});



// Tablet en telefoon
Modiano.addEventListener('click', function(event){
  if (event.code == 'mtoets') {
    mtoets.classList.toggle('Mtoetsenbord');
  }
  else if (event.code == 'otoets') {
    otoets.classList.toggle('Otoetsenbord');
  }
  else if (event.code == 'o2toets') {
    o2toets.classList.toggle('O2toetsenbord');
  }
  else if (event.code == 'itoets') {
    itoets.classList.toggle('Itoetsenbord');
  }
  else if (event.code == 'atoets') {
    atoets.classList.toggle('Atoetsenbord');
  }
  else if (event.code == 'ntoets') {
    ntoets.classList.toggle('Ntoetsenbord');
  }
  else if (event.code == 'dtoets') {
    console.log("letter d wordt anders");
    dtoets.classList.toggle('Dtoetsenbord');

  }

});