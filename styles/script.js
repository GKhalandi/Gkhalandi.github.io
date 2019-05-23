var hoed = document.querySelector('article#hoed');
var anno1 = document.querySelector('article#hoed > svg > path#Hoed');

anno1.addEventListener('dblclick', function(){
				console.log("man rookt sigarert");
	     hoed.classList.toggle('anders');
});
