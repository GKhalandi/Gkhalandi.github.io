var schuiven = document.querySelector('#muur');
var storm = document.querySelector('#test');
var kutmuur = document.querySelector('#Gekkemuur');

kutmuur.addEventListener('click', function(){
    console.log("muur schuift weg");
      schuiven.classList.toggle('weg');

});

document.addEventListener('keydown', function(event){
	if (event.code == 'KeyS') {
    console.log('AUTOLICHTEN');
	   storm.classList.toggle('auto');
}

});

document.addEventListener('click', function(){
  console.log("AUTLICHTEN");
  storm.classList.toggle('auto');

});
