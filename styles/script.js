var hoed = document.querySelector('.Hoed');

// Animatie hoed
hoed.addEventListener('click', function(){
				console.log("hoedje omhoog");
	     hoed.classList.toggle('Hoedje');
});

var hand = document.querySelector('g#Sigaret');


hand.addEventListener('click', function() {
	console.log('click! hand');
	hand.classList.toggle('roken');
});
