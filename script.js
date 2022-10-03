let box = document.querySelector(".box")
let alphaLetters = []
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// creating divs for alphabets letters 
for (let i = 0; i < alphabet.length; i++) {
  console.log(alphabet[i])
  let letter = document.createElement('div')
  letter.innerHTML = alphabet[i]
  letter.id = alphabet[i]
  letter.classList.add(alphabet[i])
  box.appendChild(letter)
//   letter.classList.add('letter')
  letter.addEventListener('click', clickLetter)
}

// to active the click letters
function clickLetter(event){
    console.log('letter was clicked!')
    console.log(event.target.classList[0])
    event.target.removeEventListener('click', clickLetter)
    event.target.style.backgroundColor = 'lightgrey'
}

// in your click event listener for keyboard
chancesRemaining--
removeImage()

let bowl = document.querySelector('.bowl')
let scoop1 = document.querySelector('.scoop1')
let scoop2 = document.querySelector('.scoop2')
let scoop3 = document.querySelector('.scoop3')
let lollipop1 = document.querySelector('.lollipop1')
let lollipop2 = document.querySelector('.lollipop2')
let syrup = document.querySelector('.syrup')
let sparkel = document.querySelector('.sparkel')
let whippedCream = document.querySelector('.whippedCream')
let cherry = document.querySelector('.cherry')
let spoon = document.querySelector('.spoon')

function removeImage(){
  // if (chancesRemaining == 0) {
  //   bowl.style.display = 'none'
  // }
  if (chancesRemaining == 1 ) {
    spoon.style.display = 'none'
  }
  if (chancesRemaining == 2 ) {
    scoop1.style.display = 'none'
  }
  if (chancesRemaining == 3 ) {
    scoop2.style.display = 'none'
  }
  if (chancesRemaining == 4 ) {
    scoop3.style.display = 'none'
  }
  if (chancesRemaining == 5 ) {
    lollipop1.style.display = 'none'
  }
  if (chancesRemaining == 6 ) {
    lollipop2.style.display = 'none'
  }
  if (chancesRemaining == 7 ) {
    syrup.style.display = 'none'
  }
  if (chancesRemaining == 8 ) {
    sparkel.style.display = 'none'
  }
  if (chancesRemaining == 9 ) {
    whippedCream.style.display = 'none'
  }
  if (chancesRemaining == 10 ) {
   cherry.style.display = 'none'
  }
  
}




// function Reset(){
//     for (let i = 0; i < alphabet.length; i++) {
//         console.log(alphabet[i])

//     document.getElementById('alphabet[i]').innerHTML=''
//     alphaLetters = []
//  }
// }