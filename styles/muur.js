
var muur_click = document.querySelector('#muur');

muur_click.addEventListener('click', function(){
    console.log("muur schuift weg");
      muur_click.classList.toggle('weg');

});
