var schuiven = document.querySelector('.MUURSCHUIVEN');
var kutmuur = document.querySelector('#Gekkemuur');

kutmuur.addEventListener('click', function(){
    console.log("muur schuift weg");
      schuiven.classList.toggle('weg');

});


var muur = document.querySelector('.MUURSCHUIVEN');
	muur.addEventListener('click', function() {
		console.log('click! muur');
	});
