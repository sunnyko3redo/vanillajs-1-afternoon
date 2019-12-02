const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');
const clearButton = document.getElementById('clearCards');

console.log(idInput);
console.log(colorInput);

function setCard() {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
    console.log(card);
}

function clearColor(){

    const hearts = document.getElementById('hearts');
    const diamonds = document.getElementById('diamonds');
    const clubs = document.getElementById('clubs');
    const spades = document.getElementById('spades');
   

    hearts.style.removeProperty("color");
    diamonds.style.removeProperty("color");
    clubs.style.removeProperty("color");
    spades.style.removeProperty("color");
   


};
