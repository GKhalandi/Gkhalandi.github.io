var hoed = document.querySelector('article#hoed');
var anno1 = document.querySelector('article#hoed > svg > path#Hoed');

var hand = document.querySelector('article#Hand_Sigaret');

// Animatie hoed
anno1.addEventListener('dblclick', function(){
				console.log("hoedje omhoog");
	     hoed.classList.toggle('anders');
});


// Animatie hand
hand.addEventListener('dblclick', function(){
				console.log("hand rookt");
	     hand.classList.toggle('roken');

		 	});
