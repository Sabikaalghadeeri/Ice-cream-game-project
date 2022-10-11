let box = document.querySelector(".box")
let alphaLetters = []
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let chancesRemaining = 10
let lineBox = document.querySelector('.line')
let resetBtn = document.querySelector('#Reset')
let winner = "YOU WIN, Enjoy eating🍧"

resetBtn.addEventListener('click', Reset)
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


let clickAmounts = 0
let count = 0
let multiple_count = 0
// to active the click letters
function clickLetter(event){
    console.log('letter was clicked!')
    console.log(event.target.classList[0])
    let letter = event.target.classList[0]
    if (randomWord.includes(letter)){
      //correct condition
      console.log(typeof randomWord)
      console.log( randomWord)

      // inside loop
      // [C, O, L , O, R, F, U , L]
      // randomWord.split('').forEach((randomLetter, index) => {
      //   if (randomLetter == letter){
      //     lineBox.children[index].innerHTML = letter
      // }
      for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === letter){
          lineBox.children[i].innerHTML = letter
          console.log(`multiple_count: ${multiple_count}`)
          multiple_count++
        }
      }

      console.log('letter is in the word!')
      // if there is a multiple letter, then add the amount of times it appears to count.
      // else if there is no multiple letter, then add 1 to count.

      if (multiple_count > 1){
        count = multiple_count + count
      } else {
        count = count + 1
      }
      multiple_count = 0

      console.log('guess again!')
    }
    // count the chances remaining if it's wrong letter
    else{
      chancesRemaining--
    }

    event.target.removeEventListener('click', clickLetter)
    event.target.style.backgroundColor = 'lightgrey'
    
    // removeImage()
    console.log(`outside loop randomword length is: ${randomWord.length}`)
    console.log(`outside loop count is ${count}`)
    if(randomWord.length === count) {
      console.log(`randomword length is: ${randomWord.length}`)
      console.log(`count is ${count}`)
      console.log("YOU WIN, Enjoy eating")
       //display winning message
       document.querySelector('#win').innerHTML = 'YOU WIN, Enjoy eating🍧'
    }
    // if there is a winner , display a massage "YOU WIN.!" then exit the function
    // and then display a message saying "Game Over"
    // and exit the function
    if(!randomWord.includes(event)){
      clickAmounts++
      console.log(`click amounts: ${clickAmounts}`)
    }
    
    if(chancesRemaining === 0){
      console.log("GAME OVER, better luck next time.")
       //display losing message
       document.querySelector('#game-over').innerHTML = 'GAME OVER, better luck next time🫠.'
      // document.querySelector('#game-over').innerHTML = window.alert("GAME OVER, better luck next time🫠.")
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
  // // if (chancesRemaining == 0) {
  // //   bowl.style.display = 'none'
  // }
  if (chancesRemaining == 0 ) {
    spoon.style.display = 'none'
  }
  if (chancesRemaining == 1 ) {
    scoop1.style.display = 'none'
  }
  if (chancesRemaining == 2 ) {
    scoop2.style.display = 'none'
  }
  if (chancesRemaining == 3 ) {
    scoop3.style.display = 'none'
  }
  if (chancesRemaining == 4 ) {
    lollipop1.style.display = 'none'
  }
  if (chancesRemaining == 5 ) {
    lollipop2.style.display = 'none'
  }
  if (chancesRemaining == 6 ) {
    syrup.style.display = 'none'
  }
  if (chancesRemaining == 7 ) {
    sparkel.style.display = 'none'
  }
  if (chancesRemaining == 8 ) {
    whippedCream.style.display = 'none'
  }
  if (chancesRemaining == 0 ) {
   cherry.style.display = 'none'
  }
}




function Reset(){
  lineBox.innerHTML = ''
  box.innerHTML = ''
  for (let i = 0; i < alphabet.length; i++) {
    let letter = document.createElement('div')
    letter.innerHTML = alphabet[i]
    letter.id = alphabet[i]
    letter.classList.add(alphabet[i])
    box.appendChild(letter)
  //   letter.classList.add('letter')
    letter.addEventListener('click', clickLetter)
  }
  chooseWord()
}

chooseWord()
