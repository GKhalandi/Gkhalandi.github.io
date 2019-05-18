var hand = document.querySelector('article#Hand_Sigaret > svg:nth-child(1)');
var rook = document.querySelector('article#rook_sigaret');

hand.addEventListener('click', function(){
		console.log("man rookt sigarert");
	     hand.classList.toggle('killmeplease');
			 rook.classList.remove('article#rook_sigaret > svg:nth-child(2)');

});
