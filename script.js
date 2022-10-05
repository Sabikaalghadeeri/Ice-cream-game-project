let box = document.querySelector(".box")
let alphaLetters = []
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let chancesRemaining = 7
let lineBox = document.querySelector('.line')
//let playAgainBtn = document.querySelector .. ... .
// array of words for the computer to randomy choose from
const wordsArr = ["BEACH","SUMMER","WATERPARK","HOLIDAY","POOL","ICECREAM","HEAT","COLORFUL","COLD","SUNSHINE"]

// creating divs for alphabets letters 
for (let i = 0; i < alphabet.length; i++) {
  let letter = document.createElement('div')
  letter.innerHTML = alphabet[i]
  letter.id = alphabet[i]
  letter.classList.add(alphabet[i])
  box.appendChild(letter)
//   letter.classList.add('letter')
  letter.addEventListener('click', clickLetter)
}


let chances = 0
let count = 0
// to active the click letters
function clickLetter(event){
    console.log('letter was clicked!')
    console.log(event.target.classList[0])
    let letter = event.target.classList[0]
    if (randomWord.includes(letter)){
      //correct condition
      let indexOfLetter = randomWord.indexOf(letter)
      lineBox.children[indexOfLetter].innerHTML = letter
      //check all instances
      console.log('letter is in the word!')
      count ++
    } else {
      //incorrect condition
      console.log('guess again!')
    }
    event.target.removeEventListener('click', clickLetter)
    event.target.style.backgroundColor = 'lightgrey'
    chancesRemaining--
    // removeImage()

    if(randomWord.length === count)
    console.log("YOU WIN")
    
    if(!randomWord.includes(event)){
      chances++
      console.log(chances)
    }
    
    if(chances===7){
      console.log("GAME OVER")
    }

  }
  

let randomWord
function chooseWord() {
  console.log("Choosing a word...")
  // chooses a random word from the array
  
  randomWord = wordsArr[Math.floor(Math.random() *wordsArr.length)]
//  ['C', 'O', 'L', 'D'].forEach....
  randomWord.split('').forEach(letter => {
    let newLine = document.createElement('span')
    newLine.innerHTML = ' _ '
    lineBox.appendChild(newLine)
  })
  console.log(randomWord)
}


// let showLives = document.getElementById("mylives");
// comments = function () {
//   showLives.innerHTML = "You have " + chancesRemaining + " lives";
//   if (chancesRemaining < 1) {
//     showLives.innerHTML = "Game Over";
//   }
//   for (let i = 0; i < randomWord.length; i++) {
//     if (newLine === randomWord.length) {
//       showLives.innerHTML = "You Win!";
//     }
//   }
//   console.log(showLives)
// }

// in your click event listener for keyboard
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
  if (chancesRemaining == 0) {
    bowl.style.display = 'none'
  }
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
  // chooseWord() ---> this function resets the game
//     for (let i = 0; i < alphabet.length; i++) {
//         console.log(alphabet[i])

//     document.getElementById('alphabet[i]').innerHTML=''
//     alphaLetters = []
//  }
// }

chooseWord()
// guessedWord()