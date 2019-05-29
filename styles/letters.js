var mtoets = document.querySelector('article#text > svg > g#Modiano > path#_letter_M.cls-13');

var otoets = document.querySelector('article#text > svg > g#Modiano > path#letter_o2.cls-10');

var o2toets = document.querySelector('article#text > svg > g#Modiano > path#letter_O.cls-11');

var dtoets = document.querySelector('article#text > svg > g#Modiano > path#letter_D.cls-7');

var itoets = document.querySelector('article#text > svg > g#Modiano > path#letter_I.cls-8');

var atoets = document.querySelector('article#text > svg > g#Modiano > path#letter_A.cls-9');

var ntoets = document.querySelector('article#text > svg > g#Modiano > g#letter_N >path.cls-12');

var madiano = document.querySelector('article#text > svg > g#Modiano');


// met dank aan Sanne de docent
document.addEventListener('keydown', function(event){
  if (event.code == 'KeyM') {
    mtoets.classList.toggle('Mtoetsenbord');
  }
  else if (event.code == 'KeyO') {
    o2toets.classList.toggle('O2toetsenbord');
  }
  else if (event.code == 'KeyQ') {
    otoets.classList.toggle('Otoetsenbord');
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
madiano.addEventListener('dblclick', function(){
    mtoets.classList.toggle('Mtoetsenbord');
    otoets.classList.toggle('Otoetsenbord');
    o2toets.classList.toggle('O2toetsenbord');
    itoets.classList.toggle('Itoetsenbord');
    atoets.classList.toggle('Atoetsenbord');
    ntoets.classList.toggle('Ntoetsenbord');
    dtoets.classList.toggle('Dtoetsenbord');

  }

);
