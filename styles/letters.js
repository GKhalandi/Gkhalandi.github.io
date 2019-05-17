var mtoets = document.querySelector('article#text > svg > g#Modiano > path#_letter_M.cls-6');


// M wordt rood
document.addEventListener('click', function(){
      // if (e.keyCode === 32){
          console.log('M wordt rood');
          mtoets.classList.toggle('Mtoetsenbord');
        // }
});
