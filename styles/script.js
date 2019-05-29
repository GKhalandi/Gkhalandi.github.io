var hoed = document.querySelector('.Hoed');

// Animatie hoed
hoed.addEventListener('dblclick', function(){
				console.log("hoedje omhoog");
	     hoed.classList.toggle('Hoedje');
});

var hand = document.querySelector('g#Sigaret');


hand.addEventListener('dblclick', function() {
	console.log('click! hand');
	hand.classList.toggle('roken');
});
