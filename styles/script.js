// var hoed = document.querySelector('article#hoed');
// var anno1 = document.querySelector('article#hoed > svg > path#Hoed');
//
// var hand = document.querySelector('#Hand');
//
// // Animatie hoed
// anno1.addEventListener('dblclick', function(){
// 				console.log("hoedje omhoog");
// 	     hoed.classList.toggle('anders');
// });
//
//
// // Animatie hand
// hand.addEventListener('dblclick', function(){
// 				console.log("hand rookt");
// 	     hand.classList.toggle('roken');
//
// 		 	});

	var hand = document.querySelector('#Hand');
	hand.addEventListener('click', function() {
		console.log('click! hand');
	});

	var muur = document.querySelector('#muur');
	muur.addEventListener('click', function() {
		console.log('click! muur');
	});
