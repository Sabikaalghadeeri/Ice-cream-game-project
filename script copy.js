let box = document.querySelector(".box")
let alphaLetters = []
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let chancesRemaining = 10
let lineBox = document.querySelector('.line')
let resetBtn = document.querySelector('#Reset')

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


let chances = 0
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

    event.target.removeEventListener('click', clickLetter)
    event.target.style.backgroundColor = 'lightgrey'
    chancesRemaining--
    // removeImage()
    console.log(`outside loop randomword length is: ${randomWord.length}`)
    console.log(`outside loop count is ${count}`)
    if(randomWord.length === count) {
      console.log(`randomword length is: ${randomWord.length}`)
      console.log(`count is ${count}`)
      console.log("YOU WIN, Enjoy eating🍧")
    }
  
    
    if(!randomWord.includes(event)){
      chances++
      console.log(`click amounts: ${chances}`)
    }
    
    if(chances===10){
      console.log("GAME OVER, better luck next time🫠.")
    }
    return
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
