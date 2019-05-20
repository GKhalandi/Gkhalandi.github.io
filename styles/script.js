var hand = document.querySelector('article#Hand_Sigaret > svg:nth-child(1)');

hand.addEventListener('click', function(){
		console.log("man rookt sigarert");
	     hand.classList.toggle('roken');

});
