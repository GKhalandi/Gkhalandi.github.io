var schuiven = document.querySelector('#muur');
var storm = document.querySelector('#test');
var kutmuur = document.querySelector('#Gekkemuur');

kutmuur.addEventListener('click', function(){
    console.log("muur schuift weg");
      schuiven.classList.toggle('weg');

});

document.addEventListener('keydown', function(event){
	if (event.code == 'KeyS') {
    console.log('zandstorm');
	   storm.classList.toggle('zandstorm');
}

});

document.addEventListener('dblclick', function(){
  console.log("man rookt sigarert");
  storm.classList.toggle('zandstorm');

});
