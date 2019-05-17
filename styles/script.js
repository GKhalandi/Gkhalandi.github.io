var hand = document.querySelector('article#Hand_Sigaret > svg:nth-child(1)');
var Mtoets = document.querySelector('article#text > svg > g#Modiano > path#_letter_M.cls-6');


document.addEventListener('click', function(){
	     hand.classList.toggle('killmeplease');
});


document.addEventListener('click', function(){
      // if (e.keyCode === 32){
          console.log('M');
          Mtoets.classList.toggle('Mtoetsenbord');
        // }
});
