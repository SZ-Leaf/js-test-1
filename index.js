var scene = document.querySelector('.scene');
var cards = document.querySelectorAll('.card');

for(let i =0; i<cards.length; i++){
   cards[i].children[0].textContent = Math.round((i +1)/2)
   cards[i].children[1].textContent = i
   cards[i].addEventListener('click', onCardClick)
}

function onClick(event){
   event.target.parentNode.classList.toggle('is-flipped');
}

function onCardClick(event){
   event.currentTarget.classList.toggle('is-flipped');
}