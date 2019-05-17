var hand = document.querySelector('article#Hand_Sigaret > svg:nth-child(1)');

document.addEventListener('click', function(){
		console.log("man rookt sigarert");
	     hand.classList.toggle('killmeplease');
});
